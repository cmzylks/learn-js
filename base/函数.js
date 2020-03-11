function attack(a, b) {
  console.log(a + "打" + b);
}
attack("小玩", "小明");


function checkGreatYear(year) {
  let result = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return result;
}
console.log(checkGreatYear(2020));

// 函数是否要return 取决于函数外是否需要用到这个值
