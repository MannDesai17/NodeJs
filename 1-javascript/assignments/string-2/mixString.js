function mixString(a, b){
  let str1 ='';
    if(a.length > b.length)
    {
        for(i=0;i<b.length;i++)
        {
            str1 += a[i]+b[i];
        }
        return str1+a.slice(b.length,a.length);
    }
    else if(b.length > a.length)
    {
        for(i=0;i<a.length;i++)
        {
            str1 += a[i]+b[i];
        }
        return str1+b.slice(a.length,b.length);
    }
    else
    {
        for(i=0;i<a.length;i++)
        {
            str1 += a[i]+b[i];
        }
        return str1;
    }
}