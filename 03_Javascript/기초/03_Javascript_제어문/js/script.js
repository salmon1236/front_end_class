//  제어문
//  ■ 조건문: if() ~ else if() ~ else
//  ■ 선택문: switch ~ case ~ break ... default
//  ■ 반복문: while, do while, for

//  #1. 조건문: true 또는 false 조건에 의해서 어떤 결과를 도출 제어를 담당
var age =12;
if(age >= 13) {
    document.write(`가입연령 대상입니다. <br />`) 
}
else {document.write(`가입연령 대상이 아닙니다. <br />`)
}

//  월별에 따른 계절 문구 보여주기
var curMonth = parseInt(24, 10);
if(curMonth >= 1 && curMonth <= 12){
    //  초기 입력 받은 값을 1~12까지로만 제한
    if(curMonth >= 3 && curMonth <= 5) {
        //  3 <= curMouth <= 5
        document.write(`따뜻한 봄 입니다.<br />`);
    }
    else if (curMonth >= 6 && curMonth <=8){
        //  6 <= curMonth <= 8
        document.write(`개같게 타죽을 것 같은 여름입니다. <br />`);
    }
    else if (curMonth >= 9 && curMonth <=11){
        //  9 <= curMonth <= 11
        document.write(`시원~한 가을이네유. <br />`);
    }
    else {
        document.write(`얼어뒤진 겨울입니다. <br />`);
    }
} else {
    document.write(`당신의 1년은 그렇습니까? <br />`)
}

//  조건문으로 구매자의 등급에 따른 할인쿠폰 발송
/*
VIP(100,000원 이상 구매 고객)  >>>  30% 할인쿠폰 발송
GOLD(60,000원 이상 구매 고객)  >>>  20% 할인쿠폰 발송
SILVER(10,000원 이상 구매 고객)  >>>  10% 할인쿠폰 발송
BRONZE(10,000원 미만 구매 고객)  >>>  5% 할인쿠폰 발송
*/

var buyPrice = 25000;
if(buyPrice >= 100000){
document.write(`당신은 VIP 등급입니다. 마이페이지에서 30% 할인쿠폰을 확인 바랍니다. <br/>`)
}
else if (buyPrice >= 60000) {
    document.write(`당신은 GOLD 등급입니다. 마이페이지에서 20% 할인쿠폰을 확인 바랍니다. <br/>`)
}
else if (buyPrice >= 10000) {
    document.write(`당신은 SILVER 등급입니다. 마이페이지에서 10% 할인쿠폰을 확인 바랍니다. <br/>`)
}
else 
    document.write(`당신은 BRONZE 등급입니다. 마이페이지에서 5% 할인쿠폰을 확인 바랍니다. <br/>`)



//  디바이스 사이즈를 기준으로 어떤 디바이스에서 서비스를 보고 있는지 확인 (PC, Tablet, Mobile)
//  가로사이즈가 1200px 이상 = pc
//  가로사이즈가 768px 이상 = Tablet
//  가로사이즈가 768px 미만 = Mobile

var deviceWidith =375;
if(deviceWidith >= 1200){
    console.log(`디바이스 - PC`);
} else if (deviceWidith >= 768) {
    console.log(`디바이스 - Tablet`);
} else {
    console.log(`디바이스 - Mobile`);
}

//  선택문 - 값이 정확하게 일치하는 여부에 따라 결과를 다르게 도출
var subwayNum = "2"
switch(subwayNum) {
    case "1": document.write(`군청색 1호선 입니다. <br/>`);
    break;
    case "2": document.write(`녹색 2호선 입니다. <br/>`);
    break;
    case "3": document.write(`주황색 3호선 입니다. <br/>`);
    break;
    case "4": document.write(`하늘색 4호선 입니다. <br/>`);
    break;
    case "5": document.write(`보라색 5호선 입니다. <br/>`);
    break;
    default : document.write(`유효값이 아닙니다. <br/>`);
}

// 영화관 키오스크에서 영화를 선택했을 때
// 영화 선택 -> 시간 선택 -> 좌석 선택 -> 영화표 출력

