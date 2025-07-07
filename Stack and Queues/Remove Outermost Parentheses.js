/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  // let res = ""

  // let stack = []

  // for(let i=0;i<s.length;i++){
  //     if(s[i] === "("){
  //         stack.push(s[i])
  //         if(stack.length > 1) res += s[i]
  //     }else{
  //         if(stack.length > 1) res += s[i]
  //         stack.pop()
  //     }
  // }

  // return res

  let level = 0;
  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      level++;
      if (level > 1) res += s[i];
    } else {
      if (level > 1) res += s[i];
      level--;
    }
  }

  return res;
};
