var largestWordCount = function (messages, senders) {
  let obj = {};
  let largestValue = 0;
  let values = [];

  for (let i = 0; i < messages.length; i++) {
    const words = messages[i].split(" ").length;
    if (obj[senders[i]]) {
      obj[senders[i]] += words;
    } else {
      obj[senders[i]] = words;
    }
  }

  let maxCount = 0
  let maxSender = ""
  for(let sender in obj){
    if(obj[sender]>maxCount){
      maxCount=obj[sender]
      maxSender = sender
    }else if(obj[sender]===maxCount){
      if(sender>maxSender){
        maxSender=sender
      }
    }
  }
  return maxSender
};

//messages = ["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"], senders = ["Alice","userTwo","userThree","Alice"]
largestWordCount(
  ["How is leetcode for everyone", "Leetcode is useful for practice"],
  ["Bob", "Charlie"]
);
