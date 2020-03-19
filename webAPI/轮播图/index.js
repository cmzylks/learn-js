window.addEventListener("load", function () {
  let main = document.querySelector('#main');
  let prev = document.querySelector('.prev');
  let next = document.querySelector('.next');
  let slider = document.querySelector('#slider');
  main.addEventListener("mouseover", function () {
    prev.style.display = "block";
    next.style.display = "block";
  })
  main.addEventListener("mouseout", function () {
    prev.style.display = "none";
    next.style.display = "none";
  })
  next.addEventListener("click", function () {

  })

})