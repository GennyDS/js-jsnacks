function mediaAritmetica (arrey)
{
    
    let s=0;
    for( let i=0;i< arrey.lenght;i++)
    {
        s+=arrey[i];
    }
     return s /= arrey.lenght;
      
}

console.log(mediaAritmetica([10,5,20]));
  