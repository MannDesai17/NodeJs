function changeXY(str){
      let ch;
	if(str.length == 0)
    {
		return str;
    }
	ch = str[0];
	if(ch == 'x')
    {
		return 'y' + changeXY(str.substring(1));
    }
	return ch + changeXY(str.substring(1));
}