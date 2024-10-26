// 실습1
let divElement_1 = document.querySelector("#test_01");
let imgElement_1 = document.createElement("img");
imgElement_1.src = "./img/smurfs_img.jpg";
imgElement_1.style.width = "160px";
divElement_1.appendChild(imgElement_1);


// 실습2

// #1. 선택자
let smurfsAdventure = document.querySelector("#test_02");

// #2. 함수문
let _insertImg_2 = function(){

  let _funcImg_2 = document.createElement("img");

  _funcImg_2.setAttribute("src", "./img/smurf_movie.png");
  _funcImg_2.setAttribute("alt", "스머프의 모험");
  _funcImg_2.style.width = "200px";

  smurfsAdventure.appendChild(_funcImg_2);
}
// 함수 실행
_insertImg_2();


// 실습3

// #1. 선택자
let smurfMovies =document.querySelector("#text_03");
// #2. 함수문
let _insertImg_3 = function(){
  
  let _funcImg_3 = document.createElement("img")
  _funcImg_3.setAttribute("src", "./img/smurf_movie.png");
  _funcImg_3.setAttribute("alt", "스머프의 모험");
  _funcImg_2.style.width = "200px";
}
// 함수 실행
_insertImg_3();

// 실습4
// 실습5


//[ 과제 ]던전 입장시 멤버들 구성됨 => 메일에 코드와 콘솔창 결과 이미지 캡쳐해서 보내주세요~~!!
//(콘솔창에 출력할 내용)"닉네임(직업 - level)님이 입장하셨습니다."
//2차 배열 패턴["닉네임", "직업", level]
var dungeon1 = [
  ["불타는 용병", "기사", 56],
  ["얼음 마법사", "마법사", 47],
  ["암흑 도적단장", "도적", 51],
  ["블랙 요정", "다크엘프", 49],
];
function enterance1() {
  // console.log(....);
}
//반복하여 호출