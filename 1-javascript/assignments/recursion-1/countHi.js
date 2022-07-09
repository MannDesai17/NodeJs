function countHi(str){
    if(str.length == 0)
    {
        return 0;
    }
    if(str[0] == 'h' && str[1] == 'i')
    {
		return 1 + countHi(str.substring(1,str.length));
    }
	return countHi(str.substring(1,str.length));
  
}