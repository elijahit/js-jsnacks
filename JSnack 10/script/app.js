numberUser = +prompt("Inserici il numero da elevare al cubo");
// NON SONO SICURO DI AVER CAPITO LA CONSEGNA, NON HO CAPITO SE DOVEVO FAR DECIDERE QUANTI NUMERI DOVEVO INSERIRE NEL PROMPT O MENO! SCUSATE SE E' UN MISS UNDERSTANDING.

function cubeNumber(number) {
  return Math.pow(number, 3);
}

console.log(cubeNumber(numberUser));