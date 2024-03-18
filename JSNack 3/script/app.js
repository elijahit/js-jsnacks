let arrayNum = [];
let somma = 0;

for (let i = 0; i < 10; i++) {
  arrayNum.push(+prompt("Inserisci numero"))
}

for (const value of arrayNum) {
  somma += value;
}

console.log(somma);