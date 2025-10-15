var numDecodings = function (s) {
  if (!s || s[0] === "0") return 0;

  let prev = 1,
    curr = 1;

  for (let i = 1; i < s.length; i++) {
    let temp = 0;
    const one = s[i];
    const two = s.substring(i - 1, i + 1);

    if (one !== "0") temp += curr;
    if (two >= "10" && two <= "26") temp += prev;

    prev = curr;
    curr = temp;
  }

  return curr;
};
