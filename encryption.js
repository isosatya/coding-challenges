// https://www.hackerrank.com/challenges/encryption/problem

function encryption(s) {
  let sqStr = Math.sqrt(s.length);
  let row = Math.floor(sqStr);
  let col = Math.ceil(sqStr);
  let newStr = "";

  for (let i = 0; i < col; i++) {
    let subStr = "";
    for (let j = 0; j < s.length - 1; j += col) {
      subStr += s.charAt(i + j);
    }
    // console.log("Sub string at the end of the inside loop", subStr);

    newStr += subStr + " ";
  }
  // console.log(row, col);
  console.log(newStr.slice(0, newStr.length - 1));

  return newStr.slice(0, newStr.length - 1);
}

encryption("a");
