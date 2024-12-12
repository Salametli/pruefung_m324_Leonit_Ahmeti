import { defineConfig } from 'eslint-define-config';

export default defineConfig(
  {
    languageOptions:
      {
        globals:
          {
            window:
              'readonly',
            document:
              'readonly',
            console:
              'readonly',
          },
      },
    rules:
      {
        'no-unused-vars':
          'error', // Fehlermeldung für ungenutzte Variablen
        'prefer-const':
          'error', // Fehlermeldung für nicht konstante Variablen
        eqeqeq:
          'error', // Fehlermeldung für unstrikte Vergleiche
      },
  },
);
