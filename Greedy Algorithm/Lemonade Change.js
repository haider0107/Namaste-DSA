/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let change = [0, 0];

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) change[0]++;
    else if (bills[i] === 10) {
      change[0]--;
      change[1]++;
    } else {
      if (change[1]) {
        change[1]--;
        change[0]--;
      } else {
        change[0] -= 3;
      }
    }

    if (change[0] < 0) return false;
  }

  return true;
};
