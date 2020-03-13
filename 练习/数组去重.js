// 数组去重
function unique(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) == -1) {
      res.push(arr[i]);
    }
  }
  return res;
}

let arr = ["A", "A", "S", "C", "B", "B", "S", "Z"];
let res = unique(arr);
console.log(res);

// 查找数组中元素出现的位置  {字符串也是一样的方式}
function findIndex(arr, val) {
  let index = arr.indexOf(val);
  while (index !== -1) {
    console.log(index);
    index = arr.indexOf(val, index + 1);
  }
}
findIndex(arr, "A");