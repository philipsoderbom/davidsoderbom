/*=========Loader=============*/
window.addEventListener('load', function() {
	const loader = document.querySelector('.loader');
	loader.className += ' hidden';
	
})

/*===============Question Array================*/
var questions = [{
	"question": "Which was David's very first released song?",
	"option1": "Back to You",
	"option2": "Melbourne",
	"option3": "Coming Home",
	"option4": "Hate the Most",
	"answer": "3"
}, {
	"question": "How long did it take for David to acquire a total of 700 listeners?",
	"option1": "3 weeks",
	"option2": "1 month",
	"option3": "3 months",
	"option4": "Half a year",
	"answer": "2"
}, {
	"question": "Which country, besides Sweden, has the most listeners to David's music?",
	"option1": "Denmark",
	"option2": "Germany",
	"option3": "Norway",
	"option4": "Czech Republic",
	"answer": "4"
}, {
	"question": "Who is David's current inpiration?",
	"option1": "Martin Garrix",
	"option2": "Hardwell",
	"option3": "Alan Walker",
	"option4": "Salvatore Ganacci",
	"answer": "1"
}]


var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.querySelector('#quizContainer');
var questionEl = document.querySelector('#question');
var opt1 = document.querySelector('#opt1');
var opt2 = document.querySelector('#opt2');
var opt3 = document.querySelector('#opt3');
var opt4 = document.querySelector('#opt4');
var nextButton = document.querySelector('#nextButton');
var resultCont = document.querySelector('#result');



function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
}


function loadNextQuestion() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if (!selectedOption) {
		alert('Please select an answer');
		return;
	}
	var answer = selectedOption.value;
	if (questions[currentQuestion].answer == answer) {
		score++;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if (currentQuestion == totQuestions - 1) {
		nextButton.textContent = 'Finish';
	}
	if (currentQuestion == totQuestions) {
		container.style.display = 'none';
		resultCont.style.display = 'block';
		
		if (score == 4) {
			resultCont.textContent = 'Congratulations! You Scored ' + score + '/4';
			document.querySelector('#unlock').style.display = 'block';
		}
		else{
			resultCont.textContent = 'Not quite! You got ' + score + '/4';
		}
		return;
	}
	loadQuestion(currentQuestion);
	
}

loadQuestion(currentQuestion);


/*====================================*/
const material = document.querySelector('.locked');
function unlockContent() {
	if (score == 4) {
		material.classList.remove('locked');
	}
	else{
		alert('You will need to answer all questions correctly')
	}
}









