function caughtSpeeding(speed, isBirthday){
     if (speed <= 60 || (isBirthday && speed <= 65)) return 0;
  if ((speed >= 60 && speed <= 80) || (isBirthday && speed <= 85)) return 1;
  else return 2;
}