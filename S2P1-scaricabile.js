//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* RISPOSTA 1 */

let userNumer1 = parseInt(prompt("Inserisci il primo numero"))
let userNumber2 = parseInt(prompt("Inserisci il secondo numero"))

if (userNumer1 > userNumber2) {
  console.log("Il primo numero fornito: " + userNumer1 + " è il più grande dei 2")
} else if (userNumber2 > userNumer1) {
  console.log("Il secondo numero fornito: " + userNumber2 + " è il più grande dei 2")
} else if (userNumer1 === userNumber2) {
  console.log("I due numero forniti sono uguali")
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* RISPOSTA 2 */

let userNumber = parseInt(prompt("Inserisci un numero..."))

if (userNumber < 5) {
  console.log("Tiny")
} else if (userNumber >= 5 && userNumber < 10) {
  console.log("Small")
} else if (userNumber >= 10 && userNumber < 15) {
  console.log("Medium")
} else if (userNumber >= 15 && userNumber < 20) {
  console.log("Large")
} else if (userNumber >= 20) {
  console.log("Huge")
} else {
  console.log("Valore non valido")
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* RISPOSTA 3 */

for (let i = 10; i >= 0; i--) {
  if (i === 3 || i === 8) {
    continue
  }
  console.log(i)
}

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* RISPOSTA 4*/

for (let i = 0; i <= 15; i++) {
  if ((i % 2) === 0) {
    console.log("Il valore di i é " + i + " quindi pari.")
  } else if ((i % 2) !== 0) {
    console.log("Il valore di i é " + i + " quindi dispari")
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* RISPOSTA EXTRA 1 */

let numberUno = parseInt(prompt("Inserisci il primo numero: "))
let numberDue = parseInt(prompt("Inserisci il secondo numero: "))

if (numberUno === 8 || numberDue === 8 || (numberDue + numberUno) === 8 || (numberUno - numberDue) === 8 || (numberDue - numberUno) === 8) {
  console.log("Il risultato è 8")
} else {
  console.log("Il risultato non è 8")
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* RISPOSTA EXTRA 2 */

let totalShoppingCart = parseInt(prompt("Inserire il totale del carrello"))

if (totalShoppingCart >= 50) {
  console.log("Hai speso più di 50 euro e hai diritto alla spedizione gratis, il totale é: " + totalShoppingCart)
} else if (totalShoppingCart < 50) {
  console.log("Purtroppo il tuo carrello non supera i 50 euro, per cui la spedizione non sarà gratuita, il nuovo totale è: " + (totalShoppingCart + 10))
} else {
  console.log("Valore inserito non valido")
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/