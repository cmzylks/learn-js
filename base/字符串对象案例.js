// 查找字符串中出现最多的字符并统计次数;
function strMax(str) {
  let o = {}; //创建一个空对象  用来存放字符和字符出现的次数
  let max = 0;//用来存放出现多的字符的次数
  let ch = "";//用来存放出现最多次数的字符
  // 遍历字符串
  for (let i = 0; i < str.length; i++) {
    // 查找出每个字符  并把字符添到空对象中
    let chars = str.charAt(i);
    // 判断对象中是否存在这个字符
    if (o[chars]) {
      o[chars]++; //让这个值加1
    } else {
      o[chars] = 1;//添加字符到对象  并给值为1代表出现一次
    }
  }
  // 遍历对象 
  for (k in o) {
    if (o[k] > max) {
      /* o[k] :属性值 k :属性名 */
      max = o[k];
      ch = k;
    }
  }
  console.log(`字符串出现最多的是:${ch},出现了${max}次`);
}
let str = "ssssssadsadhajbdja";
strMax(str);