document.write("<h2>배열객체</h2>")
document.write("<p>필요한 만큼의 데이터값(들)을 하나의 변수명에 저장할 수 있음</p>")
// 배열데이터와 객체 데이터의 공통점: 추가 생성이 가능하기 때문에 무한으로 데이터를 담을 수 있음
// 배열데이터와 객체 데이터의 차이점: 
// 객체 데이터: key(분리공간의 항목이름)와 value(각 항목마다 담긴 데이터 또는 함수), 변수명.name을 호출하면 name에 담긴 데이터를 가져올 수 있음

let hero = {
  name: "홍길동",
  word: "아버지를 아버지라...",
  action: function(){
    return "구름타고 슝~~";
  },
}

console.log(hero);
console.log(hero.name);
console.log(hero.action());

// 배열 데이터: 각 데이터마다 지정된 순서가 존재, 각 순서마다 인덱스 번호가 붙는다. 0 -> 1 -> 2 -> ...   >>>   각 항목의 데이터 추출 시 증감연산자(++)로 데이터 추출이 가능
let fruits = ["사과", "오렌지", "포도"]
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 배열 패턴 구성: [이미지, 타이틀, 가격정보, 판매자 이름]
let _kakao_arr = ["kakao.jpg", "카카오 스티커", "1500", "라이언"];
console.log(_kakao_arr);
console.log(_kakao_arr.length);
console.log(_kakao_arr[0]);
console.log(_kakao_arr[1]);
console.log(_kakao_arr[2]);
console.log(_kakao_arr[3]);

// i 라는 변수를 활용해서 증감연산자로 사용하여 값을 추출
let i = 0;
console.log(_kakao_arr[i]); // kakao.jpg
i++; // i = 1
console.log(_kakao_arr[i]); // 카카오 스티커
i++; // i = 2
console.log(_kakao_arr[i]); // 1500
i++; // i = 3
console.log(_kakao_arr[i]); // 라이언

// 배열 데이터를 활용한 요일 정보 가져오기(일요일: 0, 월요일: 1, ... 토요일: 6)
let _curentDate = new Date();
let _day = _curentDate.getDay();
console.log(_day);

let yoil_arr = ["일", "월", "화", "수", "목", "금", "토"];
console.log(`오늘은 ${yoil_arr[_day]}요일 입니다.`);

let img_arr = ["sun", "mon", "tues", "wednes", "thurs", "fri", "satur"];
document.write(`<img src="./img/${img_arr[_day]}day.gif" alt="요일 이미지">`);

// 배열 데이터의 매서드(내장 함수)
// 배열데이터.push(데이터): 배열데이터의 맨 마지막 자리에 데이터를 추가한다
// 배열데이터.pop(): 배열데이터의 마지막 자리의 데이터를 삭제한다
// 배열데이터.shift(): 배열데이터의 첫번째 자리의 데이터를 삭제한다
// 배열데이터.unshift(데이터): 배열데이터의 첫번째 자리의 데이터를 추가한다

let runningManMember = [
  "유재석", 
  "김종국", 
  "하하", 
  "송지효", 
  "지석진", 
  "양세찬", 
  "전소민"
];
console.log(runningManMember);

runningManMember.push("개리");
console.log(runningManMember);

runningManMember.pop();
console.log(runningManMember);

runningManMember.shift();
console.log(runningManMember);

runningManMember.unshift("박명수");
console.log(runningManMember);

//  배열 데이터끼리 결합하는 메서드: concat()
document.write("<h4>배열 데이터끼리 결합하는 메서드: concat()</h4>")
let chars = [
  "사과",
  "오렌지", 
  "포도"];
let nums = [1, 2, 3];
let numsChars = nums.concat(chars);
document.write(`nums가 chars를 결합한 값: ${numsChars}`);
console.log(numsChars);
document.write(`<br/>`);

let charsNums = chars.concat(nums);
document.write(`chars가 nums를 결합한 값: ${charsNums}`);
console.log(charsNums);
document.write(`<br/>`);

