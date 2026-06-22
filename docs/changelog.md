# Changelog - EaseUp

Todas as mudanças relevantes do projeto serão registradas neste documento.

## [1.0.0] - Estrutura Inicial

### Adicionado

* Estrutura base do projeto em HTML, CSS e JavaScript.
* Página inicial com identidade visual do EaseUp.
* Mensagens motivacionais aleatórias.
* Alternância entre tema claro e escuro.
* Navegação principal entre seções.

---

## [1.1.0] - Meditações Guiadas

### Adicionado

* Seção de Meditações Guiadas.
* Cinco categorias de meditação:

  * Relaxamento Profundo
  * Atenção Plena
  * Gratidão
  * Sono Tranquilo
  * Autocompaixão
* Player de áudio preparado para cada meditação.
* Registro de sessões concluídas.
* Persistência de dados utilizando LocalStorage.

---

## [1.2.0] - Exercícios de Respiração

### Adicionado

* Seção de Exercícios de Respiração.
* Cinco técnicas de respiração guiada:

  * Respiração 4-7-8
  * Respiração Quadrada
  * Respiração Diafragmática
  * Respiração Calmante 5-5
  * Respiração Energizante
* Temporizador visual.
* Animação do ciclo respiratório.
* Controle de início e reinicialização.

---

## [1.3.0] - Biblioteca Musical

### Adicionado

* Biblioteca musical integrada.
* Cinco categorias de áudio:

  * Chuva Suave
  * Ondas do Oceano
  * Floresta Natural
  * Ruído Branco
  * Piano Relaxante
* Sistema de favoritos.
* Persistência de favoritos utilizando LocalStorage.
* Estrutura preparada para integração de arquivos de áudio.

## [1.4.0] - Estatísticas e Acessibilidade

### Adicionado

* Painel de estatísticas do usuário.
* Contador de sessões concluídas.
* Contador de conteúdos favoritados.
* Navegação por teclado aprimorada.
* Link de acessibilidade "Pular para o conteúdo principal".
* Destaque visual para elementos em foco.
* Compatibilidade com preferência de redução de movimento.
* Melhorias de responsividade para dispositivos móveis.
* Persistência das estatísticas utilizando LocalStorage.

---

## [1.5.0] - Conteúdo de Áudio e Orientações de Prática

### Adicionado

* Integração de arquivos de áudio reais para meditações.
* Integração de arquivos de áudio reais para biblioteca musical.
* Reprodução contínua (loop) para conteúdos sonoros.
* Instruções de prática para cada meditação.
* Ícones visuais para meditações, técnicas de respiração e músicas.
* Atualização da biblioteca musical com conteúdos de relaxamento e bem-estar:

  * Sons da Água
  * Música Ambiente
  * Sons Tibetanos
  * Piano Relaxante
  * Chuva Suave

### Melhorado

* Experiência de uso das meditações.
* Organização dos conteúdos de áudio.
* Interface visual dos cards de conteúdo.
* Acessibilidade geral da plataforma.

### Alterado

* Atualização da seleção musical da biblioteca.
* Substituição de conteúdos sonoros por novas faixas de relaxamento e meditação.

---

## [1.6.0] - Refinamento Visual e Experiência do Usuário

### Adicionado

* Sistema de notificações visuais (toast) para confirmação de sessões concluídas.
* Feedback visual não intrusivo para ações do usuário.
* Compatibilidade das notificações com tecnologias assistivas através de `aria-live`.

### Alterado

* Refinamento visual da tela inicial.
* Ajuste da hierarquia visual dos títulos e conteúdos.
* Aprimoramento da experiência de navegação e leitura.
* Aplicação de transparência suave nos cartões da interface.
* Aumento do arredondamento dos cards para uma experiência mais acolhedora.
* Aprimoramento visual dos temas claro e escuro.

### Corrigido

* Correção do gerenciamento de favoritos utilizando LocalStorage.
* Atualização consistente das estatísticas após favoritar e desfavoritar conteúdos.

--- 

## [1.7.0] - Personalização e Identidade Visual

### Adicionado

* Personalização do nome do usuário através de modal dedicado.
* Persistência do nome utilizando LocalStorage.
* Saudação personalizada na tela inicial.
* Favicon personalizado utilizando a identidade visual do EaseUp.

### Melhorado

* Experiência de boas-vindas da plataforma.
* Identidade visual da aplicação.
* Consistência entre a marca exibida na interface e na aba do navegador.
* Refinamento dos textos da página inicial para uma comunicação mais acolhedora.

### Corrigido

* Fechamento automático do modal após confirmação do nome.
