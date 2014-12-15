$(document).ready(function() {

	// variables	
	var numCorrect = 0; // storage for # correct answers
	var curQ = 1;
	var numQ = 4; 
	var thisQ; // current question

	// establish 'question' class
	function question(thequestion,choice1,choice2,choice3,choice4,correctChoice,correctBool) {
		// |- questions 1,2,3,4
		this.thequestion = thequestion;
		this.choice1 = choice1;
		this.choice2 = choice2;
		this.choice3 = choice3;
		this.choice4 = choice4;
		// |- correct answer
		this.correctChoice = correctChoice;
		// |- boolean for correct answer...default to false
		this.correctBool = correctBool;
	};

	// set up question objects
	var question1 = new question(
		"thequestion1",
		"question1-1 this one",
		"question1-2",
		"question1-3",
		"question1-4",
		this.choice1,
		false
	);

	var question2 = new question(
		"thequestion2",
		"question2-1",
		"question2-2 this one",
		"question2-3",
		"question2-4",
		this.choice2,
		false
	);

	var question3 = new question(
		"thequestion3",
		"question3-1 this one",
		"question3-2",
		"question3-3",
		"question3-4",
		this.choice1,
		false
	);

	var question4 = new question(
		"thequestion4",
		"question4-1",
		"question4-2",
		"question4-3 this one",
		"question4-4",
		this.choice3,
		false
	);

	question.prototype.theAnswer = function() {
		return this.correctChoice;
	};

	var startQuiz = function() {
		var questionText = $(".quiz-area h3");
		var questionChoices = $(".quiz_question-choices");

		// reset global variables
		numCorrect = 0;
		curQ = 1;
		thisQ = question1;

		// remove choices and question
		questionText.text("");
		questionChoices.empty();
		
		// load question
		questionText.text(thisQ.thequestion);
		questionChoices.append("<li><p>" + thisQ.choice1 + "</p></li>");
		questionChoices.append("<li><p>" + thisQ.choice2 + "</p></li>");
		questionChoices.append("<li><p>" + thisQ.choice3 + "</p></li>");
		questionChoices.append("<li><p>" + thisQ.choice4 + "</p></li>");

		// |- reset thermometer
		console.log("start");
	};

	var questionCheck = function(picked, correct) {
		// check answer()

		// set correctBool
		// changer()
		changer();
		console.log("checking question...")
	};

	// change classes and therm pic
	var changer = function() {


		// show Continue
		$("#continue").show();
	};

	// click Continue to load new question
	var continueQuiz = function() {
		// |- remove answers from ordered list
		// |- load new answers
		// |- if no more questions show 'finish' div
		console.log("continue quiz");
	};




	startQuiz();


	$(".quiz_question-choices > li").click(function() {
		event.preventDefault();



	});

	// play again button
	$(".playagain").click(function() {
		startQuiz();
	});

});