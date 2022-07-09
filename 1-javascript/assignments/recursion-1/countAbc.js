function countAbc(str){
      if(str.length < 3)
    {
        return 0;
    }
    if((str[0] == 'a' && str[1] == 'b' && str[2] == 'c')
        || (str[0] == 'a' && str[1] == 'b' && str[2] == 'a'))
    {
        return 1+countAbc(str.substring(1));
    }
    return countAbc(str.substring(1));
}