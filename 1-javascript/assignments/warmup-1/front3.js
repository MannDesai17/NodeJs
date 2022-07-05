function front3(str){ 
  if(str.length <=3){ 
    return str+str+str; 
  }
  else{ 
    let str1 = str.substring(0,3); 
    return str1+str1+str1; 
  } 
   
}