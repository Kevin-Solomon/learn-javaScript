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
let questionEl = document.getElementById("question");
let option_a = document.getElementById("a");
let option_b = document.getElementById("b");
let option_c = document.getElementById("c");
let option_d = document.getElementById("d");

let submitBtn = document.getElementById("submit")


submitBtn.addEventListener('click', nextQuestion)

let questionCounter = 0;
questionEl.innerHTML = questions[questionCounter].question;
option_a.innerHTML = questions[questionCounter].a;
option_b.innerHTML = questions[questionCounter].b;
option_c.innerHTML = questions[questionCounter].c;
option_d.innerHTML = questions[questionCounter].d;
let score = 0
function nextQuestion(event){
  let radio_options = document.querySelectorAll(".option");
  for (options of radio_options){
    if(options.checked && (options.getAttribute("data-option") ===questions[questionCounter].answer)){
      score++;
      console.log(score)}


  }

  //   if(options.checked === true){
  //     console.log(options)
  //     console.log(options.getAttribute("data-option"))
    
    
  // }
  

  
  // option_c
  // option_a
  // option_d
  
  questionCounter++;
  if(questionCounter>3){
    alert("U finished magga")
  }else{
  // console.log(questions[questionCounter])
  questionEl.innerHTML = questions[questionCounter].question;
  option_a.innerHTML = questions[questionCounter].a;
  option_b.innerHTML = questions[questionCounter].b;
  option_c.innerHTML = questions[questionCounter].c;
  option_d.innerHTML = questions[questionCounter].d;

  // console.log(score)
  }
}
