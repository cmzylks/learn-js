function countDown(time) {
  let nowTime = +new Date(); //获取现在的时间
  let inputTime = +new Date(time); //获取未来的时间
  let times = (inputTime - nowTime) / 1000;//获取总秒数
  let d = parseInt(times / 60 / 60 / 24);//天
  let h = parseInt(times / 60 / 60 % 24);//时
  let m = parseInt(times / 60 % 60);//分
  let s = parseInt(times % 60);//秒
  return d + "天" + h + "时" + m + "分" + s + "秒";
}

console.log(countDown("2020-3-13 23:00:00"));