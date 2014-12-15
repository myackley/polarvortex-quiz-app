$(document).ready(function() {

	// variables	
	var numCorrect = 0; // storage for # correct answers
	var curQ = 1;
	var numQ = 4; 
	var thisQ; // current question
	var questionText = $(".quiz-area h3");
	var questionChoices = $(".quiz_question-choices");
	var qnum = curQ = " of " + numQ;

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
		"question1-1 this one",
		false
	);

	var question2 = new question(
		"thequestion2",
		"question2-1",
		"question2-2 this one",
		"question2-3",
		"question2-4",
		"question2-2 this one",
		false
	);

	var question3 = new question(
		"thequestion3",
		"question3-1 this one",
		"question3-2",
		"question3-3",
		"question3-4",
		"question3-1 this one",
		false
	);

	var question4 = new question(
		"thequestion4",
		"question4-1",
		"question4-2",
		"question4-3 this one",
		"question4-4",
		"question4-3 this one",
		false
	);

	question.prototype.theAnswer = function() {
		return this.correctChoice;
	};

	var startQuiz = function() {
		// reset global variables
		numCorrect = 0;
		curQ = 1;
		thisQ = question1;

		// remove choices and question and reset image
		questionText.show().text("");
		questionChoices.show().empty();
		$(".quiz-area img").attr("src","img/zero-temp.png");
		$("body").addClass("winterbg");

		// load question
		questionText.append("Question " + qnum + ": " + thisQ.thequestion);
		questionChoices.append("<li><p>" + thisQ.choice1 + "</p></li>");
		questionChoices.append("<li><p>" + thisQ.choice2 + "</p></li>");
		questionChoices.append("<li><p>" + thisQ.choice3 + "</p></li>");
		questionChoices.append("<li><p>" + thisQ.choice4 + "</p></li>");

		// |- reset thermometer
		console.log("start");
	};

	var questionCheck = function(p,c) {
		console.log("checking question...")

		// check if correct
		if (p.text() === c.text()) {
			thisQ.correctBool = true;
			p.addClass("correct");
			console.log("Fuck yeah!");
			numCorrect++;
		} else {
			thisQ.correctBool = false;
			c.addClass("correct")
			p.addClass("incorrect");
			console.log("Aw shit");
		}

		// swap out graphics
		if (numCorrect == 1) {
			$(".quiz-area img").attr("src","img/twenty-temp.png");
		} else if (numCorrect == 2) {
			$(".quiz-area img").attr("src","img/fourty-temp.png");
		} else if (numCorrect == 3) {
			$(".quiz-area img").attr("src","img/sixty-temp.png");
		} else if (numCorrect == 4) {
			$("body").removeClass("winterbg");
			$("body").addClass("thawedbg");
		}

		// show Continue
		$("#continue").show();
	};

	// click Continue to load new question
	var continueQuiz = function() {
		curQ++;

		// remove answers from ordered list
		questionText.text("");
		questionChoices.empty();

		// |- load new answers
		if (thisQ == question1) {
			thisQ = question2;
		} else if (thisQ == question2) {
			thisQ = question3;
		} else if (thisQ == question3) {
			thisQ = question4;
		} else {
			// |- if no more questions show 'finish' div
			questionText.hide();
			questionChoices.hide();
			$("#continue").hide();

			if (numCorrect === numQ) {
				$(".correctfinish").show();
			} else {
				$(".missedfinish").show();
			}
		}

	};




	startQuiz();


	$(".quiz_question-choices > li").click(function() {
		event.preventDefault();

		var picked = $(this);
		var correct;

		$(".quiz_question-choices li").each(function() {
			if ($(this).find("p").text() == thisQ.correctChoice) {
				correct = $(this);
			} else {
				return false;
			}
		});

		// set the 'question' object bolean and display continue
		questionCheck(picked,correct);

	});

	// play again button
	$(".playagain").click(function() {
		startQuiz();
	});

});