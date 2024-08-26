var removeDuplicates = function (nums) {
    const len = nums.length
    let obj = {}
    let res = []
    for(let i =0;i<nums.length;i++){
        if(obj[nums[i]]===undefined){
            res.push(nums[i])
            obj[nums[i]]=1
        }
    }
    while(len>res.length){
        res.push('_')
    }
   console.log(res)
};
//nums = [1,1,2,3,3]

removeDuplicates([1, 1, 2]);
