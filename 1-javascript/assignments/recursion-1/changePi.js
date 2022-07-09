function changePi(str){
      if(str.length == 0)
    {
        return str;
    }
    if(str[0] == 'p' && str[1] == 'i')
    {
        return 3.14+changePi(str.substring(2,str.length));
    }
    return str[0]+changePi(str.substring(1));
}