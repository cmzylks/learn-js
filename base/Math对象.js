// 手动封装一个Math对象
let getMath = {
  PI: Math.PI, //圆周率
  /* 最大值 */
  Max: function () {
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  },
  /* 最小值 */
  Min: function () {
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] < min) {
        min = arguments[i];
      }
    }
    return min;
  }
}

console.log(getMath.PI);
console.log(getMath.Max(1, 99, 20));
console.log(getMath.Min(2, 1, 5));

console.log("==============");

// 获取随机数
// 包含两位数
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(1, 10));