//  원본 데이터의 변경 없음
console.log(chars);
console.log(nums);


// 배열 내부 데이터를 합치는 메서드: join() 하나의 문자형 데이터로 구성

document.write("<h4>배열 내부 데이터를 합치는 메서드: join()</h4>");
let mavelHero = [
  "엔트맨", 
  "스파이더맨", 
  "헐크"
];
let string1 = mavelHero.join(); // 구분자가 없는 경우
console.log(string1);

let string2 = mavelHero.join("/"); // 구분자가 있는 경우
console.log(string2);
console.log(typeof string2);

// [실습]
let movieName = [
  "슈렉", 
  "겨울왕국", 
  "장화신은애옹쓰"
];
// 앤트맨~스파이더맨~헐크~슈렉~겨울왕국~장화신은애옹쓰
// concat() 결합하고
// join() 문자형 데이터로 합친다

let movieAll1 = mavelHero.concat(movieName);
console.log(movieAll1);
let string3 = movieAll1.join("~");
console.log(string3);

// 방법 1.
let heroMovie = mavelHero.concat(movieName);
let str_rst_1 = heroMovie.join("~");
console.log(str_rst_1);

// 방법 2. 체이닝 기법: 여러가지 메서드 또는 함수를 이어서 적용하는 방법
let str_rst_2 = mavelHero.concat(movieName).join("~");
console.log(str_rst_2);

// 배열데이터로 다시 분리? split("~")
// https://comic.naver.com/webtoon/detail?titleId=812354&no=91
let webToonUrl = "https://comic.naver.com/webtoon/detail?titleId=812354&no=91"
let webtoonInfo = webToonUrl.split("?");
console.log(webtoonInfo);
let webtoonInfoDetail = webtoonInfo[1].split("&");
console.log(webtoonInfoDetail);

let webtoonInfoDetailTit = webtoonInfoDetail[0].split("=");
console.log(webtoonInfoDetailTit[1]);

let webtoonInfoDetailNoId = webtoonInfoDetail[1].split("=");
console.log(webtoonInfoDetailNoId[1]);

// api 로 호출   >>>   A 개발자: 가격 정보 보내준다
// api 로 호출   >>>   B 개발자: 상품 이름 보내준다
// 배열 데이터 내에서 원하는 위치에 데이터를 추가 / 삭제하는 splice() 메서드

document.write("<h3>배열 데이터 내에서 원하는 위치에 데이터를 추가 / 삭제하는 splice() 메서드</h3>");
document.write("<h4>[인수가 한개인 경우] 배열변수명.splice(인덱스번호): 배열 데이터의 지정한 인덱스 번호로부터 마지막 인덱스까지 잘라서 반환</h4>");
let _number = [
  1,
  2,
  3,
  4,
  5
];
let _oneSplice = _number.splice(2);
console.log(_oneSplice); // [3, 4, 5]
console.log(_number); // [1, 2]

document.write("<h4>[인수가 두개인 경우] 배열변수명.splice(인덱스번호, 자를 갯수): 배열 데이터의 지정한 인덱스 번호로부터 자를 갯수를 잘라서 반환</h4>");
let _study = [
  "HTML", 
  "CSS3", 
  "JAVASCRIPT", 
  "SQL"
];
let _twoSplice = _study.splice(1, 2);
console.log(_twoSplice); // ['CSS3', 'JAVASCRIPT']
console.log(_study);

document.write("<h4>[인수가 세개인 경우] 배열변수명.splice(인덱스번호, 자를 갯수, 추가 데이터): 배열 데이터의 지정한 인덱스 번호로부터 자를 갯수를 잘라서 반환하고 그 자리에 추가할 데이터를 넣는다. (추가 대상은 원본데이터다)</h4>");

let _color = [
  "red", 
  "orange", 
  "yellow", 
  "green", 
  "blue"
];
let _threeSplice = _color.splice(2, 2, "mint");
console.log(_threeSplice); // ['yellow', 'green']
console.log(_color); // ['red', 'orange', 'mint', 'blue']

