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

// 数组去重

//数组去重(indexOf)
function unique(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    /* 判断新数组里是否有旧数组的值 */
    if (res.indexOf(arr[i]) === -1) {  //-1表示没有找到
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(unique(['a', 'a', 's', 'z', 'x', 'x']));

// 查找数组中元素出现的位置  {字符串也是一样的方式}
function findIndex(arr, value) {
  let index = arr.indexOf(value); //返回查找到下标
  while (index !== -1) {
    console.log(index); //先输出下标
    index = arr.indexOf(value, index + 1);  //然后在从下标的后一位开始查找  直到找不到
  }
}
let array = ["A", "b", "a", "A", "B", "A"];
findIndex(array, "A");
