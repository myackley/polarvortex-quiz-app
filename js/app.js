$(document).ready(function() {

	// establish 'question' class
	function question(thequestion,choice1,choice2,choice3,choice4,correctChoice) {
		// |- questions 1,2,3,4
		this.thequestion = thequestion;
		this.choice1 = choice1;
		this.choice2 = choice2;
		this.choice3 = choice3;
		this.choice4 = choice4;
		// |- correct answer
		this.correctChoice = correctChoice;
	};

	// set up question objects
	var question1 = new question(
		"thequestion1",
		"Question 1-1 this one",
		"Question 1-2",
		"Question 1-3",
		"Question 1-4",
		"Question 1-1 this one"
		);

	var question2 = new question(
		"thequestion2",
		"Question 2-1",
		"Question 2-2 this one",
		"Question 2-3",
		"Question 2-4",
		"Question 2-2 this one"
		);

	var question3 = new question(
		"thequestion3",
		"Question 3-1 this one",
		"Question 3-2",
		"Question 3-3",
		"Question 3-4",
		"Question 3-1 this one"
		);

	var question4 = new question(
		"thequestion4",
		"Question 4-1",
		"Question 4-2",
		"Question 4-3 this one",
		"Question 4-4",
		"Question 4-3 this one"
		);

	// variables
	currentQuestion = question1;
	numCorrect = 0;

	// start quiz function
	var startQuiz = function() {
		$(".question1").show()
		currentQuestion = question1;
	};
	startQuiz();

	// chosen question
	$(".quiz-area section li").click(function() {
		var picked = $(this);
		var correct = currentQuestion.correctChoice;

		// check if correct & add styles
		if (picked.text() === correct) {
			picked.parent("li").addClass("correct");
			numCorrect++;
		} else {
			picked.addClass("incorrect");
			$(".quiz-area section .continuearea").show().prepend("<p>Incorrect answer</p>");
		}

	});

	// continue to next question
	

	// start new quiz
	$(".playagain").click(function() {
		startQuiz();
	});


});