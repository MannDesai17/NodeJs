function countHi(str){
    let a = 0;
  for (let i = 0; i < str.length; i++)
   
    if (str.substring(i, i + 2) == "hi") a++;
  return a;
  
}