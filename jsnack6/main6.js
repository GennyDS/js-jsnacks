
let controllo=false;


while(controllo==false)
{

    let numRandom=Math.round(Math.random()*9+1);
        
    let numGiocatore = prompt("inserisci un numero");

    if ((numGiocatore==numRandom) || (numGiocatore>numRandom))
    {
        console.log("hai vinto")
        controllo=true;
        break;
       
    
   }
       
    else 
    {
       console.log("hai perso la CPU ha ottenuto " +numRandom + "," +"tu invece hai inserito:" +numGiocatore);
       
    }

}


