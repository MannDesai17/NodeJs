function xyzThere(str){
    for (let i = 0; i < str.length - 2; i++)
    if (str.substring(i, i + 3) == "xyz" && str.charAt(i - 1) != ".")
      return true;
  else;
  return false;
}