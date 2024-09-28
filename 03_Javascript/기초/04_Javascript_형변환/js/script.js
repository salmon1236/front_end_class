document.write(`<h2>형변환: 암시적 형변환/ 명시적 형변환</h2>`)
document.write(
    `<p>형변환이란: 
    문자형 데이터  >>>  숫자형 데이터 변경(연산 가능하도록 하기 위함)
    숫자형 데이터  >>>  문자형 데이터 변경(150000  >>>  150,000 표기하기 위함)
    </p>`);

document.write(
    `<h3>형변환 -  암시적 형변환(스크립트 내부에서 제시되지 않은 상태에서 이뤄지는 형변환)</h3>`
)
let num1 = 10 + "12";
console.log(num1); // "1012"
console.log(typeof num1); // string

let num2_1 = 10 - "12";
console.log(num2_1); // -2
console.log(typeof num2_1); // number

let num2_2 = "10" - 12;
console.log(num2_2); // -2
console.log(typeof num2_1); // number

let num3_1 = 12 + true; // ture = 1 , false = 0
console.log(num3_1); // 13 = 12(num) + 1(true)
console.log(typeof num3_1);  // number

let num3_2 = false + 12; // ture = 1 , false = 0
console.log(num3_2); // 12 =  + 0(false) + 12(num)
console.log(typeof num3_2); // number

let num4_1 = "12" * 2;
console.log(num4_1); // 24
let num4_2 = 12 * "2";
console.log(num4_2); // 24


let num5_1 = "12" / 2;
console.log(num5_1); // 6



////////////////////////////////////////////////////////////////////////////////////////////////////

// 암시적 형변환: 문자와 숫자를 포함한 모든 형식에서 결합(+) 할 경우를 제외하고 모두 연산 가능하며, 숫형 데이터로 변경 된다.

// 조건문에서 작성되는 숫자의 입력
let dataLen = 10;  // 1: true  <<>>  0: false
if (dataLen){
  console.log("데이터 존재 있음");
} else{
  console.log("데이터 존재 없음");
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// 명시적 형변환: 각 메서드를 통해서 형변환을 시켜서 화면에 표기 할 수 있음
document.write(
  `<h3>형변환 -  명시적 형변환(스크립트 내부에서 작성되는 문자를 기준으로 이뤄지는 형변환)</h3>`
)
// 숫자를 문자로 (150000  >>>  "150,000")
let change_numToString = 10000; //  숫자형

//  방법 1
let change_numToString_method_1 = String(change_numToString);
console.log(change_numToString_method_1);  //  10000
console.log(typeof change_numToString_method_1);  // string

//  방법 2
let change_numToString_method_2 = change_numToString.toString();
console.log(change_numToString_method_2);  //  10000
console.log(typeof change_numToString_method_2);  // string

//  문자를 숫자로
//  수 Number("10000")
//  정수 parseInt("10000")  >>> 소숫점 이하 절삭 (반내림)
//  실수 parseFloat("10000")