function sum(n) {
  if (n === 0) return arr[0];

  return arr[n] + sum(n - 1);
}

let arr = [5, 4, 8, 6, 7, 2];

console.log(sum(arr.length - 1));
