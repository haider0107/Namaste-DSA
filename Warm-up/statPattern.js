const letfToRight = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = n; j > i; j--) row += " ";
    for (let k = 0; k <= i; k++) row += "*";

    console.log(row);
  }
};

letfToRight(5)