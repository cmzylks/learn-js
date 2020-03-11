/*  求数组中的最大值 */
let arr = [4, 5, 31, 2, 1];
function arrMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(arrMax(arr));

// 筛选数组  把值添加给新数组
let arr1 = [10, 20, 13, 45, 4564, 31, 123];
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > 10) {
    // 空数组长度为0 正好可以当作下标
    arr2[arr2.length] = arr1[i];
  }
}
console.log(arr2);

