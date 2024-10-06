// 기본 문법 구성
// - 일반 객체 : 여러 데이터를 담을 수 객체(수정 포함)
// - 내장 객체 : Date(날짜), 문자객체(String), 수학객체(Number), 배열객체(Array)
// - Document Object Model(DOM) : 문서공간에서 선택자를 지정하여 해당하는 곳에 스크립트의 영역을 구성하는 객체 모델
// - 함수 : y = x + 1
// - 이벤트 : 사용자가 어떠한 액션을 취했을 때, 결과적으로 개발자가 구성해 놓은 함수의 결과로 출력을 시킴
// - Browser Object Model(BOM) : 문서 공간을 제외한 모든 부분에서 내장 스크립트를 작동시켜야할 때(history, navigator, setTimeut, setInterval)

// 객체(object)란? 하나 이상의 특징을 갖고 있는 사물
// 변수명 = 단일 데이터(문자형, 숫자형, 논리형, undefined, null)
// 변수명 = {key1: value1, key2: value2, ...}
// 갤럭시26 = {price: "2,000,000원", screenSize: "7inches", caseColor: "Purple", memory: "256GB", ....}

document.write(`<h2>객체</h2>`);
let myPhone = {
  name: "iPhone17",
  color: "Metal Gray",
  memory: 512,
  buyState: false,
};
console.log(myPhone);
console.log(myPhone.name);
console.log(myPhone.color);
console.log(myPhone.memory);
console.log(myPhone.buyState);

// 게임 캐릭터 구성
let myCharacter = {
  shape: "character.gif",
  name: "피카츄",
  level: 1,
  skill: "백만볼트",
  hp: 100,
  ep: 0,
};
document.write(
  `<img src="./img/${myCharacter.shape}" alt="캐릭터 이미지" style="width: 80px;" /><br />`
);
document.write(`<p>나의 캐릭터 이름 : ${myCharacter.name}</p>`);
document.write(`<p>현재 나의 레벨 : ${myCharacter.level}</p>`);

document.write(
  `<p>게임이 시작되었습니다. ${myCharacter.name}님이 모험을 떠납니다.</p>`
);

document.write(
  `<p>${myCharacter.name}님이 ${myCharacter.skill} 공격으로 1단계 악당을 물리쳤습니다.</p>`
);
// 보상으로 레벨업으로 1 증가시킴
myCharacter.level++;
document.write(`<p>현재 나의 레벨 : ${myCharacter.level}</p>`);

// 기존 경험치(ep)에서 50을 올려준다. 현재 나의 경험치 : ??
// 기존 체력(hp)에서 100을 올려준다. 현재 나의 체력 : ??
// 복합대입연산자 중 += 을 활용할 것~!! A += B ---> A = A + B
myCharacter.ep += 50;
myCharacter.hp += 100;

document.write(`<p>현재 나의 경험치 : ${myCharacter.ep}`);
document.write(`<p>현재 나의 체력 : ${myCharacter.hp}`);

// 날짜 객체
// Time Server(수많은 인공위성 중에서 근접한 4개로 부터 좌표값을 받아옴)로 부터 동기화시킨 값을 브라우저 표현 및 활용
// 로컬 컴퓨터(PC, TABLET, MOBILE)의 시스템으로 정보를 받아서 활용하겠다고 선언
// Date() : 날짜 및 시간 정보를 가져오세요.
var $today = new Date();
console.log($today);

var $cur_year = $today.getFullYear();
document.write(`<p>${$cur_year}년</p>`);

var $cur_month = $today.getMonth() + 1;
document.write(`<p>${$cur_month}월</p>`);
// getMonth() 컴퓨터 상에서 인식하는 첫번째 숫자를 0으로 인식 => 1월 : 0, ..... 12월 : 11

var $cur_date = $today.getDate();
document.write(`<p>${$cur_date}일</p>`);
// getDate() 컴퓨터 상에서 서수개념으로 인지

var $cur_day = $today.getDay();
// document.write(`<p>${$cur_day}요일</p>`);
// 일: 0, 월: 1, 화: 2, ... , 토: 6
if ($cur_day == 0) {
  document.write(`<p>일요일</p>`);
} else if ($cur_day == 1) {
  document.write(`<p>월요일</p>`);
} else if ($cur_day == 2) {
  document.write(`<p>화요일</p>`);
} else if ($cur_day == 3) {
  document.write(`<p>수요일</p>`);
} else if ($cur_day == 4) {
  document.write(`<p>목요일</p>`);
} else if ($cur_day == 5) {
  document.write(`<p>금요일</p>`);
} else if ($cur_day == 6) {
  document.write(`<p>토요일</p>`);
}

