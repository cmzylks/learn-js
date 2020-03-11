// let arr = new Array(); //new xxx()
// 字面量方式定义数组
let arr = [1, 2, 3, 4, 5];

// 最后一个元素下标
console.log(arr[arr.length - 1]);

// 遍历数组
for (let i = 0; i < arr.length; i++) {
  //  遍历偶数
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}
// 末尾添加
arr.push("zzz");
// 末尾删除并返回改元素
arr.pop()
console.log(arr);

// 开头添加
arr.unshift("aaa");
// 开头删除
arr.shift();
// 截取 start <= n < end
let arr1 = arr.slice(0, 2);
console.log(arr1);

// 删除某个下标的元素  index,length
arr.splice(1, 2);

// 将数组按指定字符串拼接新的字符串
let str = arr.join("&&");
console.log(str);
// 数组反转
arr.reverse();
// 拼接两个数组 并返回新数组
console.log(arr.concat([1, 2, 3]));
// 判断数组是否满足条件
console.log(arr.every(item => item % 2 == 0));
// 过滤
console.log(arr.filter(item => item > 2));
// 查找满足条件的值  只返回一个
console.log(arr.find(item => item > 2));
// 查找满足条件的值  返回布尔值
console.log(arr.some(item => item > 2));

arr.forEach(item => {
  item = item * 20;
  console.log(item);
})
// 返回新的数组
console.log(arr.map(item => {
  return item * 20
}));
// 累加
console.log(arr.reduce((a, b) => {
  return a + b;
}));
// 找到某个元素的下标
arr.indexOf();
// 是否包含2
console.log(arr.includes(2));

console.log(arr);

function test(obj) {
  if (!Array.isArray(obj)) {
    // throw 抛出异常
    throw "参数不是数组"
  }
  obj.push(1);
}
test(arr);

let obj = {
  0: "siba",
  1: "ace",
  length: 2
}
// 将类数组对象转换成数组
let arr2 = Array.from(obj);

console.log(arr2);