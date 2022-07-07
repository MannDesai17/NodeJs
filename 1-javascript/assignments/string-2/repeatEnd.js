function repeatEnd(str, n){
     let a = "";
  for (let i = 0; i < n; i++) a += str.substring(str.length - n);
  return a;
}