var $cur_hours = $today.getHours();
// document.write(`<p>${$cur_hours}시</p>`); // 0 ~ 23
// 오전 => 오전 0시 ~ 오전 11시 59분 59초
// 오후 => 오후 12시  ~ 오후 1시 0분 0초 ~ 오후 11시 59분 59초
if ($cur_hours >= 12) {
  // (12 ~ 23) 오후 시간대
  if ($cur_hours < 13) {
    //(12) 오후 12시일 때
    document.write(`오후 ${$cur_hours}시`);
  } else {
    //(13 ~ 23) 오후 1시 ~ 오후 11시
    document.write(`오후 ${$cur_hours - 12}시`);
  }
} else {
  // (0 ~ 11) 오전 시간대
  document.write(`오전 ${$cur_hours}시`);
}

var $cur_min = $today.getMinutes();
document.write(` ${$cur_min}분`);

var $cur_sec = $today.getSeconds();
document.write(` ${$cur_sec}초`);

// 1초 = 1000밀리초
var $cur_milliSec = $today.getMilliseconds();
document.write(`${$cur_milliSec}`);

document.write(`<hr />`);
// D-day 계산시 활용하는 도구 (수능 d-100)
var $cur_getTime = $today.getTime();
// 1970년 1월 1일 0시0분0초로부터 현재까지의 시간 기간을 가져옴(밀리세컨드 단위)
document.write(
  `1970년 1월 1일 0시0분0초로부터 흘러온 현재 시간 : ${$cur_getTime}`
);
// D-day 계산시, 24시간 동안 팝업 열지 않기, 사용자가 동작수행을 멈추었을 때부터 4시간 경과시 자동 로그인

document.write(`<hr />`);
// 계절별 이미지 변경하기
if ($cur_month >= 3 && $cur_month <= 5) {
  document.write(`<img src="./img/img-m.jpg" style="width:100px;">`);
} else if ($cur_month >= 6 && $cur_month <= 8) {
  document.write(`<img src="./img/img-s.jpg" style="width:100px;">`);
} else if ($cur_month >= 9 && $cur_month <= 11) {
  document.write(`<img src="./img/img-f.jpg" style="width:100px;">`);
} else {
  document.write(`<img src="./img/img-w.jpg" style="width:100px;">`);
}

// 태어난 날의 요일 정보 가져오기
var getDayByBirthDate = new Date("1979-10-04");
console.log(getDayByBirthDate);
console.log(`태어난 날의 요일 : ${getDayByBirthDate.getDay()}`);

// 태어난 날로부터 경과일을 계산하기
var now = new Date(); // 현재 날짜 획득
var birthDay = new Date("1979-10-04"); // 태어난 날짜 획득
// now - birthDay ==> 태어난 날짜로부터 값을 획득 가능

var toNow = now.getTime();
var toBirthDay = birthDay.getTime();

var passedTime = toNow - toBirthDay;
console.log(passedTime);

// 1일 = 24시간
// 1시간 = 60분
// 1분 = 60초
// 1초 = 1000밀리세컨드

var passedDate = parseInt(passedTime / (24 * 60 * 60 * 1000));
console.log(`태어난 날로부터 경과일 : D+${passedDate}`);

// 수학 객체: 일반적인 숫자형 데이터 만으로는 적용할 수 없는 다소 복잡한 결과물을 도출시 사용
document.write(`<h3>수학 객체</h3>`);
var num_01 = 300000;
var ch_standardNum = num_01.toExponential(2);
console.log(ch_standardNum); // 3.00e+5
console.log(typeof ch_standardNum); // string

var num_02 = 1234.5678;
var ch_fixedNum = num_02.toFixed(2);
console.log(ch_fixedNum);
console.log(typeof ch_fixedNum);

var num_03 = 1234.5678;
var ch_precision = num_03.toPrecision(3);
console.log(ch_precision);
console.log(typeof ch_precision);

var $num_min = Math.min(27, 35, 11, 19);
document.write(`<p>나열된 숫자 중 가장 작은 수 : ${$num_min}</p>`);
var $num_max = Math.max(27, 35, 11, 19);
document.write(`<p>나열된 숫자 중 가장 큰 수 : ${$num_max}</p>`);

// 올림, 내림, 반올림, 랜덤 숫자 뽑기(로또)
var $num = 1234.5678;
var $round = Math.round($num);
document.write(`<p>소수점 첫번째 자리에서 반올림한 값 : ${$round}</p>`);

var $ceil = Math.ceil($num);
document.write(`<p>소수점 첫번째 자리에서 올림한 값 : ${$ceil}</p>`);

var $floor = Math.floor($num);
document.write(`<p>소수점 첫번째 자리에서 내림한 값 : ${$floor}</p>`);

var $random = Math.random();
document.write(`<p>0초과 1미만의 실수를 무작위로 반환한 값 : ${$random}</p>`);

