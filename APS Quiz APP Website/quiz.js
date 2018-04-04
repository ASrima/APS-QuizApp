var currentQuestion = 0; //first question of the array
var score = 0; //initial value is 0
var container = document.getElementById('quizConatiner'); 
var questionElements= document.getElementById('question');
var option1=document.getElementById('opt1'); //get the options from radio buttons
var option2=document.getElementById('opt2');
var option3 =document.getElementById('opt3');
var option4 = document.getElementById('opt4');
var totalQuestions = questions.length; //get questions from question.js file
var nextButton = document.getElementById('next-btn');
var resultContainer = document.getElementById('result');

function loadQuestion(questionIndex){
    var ques = questions[questionIndex];
    questionElements.textContent = (questionIndex  +1) +'. '+ques.question;

    option1.textContent = ques.option1;
    option2.textContent=ques.option2;
    option3.textContent=ques.option3;
    option4.textContent=ques.option4;
};

function loadNextQuestion (){
    var selectedOption = document.querySelector('input[type=radio]:checked'); //to check if the user selected an option or not
    if(!selectedOption){ //if the user does not select an answer the alert message will pop up
        alert("Please select an answer");
        return;
 
   }
   var answer = selectedOption.value;
   if(questions[currentQuestion].answer == answer){

    score +=10; //if the answer is correct the user gets 10 points

   }
   selectedOption.checked = false;
   currentQuestion++;
   if(currentQuestion == totalQuestions -1){
       nextButton.textContent ="Submit";
   }
   if (currentQuestion == totalQuestions){
       container.style.display='none';
       resultContainer.style.display='';
       resultContainer.textContent="Your Score: " + score;
       return;
   
   }
   loadQuestion(currentQuestion);
    
}
loadQuestion(currentQuestion);