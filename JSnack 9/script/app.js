let array = [];

(function play() {
  let number = +prompt("Inserisci un numero");
  if(number == array[array.length-1]) {
    console.log("Hai inserito due numeri conseguitivi identici, il programma è terminato e il numero inserito non è stato salvato.")
    console.log(array);
  } else {
    array.push(number);
    console.log(array);
    play();
  }
})();