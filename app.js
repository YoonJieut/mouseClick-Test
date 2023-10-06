console.log('hello');

const gameArea = document.getElementById('gameArea');
const dotList = document.getElementsByClassName('dotTarget');

// 랜덤 정수를 위한 숫자 타입으로 최대값-dotTarget크기 변수 선언
let numWMax = parseInt(gameArea.clientWidth-20);
let numHMax = parseInt(gameArea.clientHeight-20);

// console.log( numHMax, numWMax)
// console.log(ramdomNumber(0, numHMax))
// console.log(gameArea);
console.dir(gameArea);


// * 초기 3개 세팅
for(i=0; i<3; i++){
  addDot();
}
// * .dotTarget 추가 로직
function addDot(){
  let someDot = document.createElement('div')
  gameArea.appendChild(someDot);
  someDot.className = "dotTarget";
  someDot.style.left = `${ramdomNumber(0, numWMax)}px`;
  someDot.style.top = `${ramdomNumber(0, numHMax)}px`;
}
// console.log(dotList);

// * container 클릭 이벤트
// 클릭하면 삭제되는 로직
gameArea.addEventListener('click',function(eventTarget){
  eventTarget.target.remove();
  // ? 랜덤 생성 모듈 들어갈 자리
  addDot()
});

// * 랜덤 모듈 --------------------------
// 랜덤 함수
function ramdomNumber(min, max) {
  min = Math.ceil(min);
  // ceil - 올림
  max = Math.floor(max);
  // floor - 내림
  return parseInt(Math.floor(Math.random() * (max - min)+min))
  // ramdom은 0~1 난수, 벙위를 곱하면 범위 내의 랜덤 숫자가 나오고, 최소 값을 더해주면 된다.
}

// * gameArea의 값 추출
// 가로 범위 0~ gameArea.clientWidth
// 세로 범위 0 ~ gameArea.clientHeight

// gameArea.clientLeft - 좌표값
// gameArea.clientTop - 좌표값




