const stampaElement = document.getElementById('stampa');

let userNumber = prompt("Inserisci un numero di quattro (4) cifre");

function calcNumberInLine(number) {
  let arrayNumber = number.split('');
  let somma = 0;
  for (const value of arrayNumber) {
    somma += +value;
  }
  return somma;
}

stampaElement.innerText = calcNumberInLine(userNumber);
console.log(calcNumberInLine(userNumber))