var selectedMovie = "베테랑";
switch (selectedMovie) {
    case "범죄도시4"
        :document.write(`선택한 영화 : 범죄도시4`);
        break;
    case "베테랑2"
        :document.write(`선택한 영화 : 베테랑2`);
        break;
    case "겨울왕국3"
        :document.write(`선택한 영화 : 겨울왕국3`);
        break;
    default:
        document.write(`선택한 영화 : 없음`); // 예외처리(방어코드)
}

//  반복문: 대상을 반복하여 구현하고자 할 때
// 초기값(수), 조건식(true or false), 증감식(++, --) + 실행문
// while, do~while, for(기본 for, for~in, for~of, forEach, map)

//  while 반복문:
//  1. 초기값 >> 2. 조건식 확인(true) >> 3. 실행문 실행 >> 4. 증강식
document.write("<hr/><h3>while반복문</h3>")
//  1~10 까지 화면에 출력
var i = 1; // 1. 초기값
while(i <= 10) {  //  2. 조건식
    document.write(`${i},<br/>`); //  3. 실행문
    i++; //4. 증감식
}
document.write ('<hr/>')

/* 
i = 1  >>>  (1 <= 10)  >>>   document.write(`1`); -(i++) -> i =2
i = 2  >>>   (2 <= 10)  >>>   document.write(`2`); -(i++) -> i =3
i = 3  >>>   (3 <= 10)  >>>   document.write(`3`); -(i++) -> i =4
...
i = 9  >>>   (9 <= 10)  >>>   document.write(`9`); -(i++) -> i =10
i = 10  >>>   (10 <= 10)  >>>   document.write(`10`); -(i++) -> i =11
i = 11  >>>   (11 <= 10)  >>>   반복문을 종료하고 나와라
*/

//  브라우저 상에 반복문을 활용하여 이미지를 출력하기 (view1.jpg ~ view9.jpg)

var j = 1;
while (j <= 9) {
    console.log(`증감전 : `, j);
    document.write (`<img src="./img/view${j}.jpg" style = "width: 80px;">`);
    j++;
    console.log(`증감후 : `, j);
}
document.write ('<hr/>')

//  [실습]
var m = 1;
while (m <= 12) {
    document.write(`<img src="./img/m_${m}.png" style="width: 70px;">`);
    m++;
}
document.write ('<hr/>')

//  박스를 10개 출력하는 과정에서 3의 배수인 곳에만 다른 색상을 부여

document.write(`<div class="wrap_while">`);
var box = 1;
while (box <= 10) {
    if(box % 3 == 0){
        document.write(
            `<div class="box" style="background-color: #faf;">${box}</div>`
        );
    } else {
        document.write(
            `<div class="box">${box}</div>`
        );
    }
    box++;
}
document.write(`</div>`);

// do ~ while 반복문
// 1.초기값 >> 2.do에 의해 강제 실행문을 실행 >> 3.증감식 >> 4.조건식'

var m = 1; //  1. 초기값
do{
    //  2-1. 강제 실행
    document.write(`${m},<br/>`) //  2-2.실행문
    m++; //  3.증감식
} while (m <=10); //  4.조건식

/* 
m = 1  >>>  document.write(`1`) -(m++)  >>>  m = 2  >>>  2<=10(true)
m = 2  >>>  document.write(`2`) -(m++)  >>>  m = 3  >>>  3<=10(true)
m = 3  >>>  document.write(`3`) -(m++)  >>>  m = 4  >>>  4<=10(true)
...
m = 9  >>>  document.write(`9`) -(m++)  >>>  m = 10  >>>  10<=10(true)
m = 10  >>>  document.write(`10`) -(m++)  >>>  m = 11  >>>  11<=10(false)  >>>  do 문으로 보내지 않고 빠져나온다.
*/

//  기본 for 반복문
/*
[구조형식]
for(초기값; 조건식; 증감식){
  실행문
}

[진행순서]
1. 초기값  >>  2.조건식(true)  >>  3.실행문  >>  4.증감식
1. 초기값  >>  2.조건식(false)  >>  반복문 종료
*/
document.write("<hr/><h3>기본 for 반복문</h3>");
for(var n = 1; n <= 10; n++) {
  document.write(`${n},<br/>`)
}

