

(function play () {
  let randomNumber = Math.floor(Math.random() * 11);
  let userNumber = +prompt("Inserici un numero");
  if(randomNumber === userNumber) {
    console.log("YOU WON");
  } else {
    console.log("YOU W.. LOSE! 🧔")
    console.log(randomNumber)
    play();
  }
})();
