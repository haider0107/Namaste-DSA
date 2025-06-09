function sumFirst(n) {
  if (n === 1) return 1;

  return n + sumFirst(n - 1);
}

console.log(sumFirst(5));
