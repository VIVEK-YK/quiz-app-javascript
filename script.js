console.log('ehllo');

let questions = [
    {
      question: "What is the scientific name of a butterfly?",
      answers: ["Apis", "Coleoptera", "Formicidae", "Rhopalocera"],
      correctAnswer: "Rhopalocera",
    },
    {
      question: "How hot is the surface of the sun?",
      answers: ["1,233 K", "5,778 K", "12,130 K", "101,300 K"],
      correctAnswer: "5,778 K",
    },
    {
      question: "Who are the actors in The Internship?",
      answers: [
        "Ben Stiller, Jonah Hill",
        "Courteney Cox, Matt LeBlanc",
        "Kaley Cuoco, Jim Parsons",
        "Vince Vaughn, Owen Wilson",
      ],
      correctAnswer: "Vince Vaughn, Owen Wilson",
    },
    {
      question: "What is the capital of Spain?",
      answers: ["Berlin", "Buenos Aires", "Madrid", "San Juan"],
      correctAnswer: "Madrid",
    },
    {
      question:
        "What are the school colors of the University of Texas at Austin?",
      answers: [
        "Black, Red",
        "Blue, Orange",
        "White, Burnt Orange",
        "White, Old gold, Gold",
      ],
      correctAnswer: "White, Burnt Orange",
    },
    {
      question: "What is 70 degrees Fahrenheit in Celsius?",
      answers: ["18.8889", "20", "21.1111", "158"],
      correctAnswer: "21.1111",
    },
    {
      question: "When was Mahatma Gandhi born?",
      answers: [
        "October 2, 1869",
        "December 15, 1872",
        "July 18, 1918",
        "January 15, 1929",
      ],
      correctAnswer: "October 2, 1869",
    },
    {
      question: "How far is the moon from Earth?",
      answers: [
        "7,918 miles (12,742 km)",
        "86,881 miles (139,822 km)",
        "238,400 miles (384,400 km)",
        "35,980,000 miles (57,910,000 km)",
      ],
      correctAnswer: "238,400 miles (384,400 km)",
    },
    {
      question: "What is 65 times 52?",
      answers: ["117", "3120", "3380", "3520"],
      correctAnswer: "3380",
    },
    {
      question: "How tall is Mount Everest?",
      answers: [
        "6,683 ft (2,037 m)",
        "7,918 ft (2,413 m)",
        "19,341 ft (5,895 m)",
        "29,029 ft (8,847 m)",
      ],
      correctAnswer: "29,029 ft (8,847 m)",
    },
    {
      question: "When did The Avengers come out?",
      answers: ["May 2, 2008", "May 4, 2012", "May 3, 2013", "April 4, 2014"],
      correctAnswer: "May 4, 2012",
    },
    {
      question: "What is 48,879 in hexidecimal?",
      answers: ["0x18C1", "0xBEEF", "0xDEAD", "0x12D591"],
      correctAnswer: "0xBEEF",
    },
  ];

let exit = document.querySelector('.exit');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let submit = document.querySelector('.submit');
let question = document.querySelector('.question');
let answers = document.querySelector('.answers');
let answer = document.querySelectorAll('.answer');
let showScore = document.querySelector('.showScore');
let a = document.querySelector('.a');
let b = document.querySelector('.b');
let c = document.querySelector('.c');
let d = document.querySelector('.d');
window.onload = (event) =>{
        var i = -1;
        var score = 0;
        var currentQuestion = 0;
        answers.style.display = 'none';
        prev.style.display = 'none';
    prev.addEventListener('click', prevBtn);
    next.addEventListener('click', nextBtn);


    function nextBtn(){
        i++;
        currentQuestion++;
        if(i <= questions.length){
            answers.style.display = 'flex'
            prev.style.display = 'flex'
            question.innerHTML = `Q.${currentQuestion} &nbsp; ${questions[i].question} `
            a.innerHTML = questions[i].answers[0]
            b.innerHTML = questions[i].answers[1]
            c.innerHTML = questions[i].answers[2]
            d.innerHTML = questions[i].answers[3]
          answer.forEach(element => {
            element.style.background = 'gray'
          });  
        }
        if(i>= questions.length -1){
            next.style.display = 'none'
        }
        if(i==0){
            prev.style.display = 'none'
        }
    }

    function prevBtn(){
      i--;
      currentQuestion--;
      if(i <= questions.length){
          answers.style.display = 'flex'
          next.style.display = 'flex'
          question.innerHTML = `Q.${currentQuestion} &nbsp; ${questions[i].question} `
          a.innerHTML = questions[i].answers[0]
          b.innerHTML = questions[i].answers[1]
          c.innerHTML = questions[i].answers[2]
          d.innerHTML = questions[i].answers[3]
        answer.forEach(element => {
          element.style.background = 'gray'
        });  
      }
      if(i==0){
          prev.style.display = 'none'
      }
    }
    exit.addEventListener('click',()=>{
      window.location.reload();
    })
    answer.forEach(element => element.addEventListener('click',()=>{
      let x = element.innerText;
      let y = questions[i].correctAnswer
      console.log(x)
      console.log(y)
      if(x==y){
        element.style.backgroundColor = 'blue'
        score++
      }
      else{
        element.style.backgroundColor = 'red'
      }
    }))
    submit.addEventListener('click', ()=>{
      showScore.textContent = `You have scored ${score} out of ${questions.length}`;
      question.style.display = 'none';
      prev.style.display = 'none'
      next.style.display = 'none'
      answers.style.display = 'none'
      exit.innerHTML = 'Replay'
      submit.style.display = 'none'
    })
}