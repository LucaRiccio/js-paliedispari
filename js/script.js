var parolaInserita = prompt("Inserisci una parola").toUpperCase();
var parolaInversa = ""; // Inizializzata var vuota.
checkPalindromo(parolaInserita); //invocata funzione con il nome a essa dato; A dispetto dell'argomento successivamente assegnato inserisco la var a me necessaria.

function checkPalindromo(parolaIns) { //ATTENZIONE. l'argomento inserito è solo un "segnaposto" che dovrà poi essere usato in tutta la funzione.

  for (var i = parolaIns.length-1; i >= 0; i--) { // Ciclo For "invertito", scorro la lunghezza della parola/stringa da destra a sinistra.
    parolaInversa += parolaIns[i]; //concatenazione della var vuota con ogni elemento dell'indice della var inserita dall'utente; Memorizzo quindi il valore di var parolaInversa prima vuota.
  }
  if (parolaIns == parolaInversa) { //Confronto la parola inserita con il suo inverso, se coincidono stampo palindromo.
    console.log("La parola inserita è palindroma");
  }
  else {
    console.log("La parola inserita non è palindroma"); // diversamente (le parole non coincidono) stampo Non palindrome.
  }

}
console.log(parolaInversa); //log per mostrare l'inverso della parola inserita.
