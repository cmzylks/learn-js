function animate(el, target, callback) {
  clearInterval(el.timer);  //先清除定时器
  // 把定时器添加给el的属性
  el.timer = setInterval(() => {
    // 缓动动画的移动步数 : 目标步数 - 当前步数 / 20;
    let step = (target - el.offsetLeft) / 20;
    // 这边向上和向下取整是因为除法会生成小数  需要取整才能达到目标值
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (el.offsetLeft == target) {
      clearInterval(el.timer);
      // 动画结束后 是够有回调函数  如果有就调用
      if (callback) {
        callback();
      }
    }
    // 当前距离加上步数
    el.style.left = el.offsetLeft + step + "px";
  }, 15);
}