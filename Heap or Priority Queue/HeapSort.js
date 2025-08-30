function heapSort(arr) {
  let n = arr.length;

  // Create a max heap
  //   for (let i = n - 1; i >= 0; i--) {
  //     heapifyDown(arr, i, n);
  //   }

  // start from the leaf node
  for (let i = Math.floor((n - 1) / 2); i >= 0; i--) {
    heapifyDown(arr, i, n);
  }

  // Sort the arr
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];

    heapifyDown(arr, 0, i);
  }

  return arr;
}

function getLeftChildIndex(i) {
  return 2 * i + 1;
}

function getRightChildIndex(i) {
  return 2 * i + 2;
}

function heapifyDown(arr, i, n) {
  //   let n = arr.length;

  let leftIndex = getLeftChildIndex(i);
  let rightIndex = getRightChildIndex(i);

  let largest = i;
  if (leftIndex < n && arr[largest] < arr[leftIndex]) {
    largest = leftIndex;
  }

  if (rightIndex < n && arr[largest] < arr[rightIndex]) {
    largest = rightIndex;
  }

  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    heapifyDown(arr, largest, n);
  }
}

let arr = [1, 4, 3, 5, 10, 7, 9, 2];

const sortarr = heapSort(arr);

console.log(sortarr);
