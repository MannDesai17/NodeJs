function frontTimes(str, n){
  let len = str.length;
  String temp = "";
  
  if (len < 4){
    for (let i = 0; i < n; i++){
      temp += str;
    }
  }else{
    for (let j = 0; j < n; j++){
      temp += str.substring(0,3);
    }
  }
  
  return temp;
}