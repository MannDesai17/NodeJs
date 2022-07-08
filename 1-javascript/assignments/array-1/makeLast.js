function makeLast(nums){
      let temp = [];
    let dl = nums.length * 2;
    for(i=0;i<dl-1;i++)
    {
        temp.push(0);
    }
    temp.push(nums[nums.length-1]);
    return temp;
}