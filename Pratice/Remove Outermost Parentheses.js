/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    // wit stack

    let stack = []
    let res = ""

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i])
            if (stack.length > 1) res += s[i]
        } else {
            if (stack.length > 1) res += s[i]
            stack.pop()
        }
    }

    return res
};