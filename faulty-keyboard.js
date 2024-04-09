const finalString = (s)=> {
const arr = s.split('')
arr
let res =[]
arr.map((ch,i)=>{
    if(ch==='i'){
       return res.push(arr.slice(0, i).reverse().join(""), arr.slice(i + 1).join(''));
       
    }
})
return(res.join(''))
};
finalString('string')

// s = 'string'