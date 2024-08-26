var reduce = function (nums, fn, init) {
    let val = init
    for(let i=0;i<nums.length;i++){
        res=fn(val,nums[i])
    }
    return res
};
