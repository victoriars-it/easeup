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
    // Tema claro e escuro
    // A preferência é salva no LocalStorage
    // =========================

    function applySavedTheme() {
        const savedTheme = localStorage.getItem("easeup-theme");

        if (savedTheme === "dark") {
            root.setAttribute("data-theme", "dark");
        }
    }

    function toggleTheme() {
        const isDark = root.getAttribute("data-theme") === "dark";

        if (isDark) {
            root.removeAttribute("data-theme");
            localStorage.setItem("easeup-theme", "light");
            return;
        }

        root.setAttribute("data-theme", "dark");
        localStorage.setItem("easeup-theme", "dark");
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
            title: "Relaxamento Profundo",
            description:
                "Uma prática para desacelerar pensamentos e aliviar tensões do dia.",
            duration: "5 minutos",
            audio: "assets/audio/relaxamento.mp3"
        },

        {
            title: "Atenção Plena",
            description:
                "Desenvolva presença e foco através da observação consciente.",
            duration: "7 minutos",
            audio: "assets/audio/atencao-plena.mp3"
        },

        {
            title: "Gratidão",
            description:
                "Fortaleça sentimentos positivos e reconhecimento das pequenas conquistas.",
            duration: "6 minutos",
            audio: "assets/audio/gratidao.mp3"
        },

        {
            title: "Sono Tranquilo",
            description:
                "Prática relaxante para preparar corpo e mente para dormir melhor.",
            duration: "10 minutos",
            audio: "assets/audio/sono.mp3"
        },

        {
            title: "Autocompaixão",
            description:
                "Exercício voltado ao acolhimento emocional e autocuidado.",
            duration: "8 minutos",
            audio: "assets/audio/autocompaixao.mp3"
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
                ${meditation.title}
            </h3>

            <p class="meditation-description">
                ${meditation.description}
            </p>

            <p class="meditation-duration">
                Duração estimada:
                ${meditation.duration}
            </p>

            <audio controls>
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

                    alert(
                        "Sessão registrada com sucesso!"
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
            title: "Respiração Calmante 5-5",
            description:
                "Prática simples e equilibrada: inspire por 5 segundos e expire por 5 segundos.",
            phases: [
                { label: "Inspire", duration: 5, className: "inhale" },
                { label: "Expire", duration: 5, className: "exhale" }
            ]
        },
        {
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
    // Inicialização
    // =========================

    showRandomMessage();
    applySavedTheme();
    setupNavigation();
    loadInitialSectionFromHash();
    renderMeditations();
    renderBreathingTechniques();
    updateSelectedBreathingTechnique();

    themeButton.addEventListener("click", toggleTheme);

    // Converte os ícones declarados no HTML em SVGs.
    lucide.createIcons();
})();