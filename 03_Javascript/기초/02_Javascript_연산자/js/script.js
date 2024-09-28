document.write("<h2>연산자</h2>");
/*
※ 산술 연산자(+, -, *, /, %)
※ 문자 결합 연산자(문자 데이터 + 문자 데이터 => 문자형 데이터 / 문자 데이터 + 숫자 데이터 => 문자형 데이터)
※ 대입 연산자(var 변수명 = 변수값)
※ 복합 대입 연산자(+=, -=, *=, /=, %=)
※ 증감 연산자(++, --)
※ 비교 연산자(<, >, <=, >=, !=, ==, !==, !===)
※ 논리 연산자(||, &&, !)
*/

//  #1. 산술연산자: 무조건 숫자형 데이터만 가능
document.write("<h3>산술 연산자</h3>");
var $num_01 = 12;
var $num_02 = 5;

var rst_01 = $num_01 + $num_02;
document.write("더한값 : ", rst_01, "<br />");
var rst_02 = $num_01 - $num_02;
document.write("뺀 값 : ", rst_02, "<br />");
var rst_03 = $num_01 * $num_02;
document.write("곱한 값 : ", rst_03, "<br />");
var rst_04 = $num_01 / $num_02;
document.write("나눈 값 : ", rst_04, "<br />");
var rst_05 = $num_01 % $num_02;
document.write("나눈 나머지 값 : ", rst_05, "<br />");

// ■ 남성과 여성을 구분하는 선언
var gender = 1;
document.write(gender % 2, "<br />");
//  gender % 2 의 결과값이 1이라면 남성 / 0 이라면 여성
// ■ airbnb에서 게스트(2xxxxx) / 호스트(1xxxxx)

//  #2. 문자 결합 연산자: 문자형 + 문자형 => 문자형 / 문자형 + 숫자형 => 문자형
var string_01 = "1200";
var string_02 = "2400";
var number_01 = 1200;

var sum_str = string_01 + string_02;
console.log(sum_str);
console.log(typeof sum_str);

var sum_str_multi = string_02 + number_01;
console.log(sum_str_multi);
console.log(typeof sum_str_multi);

var $str_01 = "빙그레 바나나우유 ";
var $num_01 = 1;
var $num_02 = 1;
var $result = $str_01 + ($num_01 + $num_02);
console.log($result, "개");
//  2 + 3 * 4 = 14
//  (2 + 3) * 4 = 20
//  (): 우선 결합

//  #3. 대입 연산자 / 복합 대입 연산자
//  #3-1. 대입 연산자

var first= "홍길동";
var second = first;
var third = second;

//  #3-2. 복합 대입 연산자
var _no_01 =24;
var _no_02 =8;
_no_01 += _no_02; //
_no_01 += _no_02; // _no_01 = _no_01 + _no_02 =>[해석] 24 + 8 = 32 / _no_01 = 32 (+= 복합대입연산자로 변경된 값)
console.log(_no_01); // 32

_no_01 -= _no_02; // _no_01 = _no_01 - _no_02 =>[해석] 32 - 8 = 24/ _no_01 = 24 (-= 복합대입연산자로 변경된 값)
console.log(_no_01); // 24

_no_01 *= _no_02; // _no_01 = _no_01 * _no_02 =>[해석] 24 * 8 = 192/ _no_01 = 192 (*= 복합대입연산자로 변경된 값)
console.log(_no_01); // 192

_no_01 /= _no_02; // _no_01 = _no_01 / _no_02 =>[해석] 192 / 8 = 24 / _no_01 = 24 (*= 복합대입연산자로 변경된 값)
console.log(_no_01); // 24

_no_01 %= _no_02; // _no_01 = _no_01 % _no_02 =>[해석] 24 %  8 = 0 / _no_01 = 0 (%= 복합대입연산자로 변경된 값)
console.log(_no_01); // 0

// 복합대입연산자 문자의 연속성에 대한 결합
var _txt = "A";
console.log(_txt);
_txt += "B"; //_txt = _txt + "B" ==> "A" + "B" = "AB"
console.log(_txt);
_txt += "C"; //_txt = _txt + "C" ==> "AB" + "C" = "ABC"
console.log(_txt);

// 복합대입 연산자를 활용한 통합주소의 결합(택배주소)
var adress1 = "서울시 서초구 강남대로 123 / ";
var adress2 = "메가스터디 빌딩 3층 1호";
var clientName = "<h3>(수신자: 궭뛟뜖)</h3>";

adress1 += adress2 ;
console.log(adress1);
adress1 += clientName;
console.log(adress1);
document.write(adress1,"</br>");

//복합대입연산자를 활용한 테이블 구성하기(<table>~<tr>~<td> : 1행 3열)
var i ="<table border='1'>";
i += "<tr>";
i += "<td> 1 </td>";
i += "<td> 2 </td>";
i += "<td> 3 </td>";
i += "</tr>";
i += "</table>";

document.write(i);
console.log(i);

//  복합대입연산자를 활용한 이미지 박스 구성하기

{/* <div class='frame'>
  <div class='box'>1</div>
  <div class='box'>2</div>_
  <div class='box'>3</div>
  <div class='box'>4</div>
</div> */}

var product = "";
product += "<div class='frame'>";
product += "<div class='box'>1</div>";
product += "<div class='box'>2</div>";
product += "<div class='box'>3</div>";
product += "<div class='box'>4</div>";
product += "</div>";

