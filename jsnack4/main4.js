
let nome = prompt("inserisci il tuo nome");
let lista =["matteo","fabio","pietro","anna","genny","simona","alessia"];
let controllo=0;
let richiesta=0;

for(i=0; i<=lista.length;i++)
{
 if(nome == lista[i])
 {
    alert(" puoi entare");
    controllo++;
    break;   
 }

 
}

if(controllo==0)

{
    alert("non puoi accedere ");
    
   
console.log(lista)
}