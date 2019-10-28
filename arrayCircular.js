/*

Write a function that determines if an array is circular. An array is circular if its subarrays can be reordered such that each subarray's last element is equal to the next subarray's first element.
For example, the array [[1, 1, 1], [9, 2, 3, 4], [4, 1], [1, 2, 5, 7, 9]] is circular because we can re-arrange the elements to create the following array:
[[9, 2, 3, 4], [4, 1], [1, 1, 1], [1, 2, 5, 7, 9]]

*/

function isCircular(arr) {
  let end = [];
  let start = [];

  arr.forEach(x => {
    start.push(x[0]);
    end.push(x[x.length - 1]);
  });

  return start.sort().join("") == end.sort().join("");
}
