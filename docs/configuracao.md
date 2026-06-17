# Controle de Configuração - EaseUp

## Objetivo

Garantir rastreabilidade, organização e controle das alterações realizadas durante o desenvolvimento do projeto EaseUp.

---

## Ferramentas Utilizadas

* Git
* GitHub
* Visual Studio Code

---

## Estratégia de Versionamento

O projeto utiliza Git para controle de versão e GitHub para armazenamento remoto.

Cada funcionalidade principal foi desenvolvida em uma branch específica, permitindo isolamento das alterações e validação antes da integração à branch principal.

### Branch Principal

```plaintext
main
```

Responsável por armazenar versões estáveis do projeto.

### Branches de Desenvolvimento

```plaintext
feature/meditations
feature/breathing
feature/music
feature/documentation
```

Cada branch representa uma funcionalidade específica desenvolvida de forma independente.

---

## Histórico de Commits

### Estrutura Inicial

```plaintext
feat: implementar estrutura base e pagina inicial
```

### Navegação

```plaintext
feat: adicionar navegacao entre secoes
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

---

## Processo de Integração

1. Criação de branch de funcionalidade.
2. Implementação e testes locais.
3. Commit das alterações.
4. Envio da branch para o GitHub.
5. Merge na branch principal.
6. Atualização da documentação.

---

## Estrutura do Projeto

```plaintext
easeup/
│
├── assets/
│   └── audio/
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
