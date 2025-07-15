# Team Dashboard Front

Uma aplicação front-end para visualização de uma tabela de colaboradores, com funcionalidades de busca, formatação e layout responsivo.

## 🛠️ Decisões Técnicas

- **Uso mínimo de bibliotecas externas**: Optei por utilizar o menor número possível de bibliotecas externas para explorar ao máximo a base de conhecimento e garantir maior controle sobre o código.
- **Estruturação de um Design System básico:**
  - **Tokens de design**: Implementação de tokens para padronização de cores, tamanhos, fontes, espaçamentos, etc.
  - **Documentação dos componentes**: Criação de uma documentação inicial para os componentes, visando facilitar a reutilização e a consistência visual.
  - **Motivação**: Com a existência de um style guide, iniciei dessa forma para garantir que, desde o início, um padrão seja seguido, promovendo a reutilização de forma simples e ágil para futuras implementações.
- **Implementação de testes unitários**: Adotei testes unitários por serem menos custosos e por garantirem maior integridade nas entregas, facilitando a manutenção e evolução do código.
- **Tipagem dos componentes e estilos**: Utilização de tipagem para garantir consistência e segurança do código.
- **Separação estruturada das responsabilidades**: As tipagens, regras de negócio, estilizações e variantes dos componentes estão separados, visando melhorar a manutenção do projeto, desacoplar as responsabilidades e facilitar a escalabilidade.
- **Ky**: Utilização do Ky para requisições HTTP, para garantir uma comunicação assíncrona e eficiente com o backend.

- Filtro: A rege de negocio: ser possível realizar pesquisa na tabela por meio de um input. O input de pesquisa deve permitir filtrar dados por cargo, nome e telefone.
  Todos filtro o ideal é que seja sempre feit do lado do back end, ainda mas pensando na escalabilidad do projeto onde teremos muitos mais itens e precisaremos paginar, dito isso, como estamos usando o json-server ele faze um busca full-text em todas as propriedades para dar visibilidade a logica repliquei o funcionamentod o jsonserver mas aplicando no arquivo #api/employees.ts que é o que utilizo para subir os dados para vercel/"prod", para seja possivel testar o serviço online.

### Estratégia do Componente Table

O componente Table foi desenvolvido seguindo uma arquitetura modular e extensível:

- **Estrutura Modular**:
  - Divisão em subcomponentes independentes (Table, Header, Head, Body, Row, Cell)
  - Cada componente com responsabilidade única e bem definida
  - Facilita manutenção e testes unitários

- **Tipagem Forte**:
  - Interfaces TypeScript para todos os componentes
  - Tipos reutilizáveis (TextAlign, SortDirection)
  - Garantia de type-safety em tempo de desenvolvimento

- **Estilização**:
  - CSS Modules para isolamento de estilos
  - Variantes de estilo com class-variance-authority
  - Sistema flexível de alinhamento (left, center, right)

- **Acessibilidade**:
  - Implementação de roles ARIA
  - Suporte a navegação por teclado
  - Semântica HTML apropriada

- **Responsividade**:
  - Adaptação para diferentes tamanhos de tela
  - Controle de visibilidade de colunas no mobile
  - Larguras flexíveis e configuráveis

## 🚀 Tecnologias

- React.js
- TypeScript
- Vite
- ESLint
- Prettier
- Husky
- lint-staged
- Commitlint
- json-server
- Yarn
- Integração com Jira e GitHub para mapeamentos de tarefas
- CSS Modules
- vite-plugin-dts
- typed-css-modules
- class-variance-authority
- Ky

## 🔧 Funcionalidades

### Funcionalidades da Aplicação

- Exibe colaboradores com:
  - Imagem
  - Nome
  - Cargo
  - Data de admissão (formatada)
  - Telefone (formatado)
- Filtro por nome, cargo e telefone
- Layout responsivo (mobile e desktop)
- Ordenação de colunas
- Suporte a diferentes alinhamentos de conteúdo
- Personalização de larguras de coluna

### Funcionalidades de Qualidade de Código

- **ESLint**: Análise estática de código com regras TypeScript e React
- **Prettier**: Formatação automática de código
- **Husky**: Git hooks para automação de tarefas
- **lint-staged**: Execução de linters apenas em arquivos modificados
- **Commitlint**: Validação de mensagens de commit seguindo Conventional Commits
- **TypeScript**: Verificação de tipos em tempo de desenvolvimento
- **Branch lint**: Verificação de nomes de branch seguindo padrão Conventional Commits

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/JonasJs/team-dashboard-front.git
cd team-dashboard-front

# Instale as dependências
yarn

# Configure os git hooks
yarn prepare

# Rode o servidor fake
npx json-server db.json --watch --port 3001

# Inicie o projeto
yarn dev
```
