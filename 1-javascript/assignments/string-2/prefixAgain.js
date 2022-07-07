function prefixAgain(str, n){
    let str1 = str.slice(0,n);
    let str2 = str.slice(n,str.length);
    if(str2.includes(str1))
    {
        return true;
    }
    else
    {
        return false;
    }
}
}