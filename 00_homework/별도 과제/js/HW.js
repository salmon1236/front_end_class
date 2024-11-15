// let lotto = [];

// while (lotto.length < 6) {
//   let randNum = Math.ceil(Math.random() * 46);
//   console.log(randNum);
//   if (lotto.indexOf(randNum) < 0) {
//     lotto.push(randNum);
//   }
// }
//   document.getElementById('result').textContent = `금주의 로또 번호: ${lotto}`;
// console.log(lotto);

function RandomNumbers() {
  const numbers = Array.from({length: 45})
    .map((_, i) => i + 1)
    .sort(() => Math.random() - 0.5)
    .slice(0, 6)
    .sort((a, b) => a - b)
    .join(', ');
  
  document.getElementById('result').textContent = `금주의 로또 번호: ${numbers}`;
}