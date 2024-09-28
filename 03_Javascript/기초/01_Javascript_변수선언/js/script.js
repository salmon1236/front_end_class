//  외부 자바스크립트
document.write("Hello Java script");
//  주석처리
//  한 줄 주석처리1
//  한 줄 주석처리2

/*
여러 줄 주석처리
여러 줄 주석처리
여러 줄 주석처리
*/

//  [자바스크립트에서 제공하는 팝업창 형태 - alert(경고창), prompt(입력창), confirm(확인창)]

//  #1. 경고창 : 경고 메시지를 제공
// alert("이곳은 경고창 입니다.");
//  개발자가 설정해 놓은 범위를 벗어났을 때 경고창을 띄운다

//  #2. 입력창 : 무언가에 대한 질문에 대한 답을 작성할 수 있는 입력창을 제공
// prompt("당신은 하루에 얼마나 걷나요?", "10,000");
//  prompt 라는 입력창에 사용자가 입력을 한 값을 받아옴, 변수에 담아서 저장을 해 활용함. 문자형 데이터로 가져온다.

//  #3. 확인창 : 확인과 취소라는 버튼이 존재
// confirm("정말로 회원 탈퇴 하시겠습니까?");
//  확인이라는 버튼을 눌렀을 때 ==> true
//  취소라는 버튼을 눌렀을 때 ==> farse

//  ======================================

//  #4. console.log(데이터) :
console.log("콘솔창에서 확인");
var myFavFruit = "키위";
console.log(myFavFruit);
console.log("오늘의 요리 : 파스타");
//  하나의 메모리에서 정확한 데이터값이 들어왔는지를 확인하고자 함

//  ======================================

//  #5. 변수 ==> 그릇. 그릇의 내용물(데이터)은 여러가지를 담을 수 있음
//  변수의 구성
// var 변수명 = 변수값; (various => 다양한)
// let 변수명 = 변수값; (let => 허용하다)
// const 변수명 = 변수값; (const => 건물)
document.write("<h3>변수</h3>");
var order = "자장면";
document.write("오늘 선택한 메뉴-1 : ", order, "<br />");
order = "송이덮밥";
document.write("오늘 선택한 메뉴-2 : ", order, "<br />");
// document.write("오늘 선택한 메뉴-3 : ", order3, "<br />");

//Uncaught ReferenceError: order3 is not defined

//  변수의 내용을 출력한다는 의미는 최종적으로 선언된 값을 출력한다는 것과 동일한 개념. 출력 시점마다 다른 출력의 결과물을 표현할 수 있다.

//  게임 캐릭터 이름 부여하기
var myHeroName = "불꽃 나이트";
myHeroName = "토마토 재배자";
document.write("이름 : ", myHeroName, "<br />");

//  카톡 채팅창에서 문장 작성하기(소켓 통신 - realtime databasse에서 연동)
var myNickName = "신의철";
var msg = "오늘 뭐 먹지?";
document.write(myNickName + " : " + msg, "<br />");

//  #6. 변수명 선언시 주의사항(반드시 기억할 것)
document.write("<h3>변수명 선언시 주의사항(반드시 기억할 것)</h3>");

//  #6-1. 대소문자를 구분하여 작성한다.
var age = 10;
// document.write(Age, "<br />");
//Uncaught ReferenceError: Age is not defined
document.write(age, "<br />");

//  #6-2. 변수명의 첫글자는 '$', '_', '영문(한글)'만 작성할 수 있음(숫자 불가)
// var 12num = 12;
// document.write(12num, "<br />");
//Uncaught SyntaxError: Invalid or unexpected token
var $12num = 12;
document.write($12num, "<br />");
var _12num = 12;
document.write(_12num, "<br />");
var 포켓몬 = "파이리";
document.write(포켓몬, "<br />");

//  #6-3. 변수명 내부(첫글자 제외)에는 '$', '_', '영문(한글)', 숫자만 작성할 수 있음(사칙연산자 '+', '-', '*', '/', '%' + '!', '&', '^', '&', '@'를 포함한 특수문자 모두 제외)
var num32 = 32;
document.write(num32, "<br />");

// var orange-1 = "오렌지 박스";
// document.write(orange-1, "<br />")
//Uncaught SyntaxError: Unexpected token '-'

// var food1 food2 ="갈비탕";
// document.write(food1 food2, "<br />")
//Uncaught SyntaxError: Unexpected identifier 'food2'

var food3,
  food4 = "해장국";
document.write(food3, "<br />"); //undefined
document.write(food4, "<br />"); //해장국

