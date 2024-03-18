let number = [];

for(let i = 0; i < 10; i++) {
  number.push(+prompt("Inserisci un numero"));
}

function sommaNumeri(array = Array) {
  let somma = 0;
  for (const value of array) {
    somma += value;
  }
  return somma;
}

function sommaAritmetica(number = Number, arrayLenght = Number) {
  return number / arrayLenght;
}


console.log(sommaAritmetica(sommaNumeri(number), number.length+1))