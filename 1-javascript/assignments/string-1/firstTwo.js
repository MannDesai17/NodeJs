function firstTwo(str){
  let len = str.length;
  if (len < 2)
    return str;
  else
    return str.substring(0,2);
}