// 1 ~ 10의 값을 랜덤으로 반환 시켜야 함(올림 방식 적용)
var int_01 = Math.ceil(Math.random() * 10);
/*
    최소값: 0.0001 * 10 = 0.001 =(Math.ceil)=> 1
    최대값: 0.9999 * 10 = 9.999 =(Math.ceil)=> 10
  */
document.write(`<p>1~10의 무작위 정수 반환한 값 : ${int_01}</p>`);

// 1 ~ 10의 값을 랜덤으로 반환 시켜야 함(내림 방식 적용)
var int_02 = Math.floor(Math.random() * 10) + 1;
/*
    최소값: 0.0001 * 10 = 0.001 =(Math.floor)=> 0 =(+1)=> 1
    최대값: 0.9999 * 10 = 9.999 =(Math.floor)=> 9 =(+1)=> 10
  */
document.write(`<p>1~10의 무작위 정수 반환한 값 : ${int_02}</p>`);

// 1~46의 값을 랜덤으로 반환
var lotto_01 = Math.ceil(Math.random() * 46);
document.write(`<p>1~46의 무작위로 정수 반환한 값 : ${lotto_01}</p>`);

// shop_01.jpg ~ shop_04.jpg 이미지 중에서 랜덤값 적용된 이미지 표현
// 1 ~ 4 라는 값을 랜덤으로 받는다.

var ran = Math.ceil(Math.random() * 4);
document.write(`<img src="./img/shop_0${ran}.jpg" style="width: 60px;">`);

// 문자 객체(String) : 특정 문제 데이터를 가져와서 요구사항에 맞춰 조작
// 문자의 인덱스 번호 : 좌측으로부터 0부터 인덱스 번호의 시작
document.write(`<h3>문자 객체</h3>`);

var $str = "Have a good day";
var $charAt = $str.charAt(7); // 인덱스 번호를 기준으로 7의 자리에 작성된 문자를 추출한다.
console.log($charAt); // g

// [응용파트] 주민등록번호의 남성과 여성을 구분
// 791004-1******
var idNum = "791004-1******";
var genderNum = idNum.charAt(7);
console.log(genderNum);
if (genderNum % 2 == 0) {
  document.write(`여성 고객입니다.`);
} else {
  document.write(`남성 고객입니다.`);
}

// airbnb(@, 010, 0101234, )의 금지어
// 댓글에서 특정 욕설 찾기("삐삐삐")
var $reply_str = "뿌뿌뿌 삐삐삐 뽀뽀뽀";
var $badStr_search = $reply_str.indexOf("삐삐삐"); // 지정된 문자("삐삐삐")의 문자를 찾아서 인덱스 번호를 반환시킴
console.log($badStr_search); // 4
// 결과값이 0 이상인 경우, 해당하는 문자 있음
// 결과값이 -1인 경우, 해당하는 문자 없음
if ($badStr_search >= 0) {
  console.log("금지어가 포함되어 있습니다.");
} else {
  console.log("댓글 등록되었습니다.");
}

// 특정 문장의 마지막으로부터 찾아서 인덱스 번호를 추출
var word = "nice thank cheer up";
var searchLastWord = word.lastIndexOf("e"); // 좌측으로부터 인덱스 번호 고정. 문장의 우측으로부터 찾아가는 과정에서 가장 먼저 나온 인덱스 번호를 반환
console.log(searchLastWord); // 14

// match() 되는 문자 반환하기
var hunmin = "우리말은 중국과 달라서...";
var match_01 = hunmin.match("중국");
console.log(match_01); // ['중국', index: 5, input: '우리말은 중국과 달라서...', groups: undefined]
var match_02 = hunmin.match("호주");
console.log(match_02); // null
if (match_02 != null) {
  console.log(`당신이 검색한 결과가 있습니다.`);
} else {
  console.log(`당신이 검색한 결과가 없습니다.`);
}

// replace(바꿀문자, 새문자)
// 5,000(문자형 데이터) => Number(5000(문자형 데이터)) => 5000(숫자형 데이터) ====> 연산 가능
// 5000 => 5,000

var buyPrice = "5,000";
var numBuyPrice_01 = Number("5,000");
console.log(numBuyPrice_01); // NaN

var numBuyPrice_02 = Number(buyPrice.replace(",", "")); // ","를 찾아서 바꿀위치에 아무것도("") 넣지마~!
console.log(numBuyPrice_02);

//[실습문제]
// 문구점에서 샤프 5개(개당 가격 1,000원)와 스케치북 2개(개당 가격 3,000원)를 구입
// 총 구매 합계를 구하시오.
// [최종 결과] 현재 총 구입금액은 11000원 입니다.
var sharp = "1,000";
var sketch = "3,000";

// ??

