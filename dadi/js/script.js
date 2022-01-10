
// # Gioco dei dadi
/*
 Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare in console i tiri di dado e il risultato.
*/

/*
1- generare un numero random per l' utente e il cpu
2- comparare i due numeri e stabilire quale sia il più alto
3- Stampare in console i tiri di dado e il risultato
*/

//1
const cpuNumber = Math.floor((Math.random()) * 6) + 1;
console.log('cpuNumber', cpuNumber);

const userNumber = Math.floor((Math.random()) * 6) + 1;
console.log('userNumber', userNumber);

//2

let result = "Parità!";

if (cpuNumber > userNumber) {
    result = "Il computer ha vinto!";
} else if (cpuNumber < userNumber) {
    result = "L'utente ha vinto!";
}

//3
const message = `${result} Il tuo lancio: ${userNumber}. Il lancio del computer ${cpuNumber}.`

console.log(message);