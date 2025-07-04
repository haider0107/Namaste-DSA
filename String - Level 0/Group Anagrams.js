/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let group = {};

  for (let i = 0; i < strs.length; i++) {
    let alphaFreq = Array(26).fill(0);

    let word = strs[i];
    for (let j = 0; j < word.length; j++) {
      let index = word[j].charCodeAt() - "a".charCodeAt();
      alphaFreq[index] += 1;
    }
    let key = alphaFreq.join("#");
    console.log(key);

    if (!group[key]) group[key] = [word];
    else group[key].push(word);
  }

  return [...Object.values(group)];
};
