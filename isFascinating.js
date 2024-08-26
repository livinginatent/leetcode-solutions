var isFascinating = function (n) {
let newNum = ''
newNum = n.toString()+(n*2).toString()+(n*3).toString()
newNum
const arr = newNum.split('')
if(arr.length===new Set(arr).size && !arr.includes('0')){
    return true
}
return false

};



//Concatenate n with the numbers 2 * n and 3 * n.

//n = 192
isFascinating(192)