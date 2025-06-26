/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  let res = [];

  for (let i = 0; i < words.length; i++) {
    // console.log(words[i])
    // if(words[i].includes(x)) res.push(i)

    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        res.push(i);
        break;
      }
    }
  }

  return res;
};

// Time complexity: O(n * m)
// Space complexity: O(1)