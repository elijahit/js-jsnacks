let arrayInvites = [
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Oliver",
  "Ava",
  "William",
  "Sophia",
  "Elijah",
  "Isabella",
  "James",
  "Mia",
  "Benjamin",
  "Charlotte",
  "Lucas",
  "Amelia",
  "Henry",
  "Harper",
  "Alexander",
  "Evelyn"
];

let userName = prompt("Inserisci il tuo nome per sapere se puoi entrare");

if(arrayInvites.find((value) => value == userName)) {
  console.log(`Ciao ${userName}, ti diamo il benvenuto alla festa!`);
} else {
  console.log(`Il grande Gatsby non ti vuole alla sua festa, allontanati.`);
}