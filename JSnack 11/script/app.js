let number = [10,20,100,300,232,202,145,954,923,104];

function sommaNumeri(array = Array) {
  let somma = 0;
  for (const value of array) {
    somma += value;
  }
  return somma;
}

console.log(sommaNumeri(number))