// var total = ?
// document.write(`[최종 결과] 현재 총 구입금액은 ${total}원 입니다.`);


// "2,000,000"
let $num1 = "2,000,000";
let $ch_num1 = $num1.replace("," , "");
console.log($ch_num1);

let $ch_num3 = $num1.replace(/,/g,"");
console.log($ch_num3); //2000000

/* 
[정규식 표현] 
/,/g
// : ""
/,/ : ","
g: global의 약자 >>> 전역 검색(동일하게 구성된 모든것을 검색)
*/

let bad_sentence = "삐삐삐, 뿌뿌뿌, 삐삐삐";
console.log(bad_sentence.replace(/삐삐삐/g,"@@@"));




// 문자 데이터로부터 특정 문자를 추출할 때 사용되는 방법,

// substr(a,b)
let _txt = "프론트엔드 주말과정";
// substr(인덱스 번호, 지정한 인덱스 번호로부터 자를 문자의 개수)

let _select_txt = _txt.substr(3,2);
console.log(_select_txt); // 엔드
let _sel_txt = _txt.substr(5,4);
console.log(_sel_txt); // 주말과

// slice(a,b)
// slice(a, b): a 시작되는 인덱스 번호로부터 b 인덱스 번호 이전까지만 추출
let slice_txt = _txt.slice(1,3);
console.log(slice_txt);
let slice_last = _txt.slice(-1);
console.log(slice_last); // 맨 머자먹 한 문자만 추출
let slice_last2 = _txt.slice(-2);
console.log(slice_last2); // 맨 머자먹 두 문자만 추출

let name = "홍길동"; // 홍길*
console.log(name.slice (0,2) + "*");

// 문자 데이터의 전체 문자 개수를 가져오는 length속성
let address = "서울시 강남구 역삼동";
let address_length = address.length;
console.log(address_length) // 11(공백포함 - number)

// 사용자가 휴대폰 번호를 입력했는데, 개인정보상 맨 뒷자리 4개만 "****"로 표기해야 한다면
let phNumber1 = "01012345678"; // "0101234****"
let phNumber_substr1 = phNumber1.substr(0,7);
console.log(phNumber_substr1 + "****");
let phNumber_slice1 = phNumber1.slice(0,7);
console.log(phNumber_slice1 + "****");

// 사용자의 입력 형태가 여러가지일 경우
// 0191234567(10), 01012345678(11), 010-1234-5678(13), +0082 1012345678(15)
let phNumber2 = "+00821012345678"; // +0082101234****
let phNumber_substr2 = phNumber2.substr(0, phNumber2.length - 4)
console.log(phNumber_substr2 + "****");

// [중간실습1] "1234-5678-****-****" 문자로 변경
let card1 = "1234-5678-9876-5432";
let card_recipe1 = card1.substr(0,card1.length - 9) + "****-****";
console.log(card_recipe1);

// [중간실습2] "1234-5678-9876-5432" >>>  "1234-****-****-5432" 문자로 변경
let card2 = "1234-5678-9876-5432";
let card_recipe2 = card2.slice(0,5) + "****-****" + card2.slice(14,19);
// let card_recipe2 = card2.substr(0,5) + "****-****" + card2.substr(14,15);
console.log(card_recipe2);


// split("특정문자"): 특정 문자를 기준으로 배열 데이터(["데이터1", "데이터2", ...])로 분리시킴
let card3 = "1234-5678-9876-5432";
let card_split = card3.split("-");
console.log(card_split);
console.log(card_split[0]);

card_recipe3 = card_split[0] + "****-***-" + card_split[3];
console.log(card_recipe3);

// 변수명1.concat(변수명2): 변수명 1에 변수명 2를 결합시킨다.
let snack1 = "오징어";
let snack2 = "땅콩";
let rst_concat = snack1.concat(snack2);
console.log(rst_concat);

// 변수명.trim(): 변수명에 존재하는 앞뒤의 공백을 제거한다. 검색창 또는 입력창을 갖고 있는 곳은 무조건 달아준다
let searchWord = "                경복궁 이집트               ";
console.log(searchWord.length);
let trimWord = searchWord.trim();
console.log(trimWord);
console.log(trimWord.length);
console.log(trimWord.split(" "));

// 문자 객체에서 반드시 기억해야 할 부분
/*
indexOf ("찾을 문자")   >>>   -1 일 경우, 찾는 문자 없음 / 0 ~ 양의 정수 인덱스번호: 찾을 문자가 존재
replace ("바꿀문자","새문자")
substr ("인덱스번호,자를개수")
split ("특정문자")   >>>   "특정문자"를 기준으로 배열 데이터화 시킴
trim ()   >>>   전후 공백 제거
length   >>>   문자 데이터의 길이를 측정(문자의 개수) !== byte(문자의 용량)
*/