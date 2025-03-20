/* Crea una lista di email di invitati ad una festa. 
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo, 
utilizzando un ciclo for. 
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). 
Si può fare? Certo che si basta ragionare un po’ */

// preparazione della lista di email degli invitati

const email_list = ['saraesposito@gmail.com', 'giacomorossi@gmail.com', 'alessandromagno@gmail.com','antonioscognamillo@gmail.com']
console.log(email_list);

// chiediamo all'utente la sua mail

const user_email = prompt('Inserisci e-mail')

// verifica della mail dentro la lista

let verify_email = false;

for (let i = 0; i < email_list.length ; i++) {

    if (user_email == email_list [i]) {
        verify_email = true;
    }
}

if (verify_email) {
    console.log('La tua email è valida, sei ufficialmente invitato alla festa!!');
    ;
} else {
    console.log('La tua mail non è valida, non sei invitato alla festa.');
    ;
}


