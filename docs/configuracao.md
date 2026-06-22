# Controle de Configuração - EaseUp

## Objetivo

Garantir rastreabilidade, organização e controle das alterações realizadas durante o desenvolvimento do projeto EaseUp.

---

## Ferramentas Utilizadas

* Git
* GitHub
* Visual Studio Code
* HTML5
* CSS3
* JavaScript (Vanilla)

---

## Estratégia de Versionamento

O projeto utiliza Git para controle de versão e GitHub para armazenamento remoto.

Cada funcionalidade foi desenvolvida em uma branch específica, permitindo isolamento das alterações, realização de testes locais e integração segura à branch principal.

### Branch Principal

```plaintext
main
```

Responsável por armazenar versões estáveis do projeto.

### Branches de Desenvolvimento

```plaintext
feature/statistics
feature/accessibility
feature/audio-content
feature/meditation-guidance
feature/visual-polish
feature/final-docs
```

Cada branch representa uma funcionalidade ou conjunto de melhorias desenvolvido de forma independente.

---

## Histórico de Commits

### Estrutura Inicial

```plaintext
feat: implementar estrutura base e pagina inicial
```

### Meditações Guiadas

```plaintext
feat: implementar meditacoes guiadas
```

### Exercícios de Respiração

```plaintext
feat: implementar exercicios de respiracao guiada
```

### Biblioteca Musical

```plaintext
feat: implementar biblioteca musical
```

### Estatísticas

```plaintext
feat: adicionar estatisticas de uso
```

### Acessibilidade

```plaintext
feat: implementar melhorias de acessibilidade
```

### Conteúdo de Áudio

```plaintext
feat: adicionar conteudos de audio para meditacoes e biblioteca musical
```

### Orientações de Prática

```plaintext
feat: adicionar orientacoes de pratica para meditacoes
```

### Refinamento Visual

```plaintext
feat: refinar interface e experiencia do usuario
```

### Documentação

```plaintext
docs: atualizar documentacao do projeto
```

---

## Processo de Integração

1. Criação de branch de funcionalidade.
2. Implementação e testes locais.
3. Commit das alterações.
4. Envio da branch para o GitHub.
5. Merge na branch principal.
6. Atualização da documentação.
7. Versionamento das novas funcionalidades.

---

## Estrutura do Projeto

```plaintext
easeup/
│
├── assets/
│   └── audio/
│       ├── meditation/
│       └── music/
│
├── docs/
│   ├── backlog.md
│   ├── changelog.md
│   └── configuracao.md
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

---

## Controle de Alterações

Todas as alterações do projeto são registradas por meio de commits versionados e documentadas através do Changelog.

A estratégia adotada permite rastrear funcionalidades implementadas, identificar modificações realizadas e manter histórico completo da evolução do EaseUp.
