function monkeyTrouble(aSmile, bSmile){
   if (
    (aSmile == true && bSmile == false) ||
    (aSmile == false && bSmile == true)
  ) {
    return false;
  } else {
    return true;
  }
}