/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  let volMap = {};
  let conMap = {};

  let volSet = new Set(["a", "e", "i", "o", "u"]);
  for (let i = 0; i < s.length; i++) {
    if (volSet.has(s[i])) {
      volMap[s[i]] = volMap[s[i]] ? volMap[s[i]] + 1 : 1;
    } else {
      conMap[s[i]] = conMap[s[i]] ? conMap[s[i]] + 1 : 1;
    }
  }

  let volFreq = 0,
    conFreq = 0;

  for (let k of Object.keys(volMap)) {
    volFreq = Math.max(volFreq, volMap[k]);
  }

  for (let k of Object.keys(conMap)) {
    conFreq = Math.max(conFreq, conMap[k]);
  }

  return volFreq + conFreq;
};