document.write("<h4>[인수가 세개 이상인 경우] 배열변수명.splice(인덱스번호, 자를 갯수, 추가 데이터1, 추가 데이터2, ...): 배열 데이터의 지정한 인덱스 번호로부터 자를 갯수를 잘라서 반환하고 그 자리에 추가할 데이터를 넣는다. (추가 대상은 원본데이터다)</h4>");
let _device = [
  "아이폰",
  "아이패드", 
  "애플워치"
];
let _threeMoreSplice = _device.splice(1, 1, "갤럭시S24", "갤럭시 10 Tab")
console.log(_device); // ['아이폰', '갤럭시S24', '갤럭시 10 Tab', '애플워치']'

// 추가만 할 경우
let _device_plus = [
  "아이폰",
  "아이패드", 
  "애플워치"
];
let _threeMoreSplice_plus = _device_plus.splice(2, 0, "갤럭시S24", "갤럭시 10 Tab")
console.log(_device_plus); // ['아이폰', '아이패드', '갤럭시S24', '갤럭시 10 Tab', '애플워치']

// [실습 - splice() 메서드 활용]
// 우리반에 학생이 5명 존재("영희", "수현", "하늘", "하나", "덕선");
// 두명이 전학을 갔습니다. ("하늘", "하나")
// 한명이 전학을 왔습니다. ("보검")   >>>   하늘과 하나가 빠진 자리에 들어간다.
// 최종 "보검" 을 출력
let myClass = [
  "영희", 
  "수현", 
  "하늘", 
  "하나", 
  "덕선"
];
let myClass_out = myClass.splice(2,2,"보검");
console.log(myClass[2]);

// homework - splice() 메서드 활용
// ["곰인형", "꽃다발", "올영쿠폰"]   >>>   ["곰인형", "꽃다발", "스벅카드", "향수", " 올영쿠폰"] 추가

let ex_1 = [
  "곰인형",
  "꽃다발",
  "올영쿠폰"
];
let ex_1_first = ex_1.splice(2,0,"스벅카드", "향수");
console.log(ex_1);


// slice() 메서드: 기존 데이터를 변경하지 않고 데이터만 추출하는 메서드
document.write("<h4>[인수가 한개인 경우] 배열변수명.slice(인덱스 번호): 배열 데이터의 지정한 인덱스 번호로부터 마지막 인덱스 번호의 값을 모두 가져온다</h4>");
let _colorTxt = [
  "레드", 
  "오렌지", 
  "옐로", 
  "그린"
];

let _oneSlice = _colorTxt.slice(2);
console.log(_oneSlice); // ['옐로', '그린']
console.log(_colorTxt); // ['레드', '오렌지', '옐로', '그린']   >>>   원본 데이터 변경 없음

document.write("<h4>[인수가 두개인 경우] 배열변수명.slice(인덱스 번호1, 인덱스 번호2): 배열 데이터의 지정한 인덱스 번호1로부터 인덱스 번호2 직전까지의 데이터를 가져온다</h4>");
let _twoSlice = _colorTxt.slice(1,3);
console.log(_twoSlice); // ['오렌지', '옐로']
console.log(_colorTxt); // ['레드', '오렌지', '옐로', '그린']   >>>   원본 데이터 변경 없음

/* 
[splice()   vs   slice()]
공통점: 기존 배열 데이터로부터 추출하는 과정은 유사
차이점: 
  - splice(): 원본 데이터의 변경 원인(삭제)   >>>   원본 데이터가 중심
  - slice(): 원본 데이터의 변경 없음   >>>   잘라낸 데이터가 중심
*/









// 반복문을 활용한 배열 데이터의 나열
let petImg = [
  "img_01.jpg",
  "img_02.jpg",
  "img_03.jpg",
  "img_04.jpg"
];

for(let i =0 ; i < petImg.length; i++){
  console.log(i);
  console.log(petImg[i]);
  document.write(`<img src="./img/${petImg}">`);
}