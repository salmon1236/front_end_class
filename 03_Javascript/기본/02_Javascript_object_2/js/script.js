document.write("<h2>배열객체</h2>");
document.write(
  "<p>필요한 만큼의 데이터 값(들)을 하나의 변수명에 저장할 수 있음</p>"
);
// 배열 데이터와 객체 데이터의 공통점 : 추가생성이 가능하기 때문에 무한으로 데이터를 담을 수 있음
// 배열 데이터와 객체 데이터의 차이점 :
// 객체 데이터 : key(분리공간의 항목이름)와 value(각 항목마다 담긴 데이터 또는 함수). 변수명.name을 호출하면 name에 담긴 데이터를 가져올 수 있음
var hero = {
  name: "홍길동",
  word: "아버지를 아버지라...",
  action: function () {
    return "구름타고 슝~~";
  },
};
console.log(hero);
console.log(hero.name);
console.log(hero.action());

// 배열 데이터 : 각 데이터마다 지정된 순서가 존재. 각 순서마다 인덱스 번호가 붙는다. 0 -> 1 -> 2 -> ... ===> 각 항목의 데이터 추출시 증감연산자(++)로 데이터 추출이 가능

var fruits = ["사과", "오렌지", "포도"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 배열 패턴 구성 : [이미지, 타이틀, 가격정보, 판매자 이름]
var $kakao_arr = ["kakao.jpg", "카카오 스티커", 1500, "라이언"];
console.log($kakao_arr);
console.log($kakao_arr.length);
console.log($kakao_arr[0]);
console.log($kakao_arr[1]);
console.log($kakao_arr[2]);
console.log($kakao_arr[3]);

// i 라는 변수를 활용해서 증감연산자로 사용하여 값을 추출
var i = 0;
console.log($kakao_arr[i]); //"kakao.jpg"
i++; // i = 1
console.log($kakao_arr[i]); //"카카오 스티커"
i++; // i = 2
console.log($kakao_arr[i]); //1500
i++;
console.log($kakao_arr[i]); //"라이언"

// 배열 데이터를 활용한 요일 정보 가져오기(일: 0, 월: 1, ... , 토: 6)
var $currentDate = new Date();
var $day = $currentDate.getDay();
console.log($day);
var yoil_arr = ["일", "월", "화", "수", "목", "금", "토"];
console.log(`오늘은 ${yoil_arr[$day]}요일입니다.`);

var img_arr = ["sun", "mon", "tues", "wednes", "thurs", "fri", "satur"];
document.write(`<img src="./img/${img_arr[$day]}day.gif" alt="요일 이미지">`);

// 배열 데이터의 메서드(내장 함수)
// 배열데이터.push(데이터) : 배열데이터의 맨 마지막 자리에 데이터를 추가한다.
// 배열데이터.pop() : 배열데이터의 맨 마지막 자리의 데이터를 삭제한다.

// 배열데이터.shift() : 배열데이터의 맨 첫번째 자리의 데이터를 삭제한다.
// 배열데이터.unshift(데이터) : 배열데이터의 맨 첫번째 자리의 데이터를 추가한다.

var member = [
  "유재석",
  "김종국",
  "하하",
  "송지효",
  "양세찬",
  "지석진",
  "전소민",
];
console.log(member);

member.push("게리");
console.log(member);

member.pop();
console.log(member);

member.shift();
console.log(member);

member.unshift("박명수");
console.log(member);

// 배열 데이터끼리 결합하는 메서드 : concat()
document.write("<h4>배열 데이터끼리 결합하는 메서드 : concat()</h4>");
var chars = ["사과", "오렌지", "포도"];
var nums = [1, 2, 3];
var numsChars = nums.concat(chars);
document.write(`nums가 chars를 결합한 값 : ${numsChars}`);
console.log(numsChars);

var charsNums = chars.concat(nums);
document.write(`chars가 nums를 결합한 값 : ${charsNums}`);
console.log(charsNums);

// ** 원본 데이터의 변경 없음
console.log(chars);
console.log(nums);

// 배열 내부 데이터를 합치는 join() : 하나의 문자형 데이터로 구성
document.write(
  "<h4>배열 내부 데이터를 합치는 join() : 하나의 문자형 데이터로 구성</h4>"
);
var mavelHero = ["앤트맨", "스파이더맨", "캣우먼"];
var string1 = mavelHero.join(); // 구분자가 없는 경우
console.log(string1);

var string2 = mavelHero.join("/"); // 구분자가 있는 경우
console.log(string2);
console.log(typeof string2);

// [잠깐 실습]
var movieName = ["슈렉", "겨울왕국", "장화신은 고양이"];
// 앤트맨~스파이더맨~캣우먼~슈렉~겨울왕국~장화신은 고양이
// concat() 결합하고,
// join() 문자형 데이터로 합친다. "~" 구분자 적용

// 방법1
var heroMovie = mavelHero.concat(movieName);
console.log(heroMovie);
var str_rst1 = heroMovie.join("~");
console.log(str_rst1);

// 방법2
var str_rst2 = mavelHero.concat(movieName).join("~");
console.log(str_rst2);
// 체이닝 기법: 여러가지 메서드 또는 함수를 이어서 적용하는 방법

// 배열 데이터로 다시 분리 split("~")
// https://comic.naver.com/webtoon/detail?titleId=812354&no=91
var webToonUrl = "https://comic.naver.com/webtoon/detail?titleId=812354&no=91";
var webToonInfo = webToonUrl.split("?");
console.log(webToonInfo);

var webToonInfoDetail = webToonInfo[1].split("&");
console.log(webToonInfoDetail);

var webToonInfoDetailTitId = webToonInfoDetail[0].split("=");
console.log(webToonInfoDetailTitId[1]);

var webToonInfoDetailNoId = webToonInfoDetail[1].split("=");
console.log(webToonInfoDetailNoId[1]);

// api로 호출 => A 개발자 : 가격 정보 보내준다.
// api로 호출 => B 개발자 : 상품 이름 보내준다.
// 배열 데이터 내에서 원하는 위치에 데이터를 추가 / 삭제하는 splice() 메서드
document.write(
  "<h3>배열 데이터 내에서 원하는 위치에 데이터를 추가 / 삭제하는 splice() 메서드</h3>"
);
document.write(
  "<h4>[인수가 한 개인 경우] 배열변수명.splice(인덱스 번호) : 배열 데이터의 지정한 인덱스 번호로부터 마지막 인덱스까지 잘러서 반환</h4>"
);
var $number = [1, 2, 3, 4, 5];
var $oneSplice = $number.splice(2);
console.log($oneSplice); // [3, 4, 5]
console.log($number); // [1, 2]

document.write(
  "<h4>[인수가 두 개인 경우] 배열변수명.splice(인덱스 번호, 자를 개수) : 배열 데이터의 지정한 인덱스 번호로부터 자를 개수를 잘라서 반환</h4>"
);
var $study = ["HTML5", "CSS3", "Javascript", "SQL"];
var $twoSplice = $study.splice(1, 2);
console.log($twoSplice); // ['CSS3', 'Javascript']
console.log($study); // ['HTML5', 'SQL']

document.write(
  "<h4>[인수가 세 개인 경우] 배열변수명.splice(인덱스 번호, 자를 개수, 추가할 데이터) : 배열 데이터의 지정한 인덱스 번호로부터 자를 개수를 잘라서 반환하고 그 자리에 추가할 데이터를 넣는다.(추가 대상은 원본 데이터)</h4>"
);
var $color = ["red", "orange", "yellow", "green", "blue"];
var $threeSplice = $color.splice(2, 2, "mint");
console.log($threeSplice); // ['yellow', 'green']
console.log($color); // ['red', 'orange', 'mint', 'blue']

document.write(
  "<h4>[인수가 세 개 이상인 경우] 배열변수명.splice(인덱스 번호, 자를 개수, 추가할 데이터1, 추가 데이터2, ...) : 배열 데이터의 지정한 인덱스 번호로부터 자를 개수를 잘라서 반환하고 그 자리에 추가할 데이터를 넣는다.(추가 대상은 원본 데이터)</h4>"
);
var $device = ["아이폰", "아이패드", "애플워치"];
var $threeMoreSplice = $device.splice(2, 0, "갤럭시s24", "갤럭시 10 Tab");
console.log($threeMoreSplice);
console.log($device);

// [잠깐실습 - splice() 메서드 활용]
// 우리반에 학생이 5명 존재("영희", "수현", "하늘", "하나", "덕선")
// 두명이 전학을 갔습니다. ("하늘", "하나")
// 한명이 전학을 왔습니다. ("보검") ==> 하늘과 하나가 빠진 자리에 들어간다.
// 최종결과는 "보검"을 출력
var myClass = ["영희", "수현", "하늘", "하나", "덕선"];
var changeClass = myClass.splice(2, 2, "보검");
console.log(changeClass);
console.log(myClass);

console.log(myClass[2]); // "보검"

// [홈워크 - splice() 메서드 활용]
// ["곰인형", "꽃다발", "올영쿠폰"] => ["곰인형", "꽃다발", "스벅카드", "향수", "올영쿠폰"] 추가.

// slice() 메서드 : 기존 데이터를 변경하지 않고 데이터만 추출하는 메서드

document.write(
  "<h4>[인수가 한 개인 경우] 배열변수명.slice(인덱스 번호) : 배열 데이터의 지정한 인덱스 번호로부터 마지막 인덱스 번호의 값을 모두 가져온다.</h4>"
);
var $colorTxt = ["레드", "오렌지", "옐로우", "그린"];
var $oneSlice = $colorTxt.slice(2);
console.log($oneSlice); // ['옐로우', '그린']
console.log($colorTxt); // ['레드', '오렌지', '옐로우', '그린'] ==> 원본 데이터 변경 없음

document.write(
  "<h4>[인수가 한 개인 경우] 배열변수명.slice(인덱스 번호1, 인덱스 번호2) : 배열 데이터의 지정한 인덱스 번호1로부터 인덱스 번호2의 직전까지의 데이터를 가져온다.</h4>"
);
var $twoSlice = $colorTxt.slice(1, 3);
console.log($twoSlice); // ['오렌지', '옐로우']
console.log($colorTxt); // ['레드', '오렌지', '옐로우', '그린']

/*
[splice() VS slice()]
공통점: 기존 배열 데이터로부터 추출하는 과정은 유사
차이점: 
 - splice() : 원본 데이터의 변경 원인(삭제, 추가, 변경) => 원본 데이터가 중심
 - slice() : 원본 데이터의 변경 없음 => 잘라낸 데이터가 중심
*/

// 반복문을 활용한 배열 데이터의 나열
var petImg = ["img_01.jpg", "img_02.jpg", "img_03.jpg", "img_04.jpg"];
for (var i = 0; i < petImg.length; i++) {
  //4까지
  console.log(i); // 0 ==> 1 ==> 2 ==> 3 ==> 4(반복종료)
  console.log(petImg[i]); // "img_01.jpg" ==> "img_02.jpg" ==> "img_03.jpg" ==> "img_04.jpg"
  document.write(`<img src="./img/${petImg[i]}">`);
}

// ["red", "yellow", "green", "blue"] ==> ["yellow", "blue"]
// slice() + push() + join()
var colorArr = ["red", "yellow", "green", "blue"];
var colorList = [];
console.log(colorArr.slice(1, 2)[0]);
console.log(colorArr.slice(3)[0]);

colorList.push(colorArr.slice(1, 2)[0], colorArr.slice(3)[0]);
console.log(colorList);
console.log(colorList.join(", "));

// console.log();
// var colorList = [].concat(colorArr.slice(1, 2), colorArr.slice(3));
// console.log(colorList);

// 1차 배열 var 변수명 = [data1, data2, ....]
var $img = ["img_01.jpg", "img_02.jpg", "img_03.jpg", "img_04.jpg"];
var $title = ["타이틀1", "타이틀2", "타이틀3", "타이틀4"];
var $intro = ["소개1", "소개2", "소개3", "소개4"];

document.write(`<div class="wrap" style="display: flex;">`);
for (i = 0; i < $img.length; i++) {
  document.write(`
      <div class="box" style="border:1px solid #f00;">
        <img src="./img/${$img[i]}" alt="" style="width: 100px; height: 60px;">
        <h3>${$title[i]}</h3>
        <p>${$intro[i]}</p>
      </div>
    `);
}
document.write(`</div>`);

//2차 배열
// 변수명 = [
//   data0, //0번 인덱스
//   data1, //1번 인덱스
// ];
// 변수명 = [
//   [
//     "data0-0", //0번 인덱스(1차)의 0번 인덱스(2차)
//     "data0-1", //0번 인덱스(1차)의 1번 인덱스(2차)
//   ], //0번 인덱스
//   [
//     "data1-0", //1번 인덱스(1차)의 0번 인덱스(2차)
//     "data1-1", //1번 인덱스(1차)의 1번 인덱스(2차)
//   ], //1번 인덱스
// ];

var product = [
  ["img_01.jpg", "타이틀1", "소개1"],
  ["img_02.jpg", "타이틀2", "소개2"],
  ["img_03.jpg", "타이틀3", "소개3"],
  ["img_04.jpg", "타이틀4", "소개4"],
];
console.log(product);
console.log(product.length);

document.write(`<div class="wrap" style="display: flex;">`);
for (i = 0; i < product.length; i++) {
  console.log(`${i}:`, product[i]);

  document.write(`
      <div class="box" style="border:1px solid #f00;">
        <img src="./img/${product[i][0]}" alt="" style="width: 100px; height: 60px;">
        <h3>${product[i][1]}</h3>
        <p>${product[i][2]}</p>
      </div>
    `);
}
document.write(`</div>`);

var kDrama = [
  ["오징어 게임2", "이정재"], //0
  ["유괴의 날", "윤계상"], //1
  ["무빙", "류승룡"], //2
];
console.log(kDrama[1]); //["유괴의 날", "윤계상"]
console.log(kDrama[1][0]); //"유괴의 날"
// "류승룡" 출력
console.log(kDrama[2]);
console.log(kDrama[2][1]);

// 객체 배열 => JSON(DB로 부터 전달받은 형태)
// [[...], [...]]
// [{key1: value1}, {}]
// {key1: value1}
var kDramaObj = [
  { name: "오징어 게임2", hero: "이정재" }, //0
  { name: "유괴의 날", hero: "윤계상" }, //1
  { name: "무빙", hero: "류승룡" }, //2
];
console.log(kDramaObj[0]);
console.log(kDramaObj[0].name);
// console.log(kDramaObj[0]?.["name"]);
// "윤계상" 출력

// 2차 배열을 통해서 상품 리스트 구성하기
// 배열변수명[1차 배열의 인덱스번호][2차 배열의 인덱스 번호]
// #1. 배열의 패턴을 구성 [이미지, 타이틀, 내용, 가격]
var pd_arr1 = [
  ["shop_01.jpg", "마마스앤파파스", "트레이인 완구 포함", "월 9,900원"],
  ["shop_02.jpg", "알집매트", "알집 꾸러기 매트", "월 6,000원"],
  ["shop_03.jpg", "알집소파1", "알집 꾸러기 네이비 소파", "월 7,000원"],
  ["shop_04.jpg", "알집소파2", "알집 꾸러기 핑크 소파", "월 8,000원"],
];
console.log(pd_arr1.length); // 4 -> 8

// #2. 구조를 구성하고 내부에 데이터를 담는다.
document.write(`<div class="wrap" style="display: flex;">`);
for (i = 0; i < pd_arr1.length; i++) {
  document.write(`
      <div class="box" style="border:1px solid #00f;">
        <img src="./img/${pd_arr1[i][0]}" alt="" style="width: 100px; height: 60px;">
        <h4>${pd_arr1[i][1]}</h4>
        <p>${pd_arr1[i][2]}</p>
        <span>${pd_arr1[i][3]}</span>
      </div>
  `);
}
document.write(`</div>`);

document.write(`<hr />`);

var wrap_case = ``;
wrap_case += `<div class="wrap" style="display: flex;">`;
for (i = 0; i < pd_arr1.length; i++) {
  wrap_case += `
      <div class="box" style="border:1px solid #00f;">
        <img src="./img/${pd_arr1[i][0]}" alt="" style="width: 100px; height: 60px;">
        <h4>${pd_arr1[i][1]}</h4>
        <p>${pd_arr1[i][2]}</p>
        <span>${pd_arr1[i][3]}</span>
      </div>
  `;
}

wrap_case += `</div>`;
document.write(wrap_case);

// [Homework] 객체배열을 통해 상품 리스트 구현하기
var pd_arr2 = [
  {
    img: "shop_01.jpg",
    title: "마마스앤파파스",
    cont: "트레이인 완구 포함",
    price: "월 9,900원",
  },
  {
    img: "shop_02.jpg",
    title: "알집매트",
    cont: "알집 꾸러기 매트",
    price: "월 6,000원",
  },
  {
    img: "shop_03.jpg",
    title: "알집소파1",
    cont: "알집 꾸러기 네이비 소파",
    price: "월 7,000원",
  },
  {
    img: "shop_04.jpg",
    title: "알집소파2",
    cont: "알집 꾸러기 핑크 소파",
    price: "월 8,000원",
  },
];

// 배열데이터를 기준으로 사용할 수 있는 반복문 형태
// 기본 for
// for ~ in : for(변수명(index) in 배열데이터변수명){실행문} ==> for(i in arrData){실행문}
// for ~ of : for(변수명(value) of 배열데이터변수명){실행문} ==> for(v of arrData){실행문}
// 배열데이터변수명.forEach(function(params인자들){실행문});
// 배열데이터변수명.map(function(params인자들){실행문});
// 배열데이터변수명.filter(function(params인자들){실행문});
// 배열데이터변수명.reduce(function(params인자들){실행문});

var pd_arr3 = [
  ["shop_01.jpg", "마마스앤파파스", "트레이인 완구 포함", "월 9,900원"],
  ["shop_02.jpg", "알집매트", "알집 꾸러기 매트", "월 6,000원"],
  ["shop_03.jpg", "알집소파1", "알집 꾸러기 네이비 소파", "월 7,000원"],
  ["shop_04.jpg", "알집소파2", "알집 꾸러기 핑크 소파", "월 8,000원"],
];
for (idx in pd_arr3) {
  console.log(idx);
  console.log(typeof idx); // string
  console.log(pd_arr3[idx]);
}

document.write(`<hr /><h3>for~in 반복적용</h3>`);

var wrap_case = ``;
wrap_case += `<div class="wrap" style="display: flex;">`;
for (i in pd_arr3) {
  wrap_case += `
      <div class="box" style="border:1px solid #0f0;">
        <img src="./img/${pd_arr1[i][0]}" alt="" style="width: 100px; height: 60px;">
        <h4>${pd_arr1[i][1]}</h4>
        <p>${pd_arr1[i][2]}</p>
        <span>${pd_arr1[i][3]}</span>
      </div>
  `;
}

wrap_case += `</div>`;
document.write(wrap_case);

for (v of pd_arr3) {
  console.log(v);
  console.log(typeof v);
}

document.write(`<hr /><h3>for~of 반복적용(2차배열 적용 pd_arr3)</h3>`);

var wrap_case = ``;
wrap_case += `<div class="wrap" style="display: flex;">`;
for (v of pd_arr3) {
  wrap_case += `
      <div class="box" style="border:1px solid #f90;">
        <img src="./img/${v[0]}" alt="" style="width: 100px; height: 60px;">
        <h4>${v[1]}</h4>
        <p>${v[2]}</p>
        <span>${v[3]}</span>
      </div>
  `;
}

wrap_case += `</div>`;
document.write(wrap_case);

document.write(`<hr /><h3>for~of 반복적용(객체배열 적용 pd_arr2)</h3>`);

var wrap_case = ``;
wrap_case += `<div class="wrap" style="display: flex;">`;
for (v of pd_arr2) {
  console.log(v); // {img: "shop_01.jpg", title: "마마스앤파파스", cont: "트레이인 완구 포함",price: "월 9,900원"}
  wrap_case += `
      <div class="box" style="border:1px dashed #f90;">
        <img src="./img/${v.img}" alt="" style="width: 100px; height: 60px;">
        <h4>${v.title}</h4>
        <p>${v.cont}</p>
        <span>${v.price}</span>
      </div>
  `;
}

wrap_case += `</div>`;
document.write(wrap_case);

pd_arr3.forEach(function (v, i, a) {
  console.log(v);
  console.log(i);
  console.log(a);
});

document.write(`<hr /><h3>forEach 반복적용(2차배열 적용 pd_arr3)</h3>`);

var wrap_case = ``;
wrap_case += `<div class="wrap" style="display: flex;">`;

pd_arr3.forEach(function (v, i) {
  wrap_case += `
      <div class="box" style="border:1px solid #08f;">
        <img src="./img/${v[0]}" alt="" style="width: 100px; height: 60px;">
        <h4>${v[1]}</h4>
        <p>${v[2]}</p>
        <span>${v[3]}</span>
      </div>
  `;
});

// for (v of pd_arr3) {
//   wrap_case += `
//       <div class="box" style="border:1px solid #f90;">
//         <img src="./img/${v[0]}" alt="" style="width: 100px; height: 60px;">
//         <h4>${v[1]}</h4>
//         <p>${v[2]}</p>
//         <span>${v[3]}</span>
//       </div>
//   `;
// }

wrap_case += `</div>`;
document.write(wrap_case);

// sort() : 기존 배열 데이터를 어떤 기준으로 정렬할 것인가? (상품리스트 인기순, 저가순, 고가순, 조회순, ... 사용자의 의도대로 리스트 정렬과 연결)
// 문자데이터의 정렬
var animal = ["monkey", "cat", "dog", "snake", "rabbit", "mouse"];
var sort_01 = animal.sort(); // a: 97 ~ z: 122
console.log(sort_01);

var actor = ["마동석", "박은빈", "강하늘", "나영석"];
var sort_02 = actor.sort(); // 가: 44032 ~ 힣: 55203
console.log(sort_02);

// 숫자데이터의 정렬
var priceNum = [10000, 5000, 3000, 7000];
// var sort_03 = priceNum.sort();
// console.log(sort_03); //[10000, 3000, 5000, 7000] ==> (X)
// console.log(priceNum); //[10000, 3000, 5000, 7000] (원본데이터 변경 있음)

var sort_04 = priceNum.sort(function (a, b) {
  console.log(a);
  console.log(b);
  // return a - b; // 작은 숫자부터 정렬(낮은 가격순, 20241011/20241012 => 오래된 순)
  //10000 - 5000 = 5000(양의 정수 : true) =sort() 함수 메서드=> 자리교체가 발생 [5000, 10000, 3000, 7000]
  //10000 - 3000 = 7000(양의 정수 : true) =sort() 함수 메서드=> 자리교체가 발생 [5000, 3000, 10000, 7000]
  //10000 - 7000 = 3000(양의 정수 : true) =sort() 함수 메서드=> 자리교체가 발생 [5000, 3000, 7000, 10000]
  // 1차 리턴값 종료
  //5000 - 3000 = 2000(양의 정수 : true) =sort() 함수 메서드=> 자리교체가 발생 [3000, 5000, 7000, 10000]
  //5000 - 7000 = -2000(음의 정수 : false) =sort() 함수 메서드=> 자리교체 없음 [3000, 5000, 7000, 10000]
  //7000 - 10000 = -3000(음의 정수 : false) =sort() 함수 메서드=> 자리교체 없음 [3000, 5000, 7000, 10000]
  //// 음의 정수, 0 일 경우 : 자리교체 없음
  //// 양의 정수 일 경우 : 자리교체 있음

  return b - a; // 큰 수부터 정렬(고가순, 최신순)
});
console.log(sort_04); // [3000, 5000, 7000, 10000]

// 2차 배열에서 정렬(최저가 정렬)
var sort_arr1 = [
  ["카카오 문구 세트", 15000],
  ["라이언 인형", 20000],
  ["카카오 코스메틱 세트", 12000],
];
var rst_sort1 = sort_arr1.sort(function (a, b) {
  return a[1] - b[1];
});
console.log(rst_sort1);

// 객체 배열에서 정렬(최저가 정렬)
var sort_arr2 = [
  { name: "카카오 문구 세트", price: 15000 },
  { name: "라이언 인형", price: 20000 },
  { name: "카카오 코스메틱 세트", price: 12000 },
];
var rst_sort2 = sort_arr2.sort(function (a, b) {
  return a.price - b.price;
});
console.log(rst_sort2);
console.log(rst_sort2.reverse()); // 배열리스트를 역순으로 뒤집는다.

//[문자객체] indexOf("찾을 문자") => 해당하는 문자 데이터의 최초 인덱스 번호가 추출
//[배열객체] indexOf() => 동일한 데이터가 존재하는지에 대한 유무
var cart = [];
cart.push("딸기");
console.log(cart);
cart.push("포테토칩");
console.log(cart);
cart.push("바나나");
console.log(cart);
cart.push("딸기");
console.log(cart); // ['딸기', '포테토칩', '바나나', '딸기'] => 불필요한 중복된 데이터가 존재

if (0) {
  console.log("if 절 실행");
} else {
  console.log("else 절 실행");
}

var cart_arr = ["딸기", "포테토칩", "바나나"];
var next_item = "딸기";
console.log(cart_arr.indexOf("딸기")); // 0 : 0번 인덱스에 존재함
console.log(cart_arr.indexOf("포도")); // -1 : 배열 리스트에 없음
if (cart_arr.indexOf(next_item) < 0) {
  cart_arr.push(next_item);
}
console.log(cart_arr); // ['딸기', '포테토칩', '바나나']

// 로또 1 ~ 46까지 랜덤으로 적용하되 동일 숫자가 배열 리스트에 들어가지 않도록 구성 (총 각 다른 숫자 6개)
var lotto = [];

while (lotto.length < 6) {
  var randNum = Math.ceil(Math.random() * 46);
  console.log(randNum);
  if (lotto.indexOf(randNum) < 0) {
    lotto.push(randNum);
  }
}

console.log(lotto);
