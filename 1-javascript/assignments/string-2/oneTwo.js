function oneTwo(str){
     let temp = '';
    for(i=0;i<str.length-2;i=i+3)
    {
        temp = temp + str.slice(i+1,i+3)+str[i];
    }
    return temp;
}