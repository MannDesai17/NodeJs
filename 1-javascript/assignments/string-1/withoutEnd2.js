function withoutEnd2(str){
  let len = str.length;
  if (len < 3)
    return "";
  else
    return str.substring(1,str.length-1);
}