// 118. Pascal's Triangle

/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function (numRows) {
  if (numRows < 1) return [];
  if (numRows === 1) return [[1]];

  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    let prevRow = triangle[i - 1];
    let currentRow = [];
    currentRow.push(1);
    for (let j = 1; j < prevRow.length; j++) {
      currentRow[j] = prevRow[j] + prevRow[j - 1];
    }
    currentRow.push(1);
    triangle.push(currentRow);
  }

  return triangle;
};

// input : integer
//output: is an array
//

//Edge case : if input is 0 -> output :[]

console.log(generate(5));
