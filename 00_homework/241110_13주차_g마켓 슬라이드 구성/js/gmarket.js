document.addEventListener('DOMContentLoaded', function() {
  const sliderBox = document.querySelector("#slider_box");
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".arrow_prev");
  const nextBtn = document.querySelector(".arrow_next");
  const playBtn = document.querySelector(".playing_btn button");
  const progressBar = document.querySelector(".gage .bar");
  const curNum = document.querySelector(".slide_num .cur");
  const totalNum = document.querySelector(".slide_num .total");

  let currentSlide = 0;
  let isPlaying = true;
  let slideInterval;
  let progressInterval;

  // 초기 설정
  totalNum.textContent = slides.length;
  updateSlideNumber();
  slides[0].classList.add('active');

  // 슬라이드 변경 함수
  function changeSlide(index) {
      slides[currentSlide].classList.remove('active');
      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      updateSlideNumber();
      resetProgress();
  }

  // 슬라이드 번호 업데이트
  function updateSlideNumber() {
      curNum.textContent = currentSlide + 1;
  }

  // 진행바 리셋
  function resetProgress() {
      progressBar.style.width = '0%';
  }

  // 자동 재생 시작
  function startAutoPlay() {
      if (slideInterval) clearInterval(slideInterval);
      if (progressInterval) clearInterval(progressInterval);

      slideInterval = setInterval(() => {
          changeSlide(currentSlide + 1);
      }, 3000);

      progressInterval = setInterval(() => {
          const currentWidth = parseFloat(progressBar.style.width) || 0;
          if (currentWidth < 100) {
              progressBar.style.width = currentWidth + 0.5 + '%';
          }
      }, 15);
  }

  // 자동 재생 정지
  function stopAutoPlay() {
      clearInterval(slideInterval);
      clearInterval(progressInterval);
  }

  // 이벤트
  prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      changeSlide(currentSlide - 1);
      if (isPlaying) {
          stopAutoPlay();
          startAutoPlay();
      }
  });

  nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      changeSlide(currentSlide + 1);
      if (isPlaying) {
          stopAutoPlay();
          startAutoPlay();
      }
  });

  playBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
          playBtn.querySelector('img').src = './img/stop-128.png';
          startAutoPlay();
      } else {
          playBtn.querySelector('img').src = './img/play-128.png';
          stopAutoPlay();
      }
  });

  sliderBox.addEventListener('mouseenter', () => {
      if (isPlaying) stopAutoPlay();
  });

  sliderBox.addEventListener('mouseleave', () => {
      if (isPlaying) startAutoPlay();
  });

  // 초기 자동 재생 시작
  if (isPlaying) startAutoPlay();
});