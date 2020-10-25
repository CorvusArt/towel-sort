
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = matrix;
  if (arr == null) {
    return [];
  }
  return arr.reduce((acc, curr, i) => acc.concat(i % 2 === 0 ? curr : curr.reverse()), [])
}
