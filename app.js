console.log('hello');

const gameArea = document.getElementById('gameArea');
const dotList = document.getElementsByClassName('dotTarget');
const start = document.getElementById('startButton');
const userInput = document.getElementById('userInput');
const rank = document.getElementById('rank');
const classList = document.getElementsByClassName('test');


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

// * removeAll 함수
// gameArea 안의 모든 것을 지웁니다.
function removeAll(){
  // console.log('removeAll 시작');
  while(0<gameArea.children.length){
    gameArea.children[0].remove();
  }
  // console.log('removeAll 종료');


    // for(i=0;i<gameArea.children.length; i++){
  //   console.log( gameArea.children.length);
  //   console.log( gameArea.children[i]);
  //   gameArea.children[0].remove();
  // }
  // ? length 3개만큼 지우는 것이 아니라, 2개만 지워지는 현상을 발견
  // ! for문 안의 gameArea.children.length도 계속 동적으로 변하기 때문에 생긴 오류로, while 문을 사용해서 해결하고자 한다.
};

// * container 클릭 이벤트
// * 본 게임 로직 : 삭제, score 반영, 랜덤 생성
// ! 로직 항상 구동, if문으로 작동하도록 함.

gameArea.addEventListener('click',function(eventTarget){
  // console.log(eventTarget);
  // console.log(eventTarget.target.className);
  if(eventTarget.target.className ==="dotTarget"){
    console.log(eventTarget);
    eventTarget.target.remove();
    
    // 
    temp++;
    classList[1].textContent = "Score : "+temp;
    // 랜덤 생성 모듈
    addDot()
  } else {
    console.log('잘못 누르셨습니다.')
  }
});

 // ! 껏다 키자 삭제 로직이 작동하지 안하, if문의 조건식을 eventTarget.target === "div.dotTarget"에서 eventTarget.target.className ==="dotTarget" 으로 수정함


// function gameEnd(){
//   gameArea.removeEventListener('click',function(eventTarget){
//     // console.log(eventTarget);
//     // console.log(eventTarget.target.className);
//     if(eventTarget.target.className ==="dotTarget"){
//       console.log(eventTarget);
//       eventTarget.target.remove();
      
//       // 
//       temp++;
//       classList[1].textContent = "Score : "+temp;
//       // 랜덤 생성 모듈
//       addDot()
//     } else {
//       console.log('잘못 누르셨습니다.')
//     }
//   });
// };







//* 로직 파트 및 이벤트 리스터 파트 ---------------------------------

let bestScore =0;
let temp = 0;


// * 시작 버튼 누를 시, temp 초기화 및 bestScore를 비교하여 남김
// * best rank 비교 연산자
// * 클릭 -> inputValue만큼 게임이 실행(3개의 닷이 생김), 작동된 동안 스코어를 게시 -> removeAll을 하며 종료


start.addEventListener('click',function(){
  console.log("start 버튼 누름");
  console.log(userInput.value);

  // //* 템프 초기화 로직
  // temp = 0;
  // console.log(temp, "템프 초기화");

  // * 초기 3개 세팅
  for(i=0; i<3; i++){
    addDot();
  }

  // * 입력값 setTimeout 시간 세팅 이후 clear 함수 실행
  // 일정 시간 후 : 모든 자식 요소 삭제, removeEventListener 실행, rank 비교 및 반영, temp 초기화
  setTimeout(function(){
    console.log('setTimeout 실행됨');
    removeAll();


    // * rank 비교 로직
    if(bestScore < temp ) {
      console.log('rank비교로직 참')
      classList[0].textContent = "Best Rank : " + temp +", "+ userInput.value+"초";
    } else {
      console.log('rank비교로직 불')
    }

    // temp 초기화
    temp = 0;
    console.log(temp, "템프 초기화");

  },userInput.value*1000);
});
// ! 로직이 중복되어 점수가 배수로 오르는 버그 발견, gameEnd 가 작동하지 않는 것으로 보임
// ? 해결 : 로직 항상 구동, if문으로 작동하도록 함.




