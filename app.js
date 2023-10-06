console.log('hello');

const gameArea = document.getElementById('gameArea');
const dotList = document.getElementsByClassName('dotTarget');

console.log(gameArea);


// * 3개의 .dotTarget 추가
for(i=0; i<3; i++){
  let someDot = document.createElement('div')
  gameArea.appendChild(someDot);
  someDot.className = "dotTarget";
}
// console.log(someDot);
console.log(dotList);

// * container 클릭 이벤트
gameArea.addEventListener('click',function(target){
  console.log(target);
});