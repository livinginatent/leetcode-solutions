const numberOfSeniorCitizens = (nums) => {
    let res = 0
  console.log(Number(nums[1][11]+nums[0][12]))
  for(let i=0;i<nums.length;i++){
    if(nums[i][11]+nums[i][12]>60){
        res++
    }
  }
  return res
}

//["7868190130M7522","5303914400F9211","9273338290F4010"]

numberOfSeniorCitizens([
  "7868190130M7522",
  "5303914400F9211",
  "9273338290F4010",
]);