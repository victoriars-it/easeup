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
    // Inicialização
    // =========================

    showRandomMessage();
    applySavedTheme();
    setupNavigation();
    loadInitialSectionFromHash();
    renderMeditations();

    themeButton.addEventListener("click", toggleTheme);

    // Converte os ícones declarados no HTML em SVGs.
    lucide.createIcons();
})();