function everyNth(str, n) {
   let a = "";
  for (let i = 0; i < str.length; i = i + n) {
    a = a + str.charAt(i);
  }
  return a;
}