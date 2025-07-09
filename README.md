# Team Dashboard Front

Uma aplicação front-end para visualização de uma tabela de colaboradores, com funcionalidades de busca, formatação e layout responsivo.

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
