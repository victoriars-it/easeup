// =========================
// EaseUp - JavaScript principal
// Tema, mensagens motivacionais e navegação
// =========================

(function () {
    // =========================
    // Seletores principais
    // =========================

    const root = document.documentElement;
    const themeButton = document.getElementById("theme-toggle");
    const motivationalMessage = document.getElementById("motivational-message");
    const sections = ["home", "meditation", "breathing", "music"];
    const navigationLinks = document.querySelectorAll("[data-nav]");
    const meditationList =
        document.getElementById("meditation-list");
    const breathingList =
        document.getElementById("breathing-list");

    const breathingPlayer =
        document.getElementById("breathing-player");

    const breathingTechniqueTitle =
        document.getElementById("breathing-technique-title");

    const breathingTechniqueDescription =
        document.getElementById("breathing-technique-description");

    const breathingCircle =
        document.getElementById("breathing-circle");

    const breathingPhase =
        document.getElementById("breathing-phase");

    const breathingTimer =
        document.getElementById("breathing-timer");

    const breathingStartButton =
        document.getElementById("breathing-start-button");

    const breathingResetButton =
        document.getElementById("breathing-reset-button");

    const musicList =
        document.getElementById("music-list");

    const sessionsStat =
        document.getElementById("sessions-stat");

    const favoritesStat =
        document.getElementById("favorites-stat");

    const toast =
        document.getElementById("toast");

    const changeNameButton =
        document.getElementById("change-name-button");

    const homeTitle =
        document.getElementById("home-title");

    const nameModal =
        document.getElementById("name-modal");

    const userNameInput =
        document.getElementById("user-name-input");

    const saveNameButton =
        document.getElementById("save-name-button");

    const cancelNameButton =
        document.getElementById("cancel-name-button");

    // =========================
    // Mensagens motivacionais
    // =========================

    const messages = [
        "Respire fundo. Pequenas pausas também são cuidado.",
        "Seu bem-estar importa e merece espaço na sua rotina.",
        "Cuidar da mente também é uma forma de saúde.",
        "Permita-se desacelerar. O mundo pode esperar alguns minutos.",
        "Você não precisa fazer tudo ao mesmo tempo."
    ];

    function showRandomMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        motivationalMessage.textContent = messages[randomIndex];
    }

    // =========================
    // Toast de confirmação
    // Exibe uma mensagem temporária
    // para informar ações concluídas.
    // =========================

    function showToast(message) {
        if (!toast) return;

        toast.textContent = message;

        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }

    // =========================
    // Personalização do nome
    // Permite salvar o nome do usuário
    // no LocalStorage para uma saudação.
    // =========================

    function updateWelcomeMessage() {
        const savedName =
            localStorage.getItem("easeup-user-name");

        if (savedName) {
            homeTitle.textContent =
                `${savedName}, este momento é seu.`;
        }
    }

    // Exibe o modal e posiciona o foco
    // diretamente no campo de entrada.
    function openNameModal() {
        nameModal.classList.remove("section-hidden");
        userNameInput.focus();
    }

    // Fecha o modal e limpa o campo
    // utilizado durante a edição.
    function closeNameModal() {
        nameModal.classList.add("section-hidden");
        userNameInput.value = "";
    }

    // Salva o nome informado,
    // atualiza a saudação principal
    // e persiste a informação no navegador.
    function saveUserName() {
        const formattedName =
            userNameInput.value.trim();

        if (!formattedName) return;

        localStorage.setItem(
            "easeup-user-name",
            formattedName
        );

        updateWelcomeMessage();
        closeNameModal();

        showToast(
            "✓ Nome personalizado com sucesso!"
        );
    }

    // =========================
    // Tema claro e escuro
    // A preferência é salva no LocalStorage
    // =========================

    function applySavedTheme() {
        const savedTheme =
            localStorage.getItem(
                "easeup-theme"
            );

        if (savedTheme === "dark") {
            root.setAttribute(
                "data-theme",
                "dark"
            );

            themeButton.setAttribute(
                "aria-pressed",
                "true"
            );
        }
    }

    function toggleTheme() {
        const isDark =
            root.getAttribute("data-theme") === "dark";

        if (isDark) {
            root.removeAttribute("data-theme");

            localStorage.setItem(
                "easeup-theme",
                "light"
            );

            themeButton.setAttribute(
                "aria-pressed",
                "false"
            );

            return;
        }

        root.setAttribute(
            "data-theme",
            "dark"
        );

        localStorage.setItem(
            "easeup-theme",
            "dark"
        );

        themeButton.setAttribute(
            "aria-pressed",
            "true"
        );
    }

    // =========================
    // Navegação entre seções
    // =========================

    function navigateToSection(sectionName) {
        sections.forEach((section) => {
            const sectionElement = document.getElementById(`section-${section}`);

            sectionElement.classList.toggle(
                "section-hidden",
                section !== sectionName
            );
        });

        navigationLinks.forEach((link) => {
            link.classList.toggle("active", link.dataset.nav === sectionName);
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function setupNavigation() {
        navigationLinks.forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();

                const sectionName = link.dataset.nav;

                navigateToSection(sectionName);
                window.location.hash = sectionName;
            });
        });
    }

    function loadInitialSectionFromHash() {
        const hash = window.location.hash.replace("#", "");

        if (sections.includes(hash)) {
            navigateToSection(hash);
        }
    }

    // =========================
    // Meditações guiadas
    // =========================

    const meditations = [
        {
            icon: "🧘",
            title: "Relaxamento Profundo",
            category: "Relaxamento",
            description:
                "Uma prática para desacelerar pensamentos e aliviar tensões do dia.",
            duration: "6 minutos",
            audio: "assets/audio/meditation/deep-relaxation.mp3",
            instruction:
                "Relaxe os ombros, feche os olhos e observe sua respiração por alguns minutos."
        },

        {
            icon: "🧠",
            title: "Atenção Plena",
            category: "Mindfulness",
            description:
                "Desenvolva presença e foco através da observação consciente.",
            duration: "21 minutos",
            audio: "assets/audio/meditation/mindfulness-meditation.mp3",
            instruction:
                "Sente-se confortavelmente, observe as sensações do corpo e os sons ao seu redor sem julgamento."
        },

        {
            icon: "🙏",
            title: "Gratidão",
            category: "Gratidão",
            description:
                "Fortaleça sentimentos positivos e reconhecimento das pequenas conquistas.",
            duration: "6 minutos",
            audio: "assets/audio/meditation/gratitude-meditation.mp3",
            instruction:
                "Pense em algo ou alguém pelo qual você é grato e permita-se sentir essa gratidão profundamente."
        },

        {
            icon: "🌙",
            title: "Sono Tranquilo",
            category: "Sono",
            description:
                "Prática relaxante para preparar corpo e mente para dormir melhor.",
            duration: "30 minutos",
            audio: "assets/audio/meditation/soothing-sleep.mp3",
            instruction:
                "Sente-se confortavelmente e permita que seu corpo se prepare para o sono."
        },

        {
            icon: "💜",
            title: "Autocompaixão",
            category: "Autocompaixão",
            description:
                "Exercício voltado ao acolhimento emocional e autocuidado.",
            duration: "7 minutos",
            audio: "assets/audio/meditation/selflove-meditation.mp3",
            instruction:
                "Trate-se com gentileza e compaixão, como você faria com um amigo próximo."
        }
    ];

    const stats = {
        sessions:
            Number(
                localStorage.getItem(
                    "easeup-sessions"
                )
            ) || 0
    };

    function renderMeditations() {
        if (!meditationList) return;

        meditationList.innerHTML = "";

        meditations.forEach((meditation) => {
            const card =
                document.createElement("article");

            card.className = "meditation-item";

            card.innerHTML = `
            <h3 class="meditation-title">
                ${meditation.icon}
                ${meditation.title}
            </h3>

            <p class="meditation-description">
                ${meditation.description}
            </p>

            <p class="meditation-instruction">
                ${meditation.instruction}
            </p>

            <p class="meditation-duration">
                Duração estimada:
                ${meditation.duration}
            </p>

 
            <audio controls loop>
                <source
                    src="${meditation.audio}"
                    type="audio/mpeg"
                >
                Seu navegador não suporta áudio.
            </audio>

            <button
                class="btn-primary complete-session-button"
            >
                Concluir sessão
            </button>
        `;

            const button =
                card.querySelector(
                    ".complete-session-button"
                );

            button.addEventListener(
                "click",
                () => {
                    stats.sessions++;

                    localStorage.setItem(
                        "easeup-sessions",
                        stats.sessions
                    );

                    updateStatistics();

                    showToast(
                        "✓ Sessão registrada com sucesso!"
                    );
                }
            );

            meditationList.appendChild(card);
        });
    }

    // =========================
    // Exercícios de respiração guiada
    // =========================

    const breathingTechniques = [
        {
            icon: "🌬️",
            title: "Respiração 4-7-8",
            description:
                "Técnica indicada para relaxamento. Inspire por 4 segundos, segure por 7 e expire por 8.",
            phases: [
                { label: "Inspire", duration: 4, className: "inhale" },
                { label: "Segure", duration: 7, className: "hold" },
                { label: "Expire", duration: 8, className: "exhale" }
            ]
        },
        {
            icon: "📦",
            title: "Respiração Quadrada",
            description:
                "Também conhecida como Box Breathing. Ajuda no foco e na regulação emocional.",
            phases: [
                { label: "Inspire", duration: 4, className: "inhale" },
                { label: "Segure", duration: 4, className: "hold" },
                { label: "Expire", duration: 4, className: "exhale" },
                { label: "Segure", duration: 4, className: "hold" }
            ]
        },
        {
            icon: "🫁",
            title: "Respiração Diafragmática",
            description:
                "Estimula a respiração profunda usando o abdômen, auxiliando na redução da ansiedade.",
            phases: [
                { label: "Inspire", duration: 4, className: "inhale" },
                { label: "Segure", duration: 2, className: "hold" },
                { label: "Expire", duration: 6, className: "exhale" }
            ]
        },
        {
            icon: "😌",
            title: "Respiração Calmante 5-5",
            description:
                "Prática simples e equilibrada: inspire por 5 segundos e expire por 5 segundos.",
            phases: [
                { label: "Inspire", duration: 5, className: "inhale" },
                { label: "Expire", duration: 5, className: "exhale" }
            ]
        },
        {
            icon: "⚡",
            title: "Respiração Energizante",
            description:
                "Técnica curta para recuperar presença e disposição durante o dia.",
            phases: [
                { label: "Inspire", duration: 3, className: "inhale" },
                { label: "Segure", duration: 1, className: "hold" },
                { label: "Expire", duration: 3, className: "exhale" }
            ]
        }
    ];

    let selectedBreathingIndex = 0;
    let breathingPhaseIndex = 0;
    let breathingElapsedSeconds = 0;
    let breathingTimeout = null;
    let breathingTimerInterval = null;

    function renderBreathingTechniques() {
        if (!breathingList) return;

        breathingList.innerHTML = "";

        breathingTechniques.forEach((technique, index) => {
            const button = document.createElement("button");

            button.className = "breathing-item";
            button.type = "button";

            button.innerHTML = `
                <h3 class="breathing-item-title">
                    ${technique.icon}
                    ${technique.title}
                </h3>

                <p class="breathing-item-description">
                    ${technique.description}
                </p>
            `;

            button.addEventListener("click", () => {
                selectedBreathingIndex = index;
                resetBreathing();
                updateSelectedBreathingTechnique();
                updateBreathingCardsState();
                breathingPlayer.classList.remove("section-hidden");
            });

            breathingList.appendChild(button);
        });

        updateBreathingCardsState();
    }

    function updateSelectedBreathingTechnique() {
        const selectedTechnique =
            breathingTechniques[selectedBreathingIndex];

        breathingTechniqueTitle.textContent =
            selectedTechnique.title;

        breathingTechniqueDescription.textContent =
            selectedTechnique.description;
    }

    function updateBreathingCardsState() {
        const breathingCards =
            document.querySelectorAll(".breathing-item");

        breathingCards.forEach((card, index) => {
            card.classList.toggle(
                "active",
                index === selectedBreathingIndex
            );
        });
    }

    function formatBreathingTime(seconds) {
        const minutes =
            Math.floor(seconds / 60);

        const remainingSeconds =
            seconds % 60;

        return `${String(minutes).padStart(2, "0")}:${String(
            remainingSeconds
        ).padStart(2, "0")}`;
    }

    function startBreathing() {
        resetBreathing();

        breathingTimerInterval = setInterval(() => {
            breathingElapsedSeconds++;
            breathingTimer.textContent =
                formatBreathingTime(breathingElapsedSeconds);
        }, 1000);

        runBreathingPhase();
    }

    function runBreathingPhase() {
        const selectedTechnique =
            breathingTechniques[selectedBreathingIndex];

        const currentPhase =
            selectedTechnique.phases[
            breathingPhaseIndex %
            selectedTechnique.phases.length
            ];

        breathingCircle.className = "breathing-circle";
        breathingCircle.classList.add(currentPhase.className);

        breathingPhase.textContent =
            currentPhase.label;

        breathingPhaseIndex++;

        breathingTimeout = setTimeout(
            runBreathingPhase,
            currentPhase.duration * 1000
        );
    }

    function resetBreathing() {
        clearTimeout(breathingTimeout);
        clearInterval(breathingTimerInterval);

        breathingTimeout = null;
        breathingTimerInterval = null;
        breathingPhaseIndex = 0;
        breathingElapsedSeconds = 0;

        breathingTimer.textContent = "00:00";
        breathingPhase.textContent = "Pronto";
        breathingCircle.className = "breathing-circle";
    }

    breathingStartButton.addEventListener(
        "click",
        startBreathing
    );

    breathingResetButton.addEventListener(
        "click",
        resetBreathing
    );

    // =========================
    // Biblioteca musical
    // =========================

    const musicTracks = [
        {
            id: "rain",
            cover: "🌧️",
            title: "Chuva Suave",
            description:
                "Som contínuo de chuva para relaxamento e foco.",
            duration: "09 min",
            audio:
                "assets/audio/music/meditative-rain.mp3"
        },

        {
            id: "water",
            cover: "💦",
            title: "Sons da Água",
            description:
                "Áudio relaxante inspirado no fluxo natural da água.",
            duration: "16 min",
            audio:
                "assets/audio/music/water-sounds.mp3"
        },

        {
            id: "ambient",
            cover: "✨",
            title: "Música Ambiente",
            description:
                "Trilha instrumental suave para momentos de calma, relaxamento e autocuidado.",
            duration: "03 min",
            audio:
                "assets/audio/music/relaxing-ambient.mp3"
        },

        {
            id: "tibetan",
            cover: "🔔",
            title: "Sons Tibetanos",
            description:
                "Tigelas tibetanas e frequências suaves para relaxamento e meditação.",
            duration: "04 min",
            audio:
                "assets/audio/music/tibetan-bells.mp3"
        },

        {
            id: "piano",
            cover: "🎹",
            title: "Piano Relaxante",
            description:
                "Música instrumental suave.",
            duration: "02 min",
            audio:
                "assets/audio/music/calmness-piano.mp3"
        }
    ];

    const favoriteTracks =
        JSON.parse(
            localStorage.getItem(
                "easeup-favorites"
            )
        ) || [];

    function renderMusicLibrary() {
        if (!musicList) return;

        musicList.innerHTML = "";

        musicTracks.forEach((track) => {
            const card =
                document.createElement("article");

            const isFavorite =
                favoriteTracks.includes(track.id);

            card.className = "music-item";

            card.innerHTML = `
            <h3 class="music-title">
                ${track.cover}
                ${track.title}
            </h3>

            <p class="music-description">
                ${track.description}
            </p>

            <p class="music-duration">
                Duração: ${track.duration}
            </p>      

            <audio controls loop>
                <source
                    src="${track.audio}"
                    type="audio/mpeg"
                >
            </audio>

            <button
                class="btn-primary favorite-button
                ${isFavorite ? "active" : ""}"
                data-track-id="${track.id}"
            >
                ${isFavorite ? "★ Favoritado" : "☆ Favoritar"}
            </button>
        `;

            musicList.appendChild(card);
        });

        setupFavoriteButtons();
    }

    // =========================
    // Sistema de favoritos
    // Permite salvar e remover
    // conteúdos da biblioteca musical.
    // =========================

    function setupFavoriteButtons() {
        const buttons =
            document.querySelectorAll(
                ".favorite-button"
            );

        buttons.forEach((button) => {
            button.addEventListener(
                "click",
                () => {
                    const trackId =
                        button.dataset.trackId;

                    const index =
                        favoriteTracks.indexOf(trackId);

                    if (index >= 0) {
                        const updatedFavorites =
                            favoriteTracks.filter(
                                (favorite) => favorite !== trackId
                            );

                        favoriteTracks.length = 0;
                        favoriteTracks.push(...updatedFavorites);
                    } else {
                        favoriteTracks.push(trackId);
                    }

                    localStorage.setItem(
                        "easeup-favorites",
                        JSON.stringify(
                            favoriteTracks
                        )
                    );
                    updateStatistics();

                    renderMusicLibrary();
                }
            );
        });
    }

    // =========================
    // Estatísticas do usuário
    // =========================

    // Atualiza os indicadores de progresso
    // exibidos na página inicial com base
    // nos dados armazenados localmente.

    function updateStatistics() {
        if (!sessionsStat || !favoritesStat) {
            return;
        }

        const sessions =
            Number(
                localStorage.getItem(
                    "easeup-sessions"
                )
            ) || 0;

        const favorites =
            JSON.parse(
                localStorage.getItem(
                    "easeup-favorites"
                )
            ) || [];

        sessionsStat.textContent =
            sessions;

        favoritesStat.textContent =
            favorites.length;
    }

    // =========================
    // Inicialização da aplicação
    // Carrega preferências salvas,
    // renderiza conteúdos dinâmicos
    // e registra eventos da interface.
    // =========================

    updateWelcomeMessage();
    showRandomMessage();
    applySavedTheme();
    setupNavigation();
    loadInitialSectionFromHash();
    renderMeditations();
    renderBreathingTechniques();
    updateSelectedBreathingTechnique();
    renderMusicLibrary();
    updateStatistics();

    themeButton.addEventListener("click", toggleTheme);

    changeNameButton.addEventListener(
        "click",
        openNameModal
    );

    saveNameButton.addEventListener(
        "click",
        saveUserName
    );

    cancelNameButton.addEventListener(
        "click",
        closeNameModal
    );

    userNameInput.addEventListener(
        "keydown",
        (event) => {
            if (event.key === "Enter") {
                saveUserName();
            }

            if (event.key === "Escape") {
                closeNameModal();
            }
        }
    );

    // Converte os ícones declarados no HTML 
    // em SVGs da biblioteca Lucide.
    lucide.createIcons();
})();