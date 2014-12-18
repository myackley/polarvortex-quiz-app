$(document).ready(function() {

	// establish 'question' class
	function question(choice1,choice2,choice3,choice4,correctChoice) {
		// |- questions 1,2,3,4
		this.choice1 = choice1;
		this.choice2 = choice2;
		this.choice3 = choice3;
		this.choice4 = choice4;
		// |- correct answer
		this.correctChoice = correctChoice;
	};

	// set up question objects
	var question1 = new question(
		"A constant, large-scale cyclone at both poles of the Earth",
		"The atmospheric effect of everyone in a region opening their freezers at once",
		"A consistant ice storm that only effects certain continents",
		"It's because of El Nino...",
		"A constant, large-scale cyclone at both poles of the Earth"
		);

	var question2 = new question(
		"Clockwise",
		"Counter-clockwise",
		"Up",
		"It's because of El Nino...",
		"Counter-clockwise"
		);

	var question3 = new question(
		"Clockwise",
		"Counter-clockwise",
		"Down",
		"It's because of El Nino...",
		"Clockwise"
		);

	var question4 = new question(
		"The average frequency of opened freezers in each hemisphere",
		"The average global temperature",
		"The hemospheric season",
		"It's because of El Nino...",
		"The hemospheric season"
		);

	// variables
	currentQuestion = question1;
	numCorrect = 0;

	// start quiz function
	var startQuiz = function() {
		// reset ui and variables
		$(".question1").show()
		numCorrect = 0;
		currentQuestion = question1;
		$(".correctfinish").hide();
		$(".missedfinish").hide();

		// reset graphics
		$(".quiz-area img").attr("src","img/zero-temp.png");
		$("body").removeClass("thawedbg");
		$("body").addClass("winterbg");

		// remove all classes
		$(".quiz-area section li").each(function() {
			$(this).removeAttr("class");
		});
	};
	startQuiz();

	// chosen question
	$(".quiz-area section li").click(function() {
		var picked = $(this);
		var correct = currentQuestion.correctChoice;

		// check if correct & add styles
		if (picked.text() === correct) {
			picked.addClass("correct");
			numCorrect++;
			$(".quiz-area .continuearea").show();
			$(".quiz-area .continuearea p").text("Correct!");
		} else {
			picked.addClass("incorrect");
			$(".quiz-area .continuearea").show();
			$(".quiz-area .continuearea p").text("Incorrect answer");
		}

		// change thermometer
		if (numCorrect == 1) {
			$(".quiz-area img").attr("src","img/twenty-temp.png");
		} else if (numCorrect == 2) {
			$(".quiz-area img").attr("src","img/fourty-temp.png");
		} else if (numCorrect == 3) {
			$(".quiz-area img").attr("src","img/sixty-temp.png");
		} else {
			return false;
		}

	});

	// continue to next question
	$("#continue").click(function() {
		// load next question
		if (currentQuestion == question1) {
			currentQuestion = question2;
			$(".question1").hide();
			$(".question2").show();
		} else if (currentQuestion == question2) {
			currentQuestion = question3;
			$(".question2").hide();
			$(".question3").show();
		} else if (currentQuestion == question3) {
			currentQuestion = question4;
			$(".question3").hide();
			$(".question4").show();
		} else {
			$(".question4").hide();
			if (numCorrect == 4) {
				$(".correctfinish").show();
				$("body").removeClass("winterbg");
				$("body").addClass("thawedbg");
			} else {
				$(".missedfinish").show();
			}
		}
		$(".continuearea p").text("");
		$(".continuearea").hide();
	});

	// start new quiz
	$(".playagain").click(function() {
		startQuiz();
	});


});