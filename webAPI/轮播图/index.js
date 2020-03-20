window.addEventListener("load", function () {
  let main = document.querySelector('#main');
  let prev = document.querySelector('.prev');
  let next = document.querySelector('.next');
  let slider = document.querySelector('#slider');
  let imgList = slider.children;
  let circle = document.querySelector('.circle');
  // 获取ol下的li
  let ollist = circle.children;
  let num = 0;
  let target = 0;
  // 鼠标移入移出显示按钮
  main.addEventListener("mouseover", function () {
    prev.style.display = "block";
    next.style.display = "block";
  })
  main.addEventListener("mouseout", function () {
    prev.style.display = "none";
    next.style.display = "none";
  })


  for (let i = 0; i < imgList.length; i++) {
    //根据图片的张数 动态创建小圆圈
    let li = document.createElement("li");
    circle.appendChild(li);
    imgList[i].setAttribute('index', i); //为每个li设置索引号
    //给小圆圈添加点击事件
    ollist[i].addEventListener("click", function () {
      let index = imgList[i].getAttribute("index"); //获取每个li的索引号
      // 设置小圆圈的样式
      for (let i = 0; i < ollist.length; i++) {
        ollist[i].className = "";
      }
      this.className = "current";
      num = index;
      target = index;
      //点击圆圈移动 索引值*图片的宽度  得到的就是每张图片的位置了
      animate(slider, index * -imgList[i].offsetWidth)

    })
  }

  // 给第一个li添加样式
  ollist[0].className = "current";
  let imgLi = imgList[0].cloneNode(true);
  slider.appendChild(imgLi);

  // 点击下一张按钮绑定事件
  next.addEventListener("click", function () {
    if (num == imgList.length - 1) {
      num = 0;
      slider.style.left = 0;
    }
    num++;
    animate(slider, num * -imgList[0].offsetWidth)
    target++;
    if (target == ollist.length) {
      target = 0;
    }
    circleChange();
  })

  function circleChange() {
    // 先清除其余小圆圈的current类名
    for (let i = 0; i < ollist.length; i++) {
      ollist[i].className = '';
    }
    // 留下当前的小圆圈的current类名
    ollist[target].className = 'current';
  }
})  