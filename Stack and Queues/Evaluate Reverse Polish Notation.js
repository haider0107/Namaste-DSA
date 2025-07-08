/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (t) {
  let stack = [];
  for (let i = 0; i < t.length; i++) {
    if (t[i] == "+" || t[i] == "-" || t[i] == "*" || t[i] == "/") {
      let two = stack.pop();
      let one = stack.pop();
      let res;
      if (t[i] == "+") res = Math.floor(one + two);
      if (t[i] == "-") res = Math.floor(one - two);
      if (t[i] == "*") res = Math.floor(one * two);
      if (t[i] == "/") res = Math.trunc(one / two);
      // console.log(one," ",two," ",res)

      stack.push(res);
    } else {
      stack.push(Number(t[i]));
    }
  }
  return stack[0];
};
