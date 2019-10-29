/*

Given an array of numbers and a value for n, split the numbers into n-sized groups. If we imagine that these groups are stacked on top of each other (see below), return the column number that has the greatest sum. If two or more columns have the same sum, return the one with the smallest column number.

Example

nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
n = 4
Gives the array:

[[4, 14, 12,  7],
[14, 16, 5, 13],
[7, 16, 11, 19]]

// 1, 2, 3, 4 (column)
// 25, 46, 28, 39 (sum)
You would return 2, as the 2nd column has the greatest sum.

Notes

Nums will always divide into equal-length groups.

*/

function colWithMaxSum(nums, n) {
  function chunked(array, size) {
    if (!array) return [];
    let firstChunk = array.slice(0, n);
    if (!array.length) {
      return array;
    }
    return [firstChunk].concat(chunked(array.slice(size, array.length), size));
  }

  let newNums = chunked(nums, n);

  console.log("newNums:", newNums);

  let max = 0;
  let maxCol = 0;
  let acc = 0;

  for (var j = 0; j < n; j++) {
    for (var i = 0; i < newNums.length; i++) {
      acc += newNums[i][j];
    }
    if (acc > max) {
      max = acc;
      maxCol = j + 1;
    }
    acc = 0;
  }

  return `El maximo es ${max} y corresponde a columna ${maxCol}`;
}

/*

function colWithMaxSum(nums, n) {
	let newArr = [], sum = []
	while(nums.length >= n) {
		newArr.push(nums.splice(0, n))
	}
	for(let i=0; i<n; i++) {
		sum.push(newArr.reduce((acc,v) => acc + v[i],0))
	}
	return sum.indexOf(Math.max(...sum)) + 1
}

*/

/*
Let's take an example to make it more easy to understand
chunk([1, 2, 3, 4], 2);
1st call - chunk([1,2 3,4], 2) = [[1,2]].concat(chunk([3,4], 2));
2nd call - chunk([3, 4], 2) = [[3 ,4]].concat(chunk([], 2));
3rd call - chunk([], 2) = [] //base case
so basically, chunk([1, 2, 3, 4], 2) = [[1,2]].concat([[3 ,4]].concat([])) = [[1,2], [3, 4]]

Given an array and chunk size, divide the array into many subarrays where each subarray is of length size.
The first parameter will be the array to be chunked, the second parameter is the size. If the remaining elements of an array is not equal to size, it still become a smaller chunk.
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]

*/
