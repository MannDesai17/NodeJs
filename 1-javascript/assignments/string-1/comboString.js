function comboString(a, b){
  let lenA = a.length;
  let lenB = b.length;
  
  if (lenA > lenB)
    return b+a+b;
  else
    return a+b+a;
}