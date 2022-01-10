console.log('JS OK!')

// # Mail
/* 
1 -Crea un array di email;
2 -Chiedi all’utente la sua email.
3 -controlla che sia nella lista di chi può accedere
4 -stampa un messaggio appropriato in console sull’esito del controllo.
*/ 

//1
const authorizedUsers = ['pippo@gmail.com', 'pluto@yahoo.it','topolino@hotmail.com', 'paperino@outlook.com','amelia@vesuvio.net'];

console.table(authorizedUsers);

//2 

const userEmail = (prompt("Inserire un' email valida per l' accesso", 'pippo@gmail.com')).trim();

console.log('userEmail:',userEmail);

//3 ->confrontare l' email fornita dall' utente con l' email dell array

let message = "l' email inserita non è valida";

for (let i = 0; i < authorizedUsers.length; i++) {
    
    if (userEmail === authorizedUsers[i]) {
        message = "l' email inserita è valida"
    }    
}

//4

console.log(message);