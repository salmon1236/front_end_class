// index.js
// 랜덤방식으로 로또 6개의 숫자를 추출하는 방법 (동일 숫자 없음)

let lottoArr = [];
let lottoNum;
while(lottoArr.length < 6){
  // lottoArr 변수에 6개의 번호가 담기기 전까지는 계속 반복한다.
  lottoNum = Math.ceil(Math.random() * 46); // 1부터 46까지의 정수값만 추출
  console.log(lottoNum);
  if(lottoArr.indexOf(lottoNum) == -1){
    // 동일한 값이 존재하지 않을때(해당하는 숫자가 lottoArr에 존재하지 않는다)
    lottoArr.push(lottoNum); // 배열의 맨 뒤에 넣는다.
  }
}
console.log('최종적으로 중복되지 않은 숫자 여섯개',lottoArr);

// nike
// 선택자 구성
let nike_contCover = document.querySelector("#cont_01 .wrap .cont");
let nike_contGroup = "";

let nike_arr = [];
let nike_num; 
while(nike_arr.length < 2){
  nike_num = Math.ceil(Math.random() * 4) - 1;
  if(nike_arr.indexOf(nike_num) == -1){
    nike_arr.push(nike_num);
  }
}
console.log(nike_arr);
// 해당 배열 데이터로부터 화면상에 이미지를 구현한다.
for (i = 0; i < nike_arr.length; i++) {
  nike_contGroup += `
  <div style="background-image: url(./img/nike_0${nike_arr[i] + 1}.jpg)" 
onclick="location.href='./detail.html#nike_${nike_arr[i]}'">
  </div>
  `;
}
nike_contCover.innerHTML = nike_contGroup;

// adidas
// 선택자 구성
let adidas_contCover = document.querySelector("#cont_02 .wrap .cont");
let adidas_contGroup = "";

let adidas_arr = [];
let adidas_num; 
while(adidas_arr.length < 2){
  adidas_num = Math.ceil(Math.random() * 4) - 1;
  if(adidas_arr.indexOf(adidas_num) == -1){
    adidas_arr.push(adidas_num);
  }
}
console.log(adidas_arr);
// 해당 배열 데이터로부터 화면상에 이미지를 구현한다.
for (i = 0; i < adidas_arr.length; i++) {
  adidas_contGroup += `
  <div style="background-image: url(./img/adidas_0${adidas_arr[i] + 1}.jpg)" 
onclick="location.href='./detail.html#adidas_${adidas_arr[i]}'">
  </div>
  `;
}
adidas_contCover.innerHTML = adidas_contGroup;

// puma
// 선택자 구성
let puma_contCover = document.querySelector("#cont_03 .wrap .cont");
let puma_contGroup = "";

let puma_arr = [];
let puma_num; 
while(puma_arr.length < 2){
  puma_num = Math.ceil(Math.random() * 4) - 1;
  if(puma_arr.indexOf(puma_num) == -1){
    puma_arr.push(puma_num);
  }
}
console.log(puma_arr);
// 해당 배열 데이터로부터 화면상에 이미지를 구현한다.
for (i = 0; i < puma_arr.length; i++) {
  puma_contGroup += `
  <div style="background-image: url(./img/puma_0${puma_arr[i] + 1}.jpg)" 
onclick="location.href='./detail.html#puma_${puma_arr[i]}'">
  </div>
  `;
}
puma_contCover.innerHTML = puma_contGroup;