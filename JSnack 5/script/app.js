let array = [];

for (let i = 0; i < 6; i++) {
  let number = +prompt("Inserisci dei numeri");
  if ((number % 2) != 0) {
    array.push(number);
  }
}

console.log("ARRAY DEI DISPARI =>", array)