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
    // Inicialização
    // =========================

    showRandomMessage();
    applySavedTheme();
    setupNavigation();
    loadInitialSectionFromHash();

    themeButton.addEventListener("click", toggleTheme);

    // Converte os ícones declarados no HTML em SVGs.
    lucide.createIcons();
})();