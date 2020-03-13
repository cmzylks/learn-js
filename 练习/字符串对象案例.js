// 查找字符串中出现最多的字符并统计次数;
function strMax(str) {
  let o = {};
  let max = 0;
  let ch = "";
  for (var i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (o[char]) {
      o[char]++;
    } else {
      o[char] = 1;
    }
  }

  for (k in o) {
    if (o[k] > max) {
      max = o[k];
      ch = k;
    }
  }
  console.log(ch, max);
}

strMax("sssjsabfjkabfkj");