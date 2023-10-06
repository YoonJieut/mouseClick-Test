console.log('hello');

const gameArea = document.getElementById('gameArea');
const dotList = document.getElementsByClassName('dotTarget');

console.log(gameArea);


for(i=0; i<3; i++){
  let someDot = document.createElement('div')
  gameArea.appendChild(someDot);
  someDot.className = "dotTarget";
}
// console.log(someDot);
console.log(dotList);