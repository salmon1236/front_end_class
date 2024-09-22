//  과제 1
document.write(`<h2>과제 1</h2>`);
var _num_01 = 23;
var _num_02 = 12;

var _rst_01 = _num_01 + _num_02;
document.write(`최종 합계는 `, _rst_01, `입니다. <hr />`);

//  과제 2
document.write(`<h2>과제 2</h2>`);
var _num_03 = 12;
var _num_04 = 5;
var _rst_02 = _num_03 % _num_04;

document.write(`두 수를 나눈 나머지 값은 `, _rst_02, `입니다. <hr />`);

//  과제 3
document.write(`<h2>과제 3</h2>`);
var _thisYear = 2024;
_thisYear++;
document.write(`내년은 `, _thisYear, `년 입니다.<hr />`);

//  과제 4
document.write(`<h2>과제 4</h2>`);
var gender = 1;
gender % 2 === 0 ? document.write(`여성`) : document.write(`남성<hr />`);

//  과제 5
document.write(`<h2>과제 5</h2>`);
var img = "";

img += "<div class='frame'>";
img += "<div class='image'>1</div>";
img += "<div class='image'>2</div>";
img += "<div class='image'>3</div>";
img += "<div class='image'>4</div>";
img += "</div>";

document.write(img);