document.write(product);
console.log(product);

//  실습) 복합대입연산자를 활용한 1~10까지 더한 최종 값을 화면에 표현 하시오. 최종값 = 55
var _no = 1;
_no += 1;
_no += 2;
_no += 3;
_no += 4;
_no += 5;
_no += 6;
_no += 7;
_no += 8;
_no += 9;
_no += 10;
document.write("1~10까지 더한 최종 값", _no, "<br />")
console.log(_no)

//  #4. 증감 연산자
//  증가 연산자(1씩 더한다): ++변수명, 변수명++
//  감소 연산자(1씩 빼준다): --변수명, 변수명--

var product_num = 12; //수량의 초기값
document.write('A 상품의 개수 : ' + product_num + '개', "<br />")

//  장바구니에서  + 버튼을 1회째 클릭했다면
product_num++;
document.write('A 상품의 개수 : ' + product_num + '개', "<br />")

//  장바구니에서  + 버튼을 2회째 클릭했다면
product_num++;
document.write('A 상품의 개수 : ' + product_num + '개', "<br />")

//  장바구니에서  - 버튼을 1회째 클릭했다면
product_num--;
document.write('A 상품의 개수 : ' + product_num + '개', "<br />")

//  장바구니에서  - 버튼을 2회째 클릭했다면
product_num--;
document.write('A 상품의 개수 : ' + product_num + '개', "<br />")


//증감 연산자 - 선행처리(++ 변수명 또는 --변수명) VS 후행처리(변수명++ 또는 변수명--)
var _a = 10;
var _b;
_b = ++_a; //_b = 1 + _a ==_b = 1 + 10 ==> _b = 11 / _a = 11
document.write(`_a의 결과 값: ${_a} <br />`); //11
document.write(`_b의 결과 값: ${_b}`); //11

var _c = 10;
var _d;
_d = _c++;  //_b = _a + 1 ==_b = 10 + 1 ==> +d = 11(10) / _c = 11
document.write(`_c의 결과 값: ${_c} <br />`); //11
document.write(`_d의 결과 값: ${_d}`); //10

var a = 1;
b = a++; // b = a ==> b = 1 / a++ ==> a++ ==> a = 2
console.log(a); //2
console.log(b); //1

var c = 1;
c = c++;
console.log(c); //좌측의 메모리 공간에 담긴 값을 가져온다 1



//  #5. 비교 연산자: 결과값은 true or false
document.write(`<h3>비교 연산자</h3>`)
var _p =10;
var _q =12;
var _r ="10";

var _rst_than;
_rst_than = _p <= _q; // 10 <= 12 ==> true
console.log(_rst_than);
_rst_than = _r <= _p; // 10 <= 10 ==> true
console.log(_rst_than);

//같다(==): 데이터에 타입에 관계없이 화면상에 출력되는 값이 동일하다면 동일여부로 판단(껍데기가 같음)
//정말 같다(===): 데이터에 타입과 값이 동일하다고 판단(본질이 같음)
_rst_than = _p == _r; // 10 == "10" ==> true
console.log(_rst_than);
_rst_than = _p === _r; // 10 === "10" ==> false
console.log(_rst_than);

//다르다(!=)
//정말 다르다(!==)
_rst_than = _p != _r; // 10 != "10" ==> false
console.log(_rst_than);
_rst_than = _p !== _r; // 10 !== "10" ==> true
console.log(_rst_than);

//  #6. 논리 연산자: 
//  ||(or 연산자: 검색결과가 넓어짐)
//  &&(and 연산자: 검색결과가 좁혀짐)
//  !(부정 연산자: 데이터의 값이 false일때 true 로, true일때 false로 처리한다(실무: 데이터의 값의 유무 기준으로 조건문을 형성해주는 중요 포인트))
document.write(`<h3>논리 연산자</h3>`);
var _s = 10;
var _t = 12;
var _u = 14;

document.write(_s > _t || _t <_u, "<br />"); // false || true ==> true
//  첫번째 true를 만나면 뒤에 false가 있더라도 true로 처리한다.
document.write(_s > _t && _t <_u, "<br />"); // false && true ==> false
//  첫 번째 false를 만나면 나머지 조건들을 평가하지 않고 바로 false를 반환한다.
document.write(!(_s < _u), "<br />"); // !(true < false) ==> false
//  false를 true 로, true를 false로 처리한다.

//  #7. 삼항조건 연산자(?): 변수명의 값이 true 또는 false에 의해서 실행되는 구문을 다르게 분리
//  (react 에서는 if 문을 사용할 수 없어, 삼항조건 연산자(?)로 대체함)
//  변수명 ? "A" : "B"
//  변수명에 담긴 값이 true 이면 "A" 를 출력
//  변수명에 담긴 값이 false 이면 "B" 를 출력

/*
var thanMore13Age = prompt("나이를 입력해 주세요", "13");
var registerPermit = Number(thanMore13Age) >= 13;
registerPermit ? alert("가입연령 대상입니다.") : alert("가입 연령 대상이 아닙니다.")
*/

//  응용파트 : 이니스프리에서 성별을 기준으로 문자발송을 분리하여 보내고자 할 때
var gender = 1;
gender % 2 === 0 ? console.log("여성 할인 제품 문자 발송") : console.log("남성 할인 제품 문자 발송");

