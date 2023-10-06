console.log('hello');

const gameArea = document.getElementById('gameArea');
const dotList = document.getElementsByClassName('dotTarget');
// console.log(gameArea);


// * 3개의 .dotTarget 추가 로직
for(i=0; i<3; i++){
  let someDot = document.createElement('div')
  gameArea.appendChild(someDot);
  someDot.className = "dotTarget";
}
// console.log(dotList);

// * container 클릭 이벤트
gameArea.addEventListener('click',function(eventTarget){
  eventTarget.target.remove();
  // ? 랜덤 생성 모듈 들어갈 자리
});

// * 랜덤 모듈 --------------------------
// 랜덤 함수
function ramdomNumber(min, max) {
  min = Math.ceil(min);
  // ceil - 올림
  max = Math.floor(max);
  // floor - 내림
}