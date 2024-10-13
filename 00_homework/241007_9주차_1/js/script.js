// #1. 오늘 0000년00월00일 요일 시:분:초 순으로 날짜 객체로부터 받아와서 콘솔창에 출력 (추천 : 요일정보는 배열데이터를 활용할 것)
let now = new Date();

let daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0');
let date = String(now.getDate()).padStart(2, '0');
let day = daysOfWeek[now.getDay()];
let hours = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');
let seconds = String(now.getSeconds()).padStart(2, '0');


console.log(`${year}년${month}월${date}일 ${day}요일 ${hours}:${minutes}:${seconds}`);


//#2. "첫째 아기 돼지는 움막을 지었고, 둘째 아기 돼지는 나무집을 지었고, 막내 아기 돼지는 벽돌집을 지었습니다.";
//객체 배열을 활용하여 위 문장을 완성하시오. (첫째 아기 돼지, 움막, 둘째 아기 돼지, 나무집, 막내 아기 돼지, 벽돌집  ==>  각 데이터로 구성할 것! 해당 항목은 key를 만들어서 각각 value값으로 넣어서 활용할 것)
// document.write(`<h3>과제 2</h3>`);
// let pig = {
//   _first: "첫째 아기 돼지",
//   _seconds: "둘째 아기 돼지",
//   _third: "막내 아기 돼지",
//   _house: "벽돌집"
// };
// console.log(`${_first}는 움막을 지었고, ${_seconds}는 나무집을 지었고, ${_third}는 ${_house}을 지었습니다.`);


//#3. 빈 배열 데이터를 만드시오. 순차적으로 배열 데이터 내에 좋아하는 과일 5개를 for문을 활용하여 하나씩 추가해 주시기 바랍니다.
/*
const $fav_arr = [];
const $fruit = ["사과", "오렌지", "바나나", "포도", "자두"];

for문을 반복하는 과정에서 console.log($fav_arr)로 출력하되 하나씩 추가되는 과정을 모두 출력하시오.
*/
document.write(`<h3>과제 3</h3>`);
let _fav_arr = [];
let _fruit = [
  "사과", 
  "석류", 
  "배", 
  "망고", 
  "샤인머스캣"
];

for(let i = 0; i < _fruit.length; i++){
  console.log(i);
  console.log(_fruit[i]);
}

//#4. 다음과 같이 데이터를 변경하시오. (splice 메서드 활용)
//["HTML", "CSS", "JAVASCRIPT", "JQUERY"];  ===>  ["HTML", "WEB", "JAVASCRIPT", "JQUERY"]; 
document.write(`<h3>과제 4</h3>`);
const _study = [
  "HTML", 
  "CSS", 
  "JAVASCRIPT", 
  "JQUERY"
];
const _webStudy = _study.splice(1, 1, "WEB");
console.log(_study);


//#5. 다음과 같이 배열 사이에 새로운 데이터를 넣으세요. (splice 메서드 활용 - 힌트 : 개수는 0개)
//["red", "yellow", "green", "blue"];  ===>  ["red", "orange", "yellow", "green", "blue"];
document.write(`<h3>과제 5</h3>`);
const _color = [
  "red", 
  "yellow", 
  "green", 
  "blue"
];
const _colorPlus = _color.splice(1, 0, "orange");
console.log(_color);



//#6. 다음과 같이 배열 데이터를 변경하세요.  (splice 메서드만 활용 - 힌트 : 개수는 0개)
//["korea", "USA", "Brazil", "France"]; ===> ["korea", "Japan", "USA", "Brazil", "France", "China"]
document.write(`<h3>과제 6</h3>`);
const _nation = [
  "korea",
  "USA",
  "Brazil",
  "Farnce"
];
const _nationPlus = _nation.splice(1, 0, "japan") + _nation.splice(5, 0, "china");
console.log(_nation);


//#7. 다음과 같이 배열 데이터를 추출하시오 (slice 메서드 활용)
//["red", "yellow", "green", "blue"];  ===> ["yellow", "green"]
document.write(`<h3>과제 7</h3>`);
const _slice_color = [
  "red", 
  "yellow", 
  "green", 
  "blue"
];
const _slice_color_Txt = _slice_color.slice(1, 3);
console.log(_slice_color_Txt);

//#8. 다음과 같이 배열 데이터를 추출하시오 (slice() 메서드 활용 + push() + join())
//["red", "yellow", "green", "blue"];  ===> ["yellow", "blue"]
document.write(`<h3>과제 8</h3>`);




//#9. 문자 데이터 "2024-10-06"에서 "20241006"으로 변경하시오. (아래 방법 중에서 선택하여 적용하시오)
document.write(`<h3>과제 9</h3>`);
const Date_2 = "2024-10-06"
//방법1 : split() 메서드 활용하여 join() 메서드 적용하기

//방법2 : replace() 메서드 활용하기
