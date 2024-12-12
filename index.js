const chalk = require('chalk');

// Fehler 1: 'myUnusedVariable' wird zugewiesen, aber nie verwendet
let myUnusedVariable = 'This is an unused variable';

// Fehler 2: 'myUnusedVariable' sollte als 'const' deklariert werden
myUnusedVariable = 'Reassigned value';

// Fehler 3: Nutzung von '==' statt '==='
if (myUnusedVariable == 'Reassigned value') {
  console.log(chalk.green('It works'));
}
