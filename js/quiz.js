$(document).ready(function() {

		var totalScore = 0;
		var wrongAnswers = 0;

		function shuffleQuestionsStack(array) {
  			var m = array.length, t, i;

			// While there remain elements to shuffle…
			while (m) {

				// Pick a remaining element…
				i = Math.floor(Math.random() * m--);

				// And swap it with the current element.
				t = array[m];
				array[m] = array[i];
				array[i] = t;
			}

			return array;
		}

		var shuffledQuestionStack = shuffleQuestionsStack(questionsStack);
		//console.log(shuffledQuestionStack);

		function generateQuestion (questionNumber) {

			var currentQuestion = shuffledQuestionStack[questionNumber],
				choices = currentQuestion.choices,
				choicesLen = currentQuestion.choices.length;

			$('#question').empty();
			$('#choices').empty();
			$('#next-question').prop('disabled', true);
			$('#question').text(currentQuestion.question);

			for (var i = 0; i < choicesLen; i++) {
				$('#choices').append('<input class="userAnswer" type="radio" name="radio" value="'+ i +'"><span class="answerWrap">'+ choices[i] +'</span><br>');
			}

		}


		function checkUserChoise (questionNumber) {
			
			var trueAnswer = shuffledQuestionStack[questionNumber].correctAnswer,
				points = shuffledQuestionStack[questionNumber].points;

			$('.userAnswer').on('click', function() {
				var userAnswer = +$(this).val();

				$('.userAnswer').prop('disabled', true);
				$('#next-question').prop('disabled', false);
				$('#user-feedback').show();

				// console.log('user: ' + userAnswer);
				// console.log('true: ' + trueAnswer);

				if (userAnswer === trueAnswer) {
					totalScore += points;
					$('#user-feedback').text('Правилен отговор!').css({background: '#40DE46', color: 'white'});	
				} else {
					wrongAnswers += 1;
					$('#user-feedback').text('Грешен отговор!').css({background: '#F23F3F', color: 'white'});
				}
			});
		}

		
		function nextQuestion () {
			var current = 0,
				len = questionsStack.length;

			$('#next-question').on('click', function() {
				current += 1;
		
				if (current === len || wrongAnswers === 3) {
					current = 0;
					restartQuiz();
				}
				
				$('#user-feedback').fadeOut('slow');
				generateQuestion(current);
				checkUserChoise(current);
			});
			
		}
		
		nextQuestion();


		function startQuiz () {
			$('#start-quiz').on('click', function() {
				$(this).parent().hide();

				generateQuestion(0);
				checkUserChoise(0);

				$('#quiz').fadeIn();
			});
		}

		startQuiz();

		function restartQuiz () {
			$('#quiz').hide();
			$('#end-screen').fadeIn();
			$('#final-result').text(totalScore);

			$('#restart-quiz').on('click', function() {
				location.reload();
			});
		}
});