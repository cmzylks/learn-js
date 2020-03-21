window.addEventListener("load", function () {
  let next = this.document.querySelector(".next");
  let prev = this.document.querySelector(".prev");
  let main = this.document.querySelector("#main");
  //1.鼠标经过显示左右按钮
  main.addEventListener('mouseover', function () {
    next.style.display = "block";
    prev.style.display = "block";
  })
  main.addEventListener('mouseout', function () {
    next.style.display = "none";
    prev.style.display = "none";
  })
  let ul = main.querySelector("ul");
  let ol = main.querySelector("ol");
  // 获取到图片的宽度
  let focus = ul.children[0].offsetWidth;
  // 2.动态生成小圆圈  有几张图片就创建几个
  for (let i = 0; i < ul.children.length; i++) {
    // 创建一个li
    let li = document.createElement("li");
    // 生成li的同时设置自定义属性,用来记录索引号
    li.setAttribute("index", i);
    // 把li插入到ol中
    ol.appendChild(li);
    // 3.小圆圈排他  直接在生成小圆圈的同时添加事件
    li.addEventListener("click", function () {
      // 干掉所有人
      for (let i = 0; i < ol.children.length; i++) {
        ol.children[i].className = "";
      }
      // 留下我自己
      this.className = "current";
      // 获取到当前点击的小圆圈的索引
      let index = this.getAttribute("index");
      num = index;//把当前的index给num 点击小圆圈后num值会跟index统一
      circle = index;//circle也是同理
      // 4.点击小圆圈移动图片  索引*图片的宽度
      animate(ul, -focus * index);
      console.log(index);
    })
    console.log(ul.children[i].offsetLeft);
  }
  // 给第一个小圆圈添加current类名
  ol.children[0].className = "current";
  // 5.克隆第一张图片(li)到ul里面
  let first = ul.children[0].cloneNode(true);
  ul.appendChild(first);
  // 6.点击按钮切换图片
  let num = 0;//设置一个变量当作索引
  let circle = 0;//设置一个变量当作小圆圈的所以
  next.addEventListener("click", function () {
    // 实现无缝滚动
    if (num == ul.children.length - 1) {//如果到了最后一张图
      ul.style.left = 0;  //就把left变为0 重新第一张开始
      num = 0;  //索引也要变为0
    }
    num++;//每点击一次 就加加
    animate(ul, -focus * num);
    circle = num;//每点击一次 就加加
    // 点击后小圆圈样式跟着变化
    circleChange();
  })
  prev.addEventListener("click", function () {
    // 实现无缝滚动
    if (num == 0) {//如果到了最后一张图
      ul.style.left = -(ul.children.length - 1) * focus + "px";  //就把left变为0 重新第一张开始
      console.log(ul.children.length - 1);
      num = ul.children.length - 1;  //索引也要变为0
    }
    num--;//每点击一次 就加加
    animate(ul, -focus * num);
    circle = num;//每点击一次 就加加
    // // 点击后小圆圈样式跟着变化
    circleChange();
  })

  // 小圆圈排他
  function circleChange() {
    for (let i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "";
    }
    // 如果这个索引等于最后一张图片时就变为0 第一张
    if (circle == ul.children.length - 1) {
      circle = 0;
    }
    // 留下我自己
    ol.children[circle].className = "current";
  }
})