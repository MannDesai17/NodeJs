function double23(nums){
      count2 = 0;
    count3 = 0;
    for(i=0;i<nums.length;i++)
    {
        if(nums[i] == 2)
        {
            count2++;
        }
        if(nums[i] == 3)
        {
            count3++;
        }
    }
    if(count2 == 2 || count3 == 2)
    {
        return true;
    }
    else
    {
        return false;
    }
}