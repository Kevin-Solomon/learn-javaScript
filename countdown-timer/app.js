let Eledays = document.querySelector('.days');
let Elehours = document.querySelector('.hours');
let Eleminutes = document.querySelector('.minutes');
let Eleseconds = document.querySelector('.seconds');
function displayDate() {
  const currentDate = new Date(); //returns new date object
  const newDate = new Date(2022, 0, 1); //returns new date object
  let TotsecondsLeft = (newDate - currentDate) / 1000;
  let daysLeft = Math.floor(TotsecondsLeft / 86400);
  let hoursLeft = Math.floor((TotsecondsLeft / 3600) % 24);
  let minutesLeft = Math.floor((TotsecondsLeft / 60) % 60);
  let secondsLeft = Math.floor(TotsecondsLeft % 60);
  // console.log(minutesLeft)
  // console.log(minutesLeft)
  console.log(secondsLeft);
  Eledays.innerText = daysLeft;
  Elehours.innerText = hoursLeft;
  Eleminutes.innerText = minutesLeft;
  Eleseconds.innerText = secondsLeft;
}
setInterval(displayDate, 1000);
