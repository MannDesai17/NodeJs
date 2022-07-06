function countXX(str){
  let count = 0;
  for (let i = 0; i < str.length; i++) {
   if(str.indexOf("xx",i)==i) count++;
  }
  return count;
}