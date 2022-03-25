let a = prompt("inserisci una parola")
let b = prompt ("inserisci un altra parola");
let cont1 = 0;
let cont2 = 0;

for(let i = 0; i<=a.length; i++)
{
  cont1++;
}
for(let i = 0; i<=b.length; i++)
{
  cont2++;
}

if(cont1>cont2) 
{
    console.log( a + " è maggiore di " + b)
}
else if(cont1<cont2)
  {
    console.log( b +" è maggiore di " + a)
  }
  else
  {
      console.log("le parole hanno la stessa lunghezza :  " +a +"---" +b)
  }
    
    
