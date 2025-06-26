/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // let finalCount = 0
  // let count = 0
  // let i;
  // for (i = 0; i < s.length; i++) {
  //     if (s[i] === " ") {
  //         // console.log(count)
  //         if (count !== 0) finalCount = count
  //         count = 0
  //     } else {
  //         // console.log(s[i])
  //         count += 1
  //     }
  // }
  // if (s[i - 1] === " ") return finalCount

  // return count

  // Solution with tow loop

  /*
    let end = s.length-1
    let count = 0
    while(end >=0 && s[end] === " ") end--

    while(end >=0 && s[end] !== " "){
        end--
        count++
    }

    return count
     */

  // Solution with one loop

  let count = 0;
  let end = s.length - 1;

  while (end >= 0) {
    if (s[end] !== " ") {
      count++;
    } else if (count > 0) {
      break;
    }

    end--;
  }

  return count;
};
