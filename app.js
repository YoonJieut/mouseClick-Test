console.log('hello');

const gameArea = document.getElementById('gameArea');
const dotList = document.getElementsByClassName('dotTarget');
const start = document.getElementById('startButton');
const userInput = document.getElementById('userInput');
const rank = document.getElementById('rank');

// 랜덤 정수를 위한 숫자 타입으로 최대값-dotTarget크기 변수 선언
let numWMax = parseInt(gameArea.clientWidth-20);
let numHMax = parseInt(gameArea.clientHeight-20);

// console.log( numHMax, numWMax)
// console.log(ramdomNumber(0, numHMax))
// console.log(gameArea);
console.dir(gameArea);



//**** * 함수 선언 파트----------------------------------------

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

// * gameArea의 값 추출의 필요성
// ? 어떻게하지 관련된 객체 값이 있을까? - clientWidth, clientLeft
// 가로 범위 0~ gameArea.clientWidth
// 세로 범위 0 ~ gameArea.clientHeight
// gameArea.clientLeft - 좌표값
// gameArea.clientTop - 좌표값


// * .dotTarget 랜덤 +추가 로직
function addDot(){
  let someDot = document.createElement('div')
  gameArea.appendChild(someDot);
  someDot.className = "dotTarget";
  someDot.style.left = `${ramdomNumber(0, numWMax)}px`;
  someDot.style.top = `${ramdomNumber(0, numHMax)}px`;
}
// console.log(dotList);






//* 로직 파트 및 이벤트 리스터 파트 ---------------------------------


// * 초기 3개 세팅
for(i=0; i<3; i++){
  addDot();
}

// * container 클릭 이벤트
// 클릭하면 삭제되는 로직
gameArea.addEventListener('click',function(eventTarget){
  // console.log(eventTarget);
  console.log(eventTarget.target.className);
  if(eventTarget.target.className ==="dotTarget"){
    eventTarget.target.remove();
    
    // ? 랜덤 생성 모듈 들어갈 자리
    addDot()
  } else {
    console.log('잘못 누르셨습니다.')
  }
});
// ! 껏다 키자 삭제 로직이 작동하지 안하, if문의 조건식을 eventTarget.target === "div.dotTarget"에서 eventTarget.target.className ==="dotTarget" 으로 수정함


// * 사라지면 score 로직 추가
// const scoreList =[];

// let temp = 0;
// if( gameArea.children.length === 2){
//   temp++;
// }



// * 입력값 setTimeout 시간 세팅


// * clear 함수
// gameArea 안의 모든 것을 지웁니다.
start.addEventListener('click',function(){
  console.log("start 버튼 누름");
  removeAll();
});

function removeAll(){
  console.log('removeAll 시작');
  for(i=0;i<gameArea.children.length; i++){
    if(gameArea.lastChild === "div.dotTarget"){
      gameArea.removeChild(dotList[i]);
    }
  }
  console.log('removeAll 종료');
};



