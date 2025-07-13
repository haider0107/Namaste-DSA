/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;

  let l = 2;
  let r = Math.floor(x / 2);

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    let sqr = m * m;
    if (sqr === x) return m;
    else if (sqr > x) r = m - 1;
    else l = m + 1;
  }

  return r;
};
