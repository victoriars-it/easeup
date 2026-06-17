// =========================
// EaseUp - Commit 1
// Estrutura base da plataforma
// =========================

(function () {
  // =========================
  // Seletores principais
  // =========================

  const root = document.documentElement;
  const themeButton = document.getElementById("theme-toggle");
  const motivationalMessage = document.getElementById("motivational-message");

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
  // Inicialização
  // =========================

  showRandomMessage();
  applySavedTheme();

  themeButton.addEventListener("click", toggleTheme);

  // Converte os ícones declarados no HTML em SVGs.
  lucide.createIcons();
})();