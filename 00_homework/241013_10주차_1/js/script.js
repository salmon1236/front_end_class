document.getElementById("fav").style.color = "hotpink";
document.getElementById("fav").style.fontStyle = "bold";
console.log(fav);


const baskinElements = document.querySelectorAll('#test_02 p.baskin');
const mintChocolateChip = baskinElements[2];
    mintChocolateChip.style.color = "chocolate";
    mintChocolateChip.style.fontSize = "24px";


const images = document.querySelectorAll('#test_03 img');
console.log(`이미지 개수: ${images.length}`);
for (let i = 0; i < images.length; i++) {
  images[i].style.width = '160px';
  if (i === 1) {
    images[i].style.border = '2px solid #f00000';
  }
}
