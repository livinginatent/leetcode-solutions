const increasingTriplet = (nums) => {
let num1 = Infinity
let num2 = Infinity
for(const num of nums){
  if (num<=num1){
    num1=num
    console.log(num,'1')
  }else if(num<=num2){
    num2=num
    console.log(num,'2')
  }else{
    return true
  }
} return false
};

increasingTriplet([10,4,12,8,15,16,1,17,]);

//
