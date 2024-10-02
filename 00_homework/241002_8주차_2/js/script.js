//  과제 1
document.write('<h2>과제 1</h2>');
let ex_1 = {
  name: "모모냥",
  image: "cat_01.gif",
}
document.write(`<img src="./img/${ex_1.image}" alt="고양이 이미지" <br/>`)
document.write(`<h3>${ex_1.name}</h3>`)

document.write(`<hr/>`)


//  과제 2
document.write('<h2>과제 2</h2>');
//  숫자 문자형으로 변환
let num1 = "12,000";
let num2 = "24,000";

// 정수로 변환 & 쉼표 제거
let palsedNum_1 = parseInt(num1.replace(",",""));
let palsedNum_2 = parseInt(num2.replace(",",""));

// 더하기
let sum = palsedNum_1 + palsedNum_2;

// 도출
let ex_2_html = `<h3>두 수의 합산 결과: ${sum}원</h3>`;
document.write(ex_2_html);

document.write(`<hr/>`)



//  과제 3
document.write('<h2>과제 3</h2>');
let ex_3 = Math.ceil(Math.random() * 8);
document.write(`<img src="./img/molang${ex_3}.jpg" style="width: 200px;" `)

document.write(`<hr/>`)



//  과제 4
document.write('<h2>과제 4</h2>');

let ex_4_img = ["cat_icon1.png","cat_icon2.png","cat_icon3.png","cat_icon4.png","cat_icon5.png","cat_icon6.png"]; 
document.write(`<hr/>`)

