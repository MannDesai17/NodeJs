function maxEnd3(nums){
      if(nums[0] > nums[2])
    {
        temp = nums[0];
        for(i=0;i<3;i++)
        {
            nums[i] = temp;
        }
        return nums;
    }
    else
    {
        temp = nums[2];
        for(i=0;i<3;i++)
        {
            nums[i] = temp;
        }
        r
}