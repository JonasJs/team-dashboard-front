# Team Dashboard Front

Uma aplicação front-end para visualização de uma tabela de colaboradores, com funcionalidades de busca, formatação e layout responsivo.

## 📋 Índice

- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Arquitetura](#-arquitetura)
- [Decisões Técnicas](#-decisões-técnicas)
- [Sistema de Filtros](#-sistema-de-filtros)
- [Estratégia do Componente Table](#-estratégia-do-componente-table)

## 📦 Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/JonasJs/team-dashboard-front.git
cd team-dashboard-front

# 2. Instale as dependências
yarn

# 3. Configure os git hooks
yarn prepare

# 4. Inicie o servidor de desenvolvimento da API
npx json-server db.json --watch --port 3000

# 5. Inicie a aplicação
yarn dev
```

## ✨ Funcionalidades

### Funcionalidades da Aplicação

- **Visualização de colaboradores** com informações completas:
  - Imagem de perfil
  - Nome completo
  - Cargo
  - Data de admissão (formatada)
  - Telefone (formatado)
- **Sistema de filtros** por nome, cargo e telefone
- **Layout responsivo** (mobile e desktop)
- **Ordenação de colunas** interativa
- **Alinhamento flexível** de conteúdo
- **Personalização de larguras** de colunas da tabela

### Funcionalidades de Qualidade de Código

- **ESLint**: Análise estática com regras TypeScript e React
- **Prettier**: Formatação automática de código
- **Husky**: Git hooks para automação
- **lint-staged**: Linters apenas em arquivos modificados
- **Commitlint**: Validação de mensagens seguindo Conventional Commits
- **TypeScript**: Verificação de tipos em tempo de desenvolvimento
- **Branch lint**: Verificação de nomes de branch

## 🚀 Tecnologias

### Core

- **React.js** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server

### Estilização

- **CSS Modules** - Isolamento de estilos
- **class-variance-authority** - Variantes de componentes
- **typed-css-modules** - Tipagem para CSS Modules

### Qualidade de Código

- **ESLint** - Linting
- **Prettier** - Formatação
- **Husky** - Git hooks
- **lint-staged** - Staged files linting
- **Commitlint** - Commit message validation

### Utilitários

- **json-server** - Mock API
- **Ky** - Cliente HTTP
- **vite-plugin-dts** - Geração de tipos TypeScript
- **Yarn** - Gerenciador de pacotes

### Integração

- **Jira** - Mapeamento de tarefas
- **GitHub** - Controle de versão

## 🏗️ Arquitetura

### Separação de Responsabilidades

- **Tipagens**: Interfaces e types centralizados
- **Regras de negócio**: Lógica isolada da apresentação
- **Estilizações**: CSS Modules com tokens padronizados
- **Variantes**: Configurações de componentes com CVA
- **Domínio**: Separação clara entre regras de negócio e API
- **Hooks customizados**: Lógica de negócio das páginas isolada em hooks

### Arquitetura por Domínio

A aplicação segue uma arquitetura orientada a domínio (Domain-Driven Design):

#### Estrutura do Domínio Employee

```typescript
domain/Employee/
├── employee.types.ts      # Interfaces e tipos específicos
├── employee.dto.ts        # Data Transfer Objects e formatação
├── employee.services.ts   # Lógica de negócio e validações
└── employee.resources.ts  # Endpoints e comunicação com API
```

#### Estrutura das Páginas

```typescript
pages/Home/
├── components/           # Componentes específicos da página
├── home.constants.ts     # Constantes e configurações
├── Home.module.css       # Estilos específicos da página
├── Home.page.tsx         # Componente de apresentação
├── home.types.ts         # Tipos específicos da página
└── useHomePage.ts        # Hook customizado com toda lógica de negócio
```

#### Responsabilidades por Camada

- **Types**: Definições de interfaces, enums e tipos
- **DTO**: Transformação e formatação de dados
- **Services**: Regras de negócio, validações e processamento
- **Resources**: Comunicação com API e mapeamento de endpoints
- **Hooks**: Lógica de estado e efeitos colaterais das páginas
- **Components**: Apenas apresentação e renderização

## 🎯 Decisões Técnicas

### Filosofia de Desenvolvimento

- **Uso mínimo de bibliotecas externas**: Priorização do conhecimento base para maior controle
- **Design System básico**: Implementação de tokens e documentação de componentes
- **Tipagem forte**: TypeScript em componentes e estilos para consistência
- **Arquitetura por domínio**: Separação clara entre regras de negócio e infraestrutura
- **Hooks customizados**: Isolamento da lógica de negócio das páginas em hooks reutilizáveis

### Motivações

- **Padronização**: Style guide desde o início para consistência visual
- **Reutilização**: Componentes documentados para facilitar implementações futuras
- **Escalabilidade**: Arquitetura preparada para crescimento do projeto
- **Manutenibilidade**: Código desacoplado e bem estruturado
- **Separação de responsabilidades**: Domínios isolados facilitam manutenção e testes
- **Testabilidade**: Hooks customizados facilitam testes unitários da lógica de negócio

## 🔍 Sistema de Filtros

### Implementação

O sistema de filtros permite pesquisa por:

- **Nome** do colaborador
- **Cargo** exercido
- **Telefone** de contato

### Estratégia de Filtragem

- **Ideal**: Filtros processados no backend para escalabilidade
- **Atual**: Lógica aplicada com json-server masfoi criada toda logica e simulção do back end no arquivo `api/employees.js`
- **Motivo**: Garantir funcionamento em produção (Vercel)
- **Futuro**: Migração para filtros server-side com paginação
- **Obeservação**: o json-server faz busca full-text então localmente é utilizada essa abordagem em produação (Vercel) como a logica foi simulada funciona perfeitamente (api/employees.js)

### Camadas de Abstração

- **Apresentação**: Componentes React recebem dados formatados
- **Lógica de Página**: Hooks customizados (ex: `useHomePage`) gerenciam estado e efeitos
- **Domínio**: Services processam regras de negócio e filtros
- **Infraestrutura**: Resources fazem comunicação com API externa

### Padrão de Hooks Customizados

Cada página possui seu próprio hook customizado que:

- **Centraliza** toda a lógica de negócio da página
- **Isola** o estado e efeitos colaterais
- **Facilita** testes unitários
- **Reutiliza** services do domínio
- **Mantém** componentes focados apenas na apresentação

## 🗂️ Estratégia do Componente Table

### Arquitetura Modular

```typescript
Table/
├── Table.tsx           # Componente principal
├── Header.tsx          # Cabeçalho da tabela
├── Head.tsx            # Célula de cabeçalho
├── Body.tsx            # Corpo da tabela
├── Row.tsx             # Linha da tabela
└── Cell.tsx            # Célula de dados
```

### Características Principais

#### 🔧 Estrutura Modular

- **Subcomponentes independentes** com responsabilidade única
- **Facilita manutenção** e criação de testes unitários
- **Reutilização** de componentes em diferentes contextos

#### 🛡️ Tipagem Forte

- **Interfaces TypeScript** para todos os componentes
- **Tipos reutilizáveis** (TextAlign, SortDirection)
- **Type-safety** garantida em tempo de desenvolvimento

#### 🎨 Estilização

- **CSS Modules** para isolamento de estilos
- **Variantes** com class-variance-authority
- **Sistema flexível** de alinhamento (left, center, right)

#### ♿ Acessibilidade

- **Roles ARIA** implementados
- **Navegação por teclado** suportada
- **Semântica HTML** apropriada

#### 📱 Responsividade

- **Adaptação** para diferentes tamanhos de tela
- **Controle de visibilidade** de colunas no mobile
- **Larguras flexíveis** e configuráveis
