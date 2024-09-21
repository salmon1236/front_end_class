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

//  #3. 대입 연산자
//  #4. 복합 대입 연산자
//  #5. 증감 연산자
//  #6. 비교 연산자
//  #7. 논리 연산자
