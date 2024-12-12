module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended"
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "rules": {
      "no-unused-vars": "error", // Fehlermeldung für ungenutzte Variablen
      "prefer-const": "error",   // Fehlermeldung für nicht konstante Variablen
      "eqeqeq": "error"          // Fehlermeldung für unstrikte Vergleiche
    }
  };
  