var food5, food6;
food5 = "볶음밥";
food6 = "짬뽕";
document.write(food5, "<br />");
document.write(food6, "<br />");

//  #6-4. 변수명에는 자바스크립트 예약어를 사용할 수 없음
var document = "문서 공간";
document.write(document, "<br />"); //[object HTMLDocument]

var _document = "문서 공간";
document.write(_document, "<br />");

//  #6-5. 카멜기법(userName)으로 변수 선언, 파스칼기법(UserName)으로 변수 선언
var userName = "홍길동1";
document.write(userName, "<br />");
var UserName = "홍길동2";
document.write(UserName, "<br />");

//  ==========데이터의 형태(type)===========
//  #7. 문자형 데이터(string): 변수값이 '데이터(작은 따옴표)' 또는 "데이터(큰 따옴표)" 로 감싸진 형태를 지칭
var korSoccer = "손흥민";
var korSoccerShootingNum = "23";
document.write(korSoccer + "의 득점수" + korSoccerShootingNum, "<br />");
document.write(korSoccerShootingNum + 1 + "<br />"); //연산 불가

//  올해의 연도
var thisYear = "2024";

//  내년의 연도
var nextYear = thisYear + 1; //"2024" + 1 = "20241"
document.write(nextYear, "<br />");

var nextYearNum = Number(thisYear) + 1; //2024 + 1 =2025
document.write(nextYearNum, "<br />");

//  tag를 포함한 문자형 데이터를 브라우저에 표현하기
var $str_tit = "<h3 class='tit'>카카오프렌즈</h3>";
document.write($str_tit, "<br />");
var $str_img = "<img src='./img/kakao.gif' alt='프렌즈 움짤'class='strImg' />";
document.write($str_img, "<br />");

// 실습 문제 (문자형 데이터) img_1.jpg를 브라우저에 출력해주세요.(단, 300*200의 공간에 배경 이미지(bgi:url(파일 경로 선언))로 넣을 것)
var $str_bg =
  "<div class='strBg' style='background-image:url(./img/img_1.jpg)'></div>";
document.write($str_bg, "<br />");

//  string(숫자형 데이터의 변수명),
//  숫자형 데이터의 변수명.toString()
//  : 숫자형 데이터를 문자형 데이터로 변경

//  #8. 숫자형 데이터
//  형변환
//  Number(문자형 데이터): 문자형 데이터 => 숫자형 데이터
//  parseInt(문자형 데이터): 문자형 데이터 => 정수 숫자형 데이터
//  parseFloat(문자형 데이터): 문자형 데이터 => 실수 숫자형 데이터

//  #8-1. Number("3.14")
var $no_01 = Number("3.14");
document.write($no_01, "<br />");
console.log("3.14"); //문자형은 검은색
console.log($no_01); //숫자형은 파란색

//  #8-2. parseInt("3.14") 소숫점 이하 버림
var $no_02 = parseInt("3.14");
document.write($no_02, "<br />");
console.log($no_02);

//  #8-3. parseFloat("3.14")
var $no_03 = parseFloat("3.14");
document.write($no_03, "<br />");
console.log($no_03);

console.log(typeof "3.14"); //string
console.log(typeof $no_03); //number

//  #9. 논리형 데이터(boolean): true or false
//  두 수의 비교
var thanNum = 24 < 13;
console.log(thanNum); //false

var boolTxt = true;
console.log(boolTxt); //true

//  ex) 페이스북 가입연령(만 13세 이상)
var kidAge = 12;
var facebookRegisterPermit = kidAge >= 13; //12 >= 13
console.log("페이스북 가입 가능 여부 :", facebookRegisterPermit);

//  카톡에 어떠한 값도 입력하지 않은 상태에서 전송을 클릭했다면?
var bool_01 = Boolean(""); //구글에서는 문자형 데이터.trim() ==> 전후 강제 공백을 제거한다.
console.log(bool_01); //false

var bool_02 = Boolean("솜사탕");
console.log(bool_02); //true

//  #10. undifined: 변수명만 존재하고 어떠한 데이터의 형태도 대입하지 않은 경우
var boul;
console.log(boul); //undefined

//  #11. null: 처음부터 유효한 값이 아니라고 정의된 경우, 값이 없음을 선언한 상태
var noValue = null;
console.log(noValue); //null

// #12. typeof 변수명 => 변수명에 대한 타입을 확인가능
console.log(typeof true); //boolean
console.log(typeof 2024); //number
console.log(typeof "솜사탕"); //string
console.log(typeof null);
