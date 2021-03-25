//start button
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const timerEl = document.querySelector(".timer");
console.log(startBtn)
startBtn.addEventListener('click', timer)

let currentTime = (25*60)-1;
function timer(){
  // let endTime = new Date().getTime() + 25*60*1000;
  // console.log(stop)
  let stop = setInterval(() => {

    if(currentTime === 0){
      console.log("sup")
      clearInterval(stop)
    }
    let seconds = currentTime%60;
    let minutesLeft = Math.floor(currentTime/60);
    // let seconds = secondsLeft%60;
    console.log(minutesLeft)
    console.log(seconds)
    seconds=seconds<10?`0${seconds}`:seconds;
    minutesLeft=minutesLeft<10?`0${minutesLeft}`:minutesLeft;
    timerEl.innerHTML=` ${minutesLeft}  :  ${seconds}`
    currentTime--;
    // console.log(stop)
  },1000)
  
}  