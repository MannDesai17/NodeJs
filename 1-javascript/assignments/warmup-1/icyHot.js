function icyHot(temp1, temp2){
  if (temp1 < 1 && temp2 > 100) {
    return true;
  } else if (temp2 < 1 && temp1 > 100) {
    return true;
  } else {
    return false;
  }
}