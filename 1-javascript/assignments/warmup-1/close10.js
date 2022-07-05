function close10(a, b){
  temp1 = Math.abs(a - 10);
  temp2 = Math.abs(b - 10);

  if (temp1 == temp2){
    return 0;
  }

  else if (temp1 > temp2){
    return b;
  }
  
  else{
 return a;
  }

}