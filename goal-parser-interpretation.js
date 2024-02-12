const interpret = (command) => {
const regex = /G|\(\)|\(al\)/g;
const res = command.match(regex)
const obj = {
  'G':'G',
  '()':'o',
  '(al)':'al'
}
let string = ''
for(let i=0;i<res.length;i++){
  if(obj[res[i]]){
    string+=obj[res[i]]
  }
}
return string
};

