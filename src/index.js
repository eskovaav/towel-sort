
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];
  if (matrix === undefined || matrix.length === 0) return [];
  
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) matrix[i].reverse();
    array = array.concat(matrix[i]);
  }
  return array;
}