/*
n = 1  >>>  1 <= 10  >>>  document.write(`1`) -(n++)  >>>  n = 2
n = 2  >>>  2 <= 10  >>>  document.write(`2`) -(n++)  >>>  n = 3
...
n = 9  >>>  9 <= 10  >>>  document.write(`9`) -(n++)  >>>  n = 10
n = 10  >>>  10 <= 10  >>>  document.write(`10`) -(n++)  >>>  n = 11
n = 11  >>>  11 <= 10(false)  >>>  반복문 종료
*/

// 40개의 박스를 구성 후 넘버링 구현하기(100*100)

// 4의 배수의 배경색상은 #faf
// 3의 배수의 배경색상은 #afa
// 12의 배수의 배경색상은 #aaf
// HTML에 div 요소를 추가하기 위해 document.write() 사용
document.write(`<div class="wrap_for">`);

// 1부터 40까지의 숫자로 박스를 생성하는 for 루프
for(let p = 1; p <= 40; p++) {
  // 배경색을 저장할 변수 초기화
  let backgroundColor = '';
  
  // 12의 배수 확인 (4와 3의 배수이기도 함)
  if (p % 12 === 0) {
    document.write()
    backgroundColor = '#aaf';
  }
  // 4의 배수 확인
  else if (p % 4 === 0) {
    backgroundColor = '#faf';
  }
  // 3의 배수 확인
  else if (p % 3 === 0) {
    backgroundColor = '#afa';
  }
  
  // 배경색이 지정되었다면 style 속성 추가, 아니면 기본 박스로 생성
  if (backgroundColor) {
    document.write(`<div class="box" style="background-color: ${backgroundColor}">${p}</div>`);
  } else {
    document.write(`<div class="box">${p}</div>`);
  }
}
document.write ('<hr/>')

// wrap_for div 닫기
document.write(`</div>`);

// 반복을 순환시키는 과정에서 중단을 강제로 하고자 할 때
for (q = 1; q <= 10; q++){
  document.write(`${q}, <br/>`)
  if (q == 6){
    break; // q == 6 이되는 순간 반복문 강제 종료
  }
}

document.write(`<hr/>`)



//  반복문을 순환시키는 과정에서 잠깐 종료했다가 이어지게 만드는 명령어 continue
for (r = 1; r <= 10; r++){
  if(r == 6){
    continue;  // 아래의 실행문으로 접근하지 말고, 증감식으로 진행시킴
  }
  document.write(`${r}, <br/>`)
}
document.write(`<hr/>`)



//  중첩 반복문(외부 반복  >>(true)>>  내부반복)
//  예제) 곱셈문
for (s = 1; s <= 9; s++){
  document.write(`<h4>${s} 단</h4>`)
  //  2 * 1 = 2
  //  2 * 2 = 4
  //  ...
  //  2 * 9 = 18
  for (t = 1; t <= 9; t++){
    document.write(`<p>${s} × ${t} = ${s*t}</p>`)
  }
}
document.write(`<hr/>`)


//  중첩 반복문을 활용한 구조 구성 
//  1행. view1.jpg  ~ view4.jpg
//  2행. view5.jpg  ~ view8.jpg

let no = 1;
document.write(`<div class="wrap">`)
for(i = 1; i <= 2; i++){
document.write(`<div class="outer">`);
for(j = 1; j <= 4; j++){
    document.write(`<div class="box" style="background-image: url(./img/view${no}.jpg)">${no}</div>`)
    no++;
}
document.write(`</div>`);
}
document.write(`</div>`);

//  1~31 까지 달력 구성하기
let date = 1;
document.write(`<table border="1" style="border-collapse: collapse;">`)
for(i = 1; i <= 5; i++){
  document.write(`<tr>`);
    for(j = 1; j <= 7; j++){

      document.write(`<td>${date}</td>`);
      date++;
      if (date == 32) {
        break;
      }
    }

  document.write(`</tr>`);
  
}

document.write(`</table>`);