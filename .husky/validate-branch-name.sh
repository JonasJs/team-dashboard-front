#!/bin/sh

branch_name=$(git rev-parse --abbrev-ref HEAD)

valid_pattern="^(feat|fix|docs|style|refactor|test|chore|hotfix|release)/[a-z0-9-]+$"

if [[ ! $branch_name =~ $valid_pattern ]]; then
  echo "❌ Nome de branch inválido: '$branch_name'"
  echo ""
  echo "📋 Padrões aceitos:"
  echo "  • feat/nome-da-feature"
  echo "  • fix/nome-do-bug"
  echo "  • docs/nome-da-doc"
  echo "  • style/nome-do-estilo"
  echo "  • refactor/nome-do-refactor"
  echo "  • test/nome-do-teste"
  echo "  • chore/nome-da-tarefa"
  echo "  • hotfix/nome-do-hotfix"
  echo "  • release/versao"
  echo ""
  echo "💡 Exemplo: feat/dashboard-layout"
  exit 1
fi

echo "✅ Nome da branch válido: $branch_name"