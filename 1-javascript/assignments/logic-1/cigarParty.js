function cigarParty(cigars, isWeekend){
  if(isWeekend == true && cigars >= 40)
    {
        return true;
    }
    else if(isWeekend == false && cigars <= 60 && cigars >= 40)
    {
        return true;
    }
    else
    {
        return false;
    }
}