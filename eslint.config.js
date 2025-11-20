import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import cypressPlugin from 'eslint-plugin-cypress';  // Adicionando o plugin do Cypress
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),  // Ignora a pasta dist
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,  // Configuração recomendada do ESLint
      reactHooks.configs['recommended-latest'],  // Configuração recomendada para React Hooks
      reactRefresh.configs.vite,  // Configuração para React Refresh
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,  // As variáveis globais do navegador
        cy: 'readonly',  // Adicionando as variáveis globais do Cypress
        Cypress: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: [
      'react-hooks',  // Plugin para React Hooks
      'react-refresh',  // Plugin para React Refresh
      'cypress',  // Plugin do Cypress
    ],
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'cypress/no-unnecessary-waiting': 'warn',  // Exemplo de regra do Cypress (pode ser ajustada conforme necessidade)
      'cypress/assertion-before-await': 'error',  // Garantir que asserções sejam feitas antes do `await`
    },
  },
  {
    files: ['**/*.spec.js', '**/*.spec.jsx', '**/*.e2e.js', '**/*.e2e.jsx'],  // Arquivos de teste do Cypress
    extends: [
      'plugin:cypress/recommended',  // Regras recomendadas para Cypress
    ],
    rules: {
      'no-console': 'off',  // Desativa o aviso sobre console nos testes
      'cypress/no-assigning-return-values': 'error',  // Impede que valores retornados sejam atribuídos
    },
  },
]);
