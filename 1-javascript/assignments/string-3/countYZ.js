function countYZ(str){
     let count = 0; 
     str = str.toLowerCase(); 
     for(i=0;i<str.length;i++) 
     { 
         if(str[i] == 'y' || str[i] == 'z') 
         { 
             if(i < str.length-1 && (str[i+1].toLowerCase() === str[i+1].toUpperCase())) 
             { 
                 count++; 
             } 
             else if(i == str.length - 1) 
             { 
                 count++; 
             } 
         } 
     } 
     return count; 
 } 
  
}