var slider_box = document.querySelector("#slider_box");
var slider = document.querySelector(".slider");
var slide = document.querySelector(".slide");

var prevBtn = document.querySelector(".arrow_prev");
var nextBtn = document.querySelector(".arrow_next");

var curNum = document.querySelector(".slide_num .cur");
var totalNum = document.querySelector(".slide_num .total");

totalNum.textContent = slider.length;


slider.prepend(slide[slide.length - 1]);

setInterval(function () {
  var isHover = sliderBox.classList.contains("hover");
  var isStop = sliderBox.classList.contains("stop");
  if (isHover == true) {

  } else {
    sliderBox.classList.remove("active");
    var firstSlide = document.querySelector(".slide:first-child");

    slide.classList.add("next");

    setInterval(function(){
      slider.append(firstslide);

      slider.classList.remove("next");
    }, 500);
  }
}, 3000);