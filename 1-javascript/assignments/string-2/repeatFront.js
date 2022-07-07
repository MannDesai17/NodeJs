function repeatFront(str, n){
    let str1 = '';
    for(i=0;i<n;i++)
    {
        str1 += str.slice(0,n-i);
    }
    return str1; 
}