const secondLargest = (arr) => {
  //   let largest = arr[0];
  //   let secondLargest = arr[0];

  //   for (let i = 1; i < arr.length; i++) {
  //     if (largest < arr[i]) {
  //       secondLargest = largest;
  //       largest = arr[i];
  //     } else if (secondLargest < arr[i]) {
  //       secondLargest = arr[i];
  //     } else if (largest === secondLargest && largest > arr[i]) {
  //       secondLargest = arr[i];
  //     }
  //   }

  //   return secondLargest;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      secondLargest = largest;
      largest = arr[i];
    } else if (largest !== arr[i] && secondLargest < arr[i]) {
      secondLargest = arr[i];
    }
  }

  return secondLargest === -Infinity ? largest : secondLargest;
};

console.log(secondLargest([1, 2, 3, 4, 5])); //4
console.log(secondLargest([1, 2, 3, 4, 5, 6])); // 5
console.log(secondLargest([1, 1, 1, 1, 1, 5, 2])); // 2
console.log(secondLargest([1, 1, 1, 1, 1, 1, 1])); // 1
console.log(secondLargest([5, 4, 3, 2, 1])); // 4
console.log(secondLargest([-1, -2, -3, -4, -5, -6])); // -2
console.log(secondLargest([20, 10, 20, 5, 4, 8, 9])); // 10
