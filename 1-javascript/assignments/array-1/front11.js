function front11(a, b){
   arr = [];
    if(a.length > 0 && b.length > 0)
    {
        arr.push(a[0]);
        arr.push(b[0]);
        return arr;
    }
    else if(a.length > 0 && b.length <= 0)
    {
        arr.push(a[0]);
        return arr;
    }
    else if(b.length > 0 && a.length <= 0)
    {
        arr.push(b[0]);
        return arr;
    }
    else
    {
        return arr;
    }
}