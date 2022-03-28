function somma(arrey)
{
   let s=0;
    for(let i of arrey)
    {
        s+=i;
    }
    return s;
}


console.log(somma([5,10,5,5,10,10]))

/*  
 
function somma(arrey)                                      
   let s=0;
    for(let i=0;i<arrey.lenght;i++)
    {
        s= s+arrey[i];
    }
    return s;
}

console.log(somma([5,10,5,5,5,10]))
*/