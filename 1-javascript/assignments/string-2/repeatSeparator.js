function repeatSeparator(word, sep, count){
     let str1 = '';
    for(i=0;i<count;i++)
    {
        if(i==count-1)
        {
            str1 += word;
        }
        else
        {
            str1 += word+sep;
        }
    }
    return str1;
}
}