const longestCommonPrefix =  (strs) => {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let currStr = strs[i];
    while (currStr.indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
    
  } return prefix
};

/* Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
 */
longestCommonPrefix(["flower", "flow", "flight"]);
