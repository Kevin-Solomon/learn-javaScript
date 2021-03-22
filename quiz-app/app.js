//array of objects containing questions,options and answer

const questions = [
  {
    question:"What is HTML ?",
    a:"Sup MF",
    b:"Sdsdad",
    c:"ASdadsadas",
    d:"HyperText Markup Language",
    answer:"d"
  },
  {
    question:"What is CSS ?",
    a:"Sup MF",
    b:"Sdsdad",
    c:"Cascading Style Sheet",
    d:"HyperText Markup Language",
    answer:"c"
  },
  {
    question:"What is JS ?",
    a:"JavaScript",
    b:"Sdsdad",
    c:"ASdadsadas",
    d:"HyperText Markup Language",
    answer:"a"
  },
  {
    question:"What is GGEZ ?",
    a:"Sup MF",
    b:"Good Game EZ",
    c:"ASdadsadas",
    d:"HyperText Markup Language",
    answer:"b"
  }
]

//grabbing question element
let questionEl = document.getElementById("question");
//label tag element
let option_a = document.getElementById("a");
let option_b = document.getElementById("b");
let option_c = document.getElementById("c");
let option_d = document.getElementById("d");
// submit button
let submitBtn = document.getElementById("submit")

//adding a click event listener on the submitBtn Obj
submitBtn.addEventListener('click', nextQuestion)
//initializing counter to 0
let questionCounter = 0;
//i could use onload event to instantiate the questions and options
questionEl.innerHTML = questions[questionCounter].question;
option_a.innerHTML = questions[questionCounter].a;
option_b.innerHTML = questions[questionCounter].b;
option_c.innerHTML = questions[questionCounter].c;
option_d.innerHTML = questions[questionCounter].d;
let score = 0
function nextQuestion(event){
  //grabbing radio input elements
  let radio_options = document.querySelectorAll(".option");
  if(radio_options[0].checked === false &&
    radio_options[1].checked === false &&
    radio_options[2].checked === false &&
    radio_options[3].checked === false){
      alert("pls Choose an option")
  }
}
