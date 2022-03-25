let arrey=[];
let num=0;

for(let i =0;i<6;i++)
{
    num = parseInt(prompt("inserisci un numero"));

    if(num % 2 ==1)
    arrey.push(num);
}
console.log(arrey)