//  과제 1
document.write(`<h3>과제 1</h3>`);
let input = prompt('세자리 이상의 정수를 입력해주세요.');
console.log(input, "is", typeof input);
console.log(input, parseInt(input));

if (input.length < 3) {
  document.write('세자리 이상 입력해주세요');
} else if (isNaN (parseInt(input))){
  document.write("숫자를 입력해주세요.")
} else {
  let number = parseInt(input,10);
  console.log(number % 4);//mod 연산자
  if(number % 4 === 0){
    document.write(`${number}는 4의 배수입니다.`)
  } else {
    document.write(`${number}는 4의 배수가 아닙니다.`)
  } 
}
document.write(`<hr/>`);



//  과제 2
document.write(`<h3>과제 2</h3>`);
let studentName = prompt('학생의 이름을 입력하시오.');
console.log(studentName, "is", typeof studentName);
let score = prompt('점수를 입력하시오.(0~100):')
console.log(score, "is", typeof score);

// if(!(score >= 0 && score <= 100)){
if(score < 0 || score > 100){
  document.write("0 부터 100까지의 숫자를 입력해주세요.")
} else if(score >= 95 && score <= 100){
  document.write(`<p>${studentName}의 등급은 A+</p>`)
} else if (score >= 90 && score < 95){
  document.write(`<p>${studentName}의 등급은 A</p>`)
} else if (score >= 85 && score < 90){
  document.write(`<p>${studentName}의 등급은 B+</p>`)
} else if (score >= 80 && score < 85){
  document.write(`<p>${studentName}의 등급은 B</p>`)
} else if (score >= 75 && score < 80){
  document.write(`<p>${studentName}의 등급은 c+</p>`)
} else if (score >= 70 && score < 75){
  document.write(`<p>${studentName}의 등급은 C</p>`)
} else if (score >= 65 && score < 70){
  document.write(`<p>${studentName}의 등급은 D+</p>`)
} else if (score >= 60 && score < 65){
  document.write(`<p>${studentName}의 등급은 D</p>`)
} else if (score < 60){
  document.write(`<p>${studentName}의 등급은 F</p>`)
}
document.write(`<hr/>`);




//  과제 3
document.write(`<h3>과제 3</h3>`);
for(let ex_3 = 1; ex_3 <= 12; ex_3++){
  document.write(`${ex_3},`)
}
document.write(`<hr/>`);



//  과제 4
document.write(`<h3>과제 4</h3>`);
let imgEx_1 = 1;
while(imgEx_1 <= 12){
  document.write(`<img class="insta" src="./img/instagram-${imgEx_1}.jpg" style="width: 120px;">`);
  imgEx_1++;
}
document.write ('<hr/>')





//  과제 5
document.write(`<h3>과제 5</h3>`);

const imageZoo = [
  'img0.jpg', 
  'img1.jpg', 
  'img2.jpg', 
  'img3.jpg', 
  'img4.jpg', 
  'img5.jpg', 
  'img6.jpg', 
  'img7.jpg'
];
const imageZooDisplay = 4;

let imgEx_2 = '';

for (let i = 0; i < imageZoo.length; i = i+2) {
  console.log(i)
  imgEx_2 += `<img class='zoo' src='./img/${imageZoo[i]}' style='width: 120px;'>`;
}
document.write(imgEx_2);