// 为10一下的数字前面拼接0
function repairZero(val) {
  return val < 10 ? ("0" + val) : val;
}
// 返回星期
function week(day) {
  // 字符串是相当于一个数组
  return "星期" + "日一二三四五六"[day];
}

let a = 10;
let b = 20;
// ES6模板字符串
console.log(`a="${a}",b="${b}"`);


let data = new Date();
let str = `${data.getFullYear()}-${repairZero(data.getMonth() + 1)}-${data.getDate()
  } ${repairZero(data.getHours())}:${repairZero(data.getMinutes())}:${repairZero(data.getSeconds())}`

console.log(`${str} ${week(data.getDay())}`);