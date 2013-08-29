$(document).ready(function(){
	var score = 0;
	var questions = [
		/*this is a nested array*/
		['How many moons does Earth have?', 1, 1, 2, 3, 4],
		['How many moons does Saturn have?', 31, 5, 31, 9, 15],
		['How many moons does Venus have?', 0, 2, 4, 8, 0]
	];
	askQuestion(questions[0]);
	/*function askQuestions*/
	function askQuestion(question) {
		if (typeof question === 'undefined'){
			endQuestion();
		} else {
			$('.genesis').fadeIn(200).html(question[0] 
				+ '<div class=\'quiz\'>'
				+ '<div class=\'quizQuestions\'>'
				+ '<input type=\'radio\' name=\'myradio\' value=\'' + question[2] + '\'>&#160;&#160;' + question[2] + '</input><br />'
				+ '<input type=\'radio\' name=\'myradio\' value=\'' + question[3] + '\'>&#160;&#160;' + question[3] + '</input><br />'
				+ '<input type=\'radio\' name=\'myradio\' value=\'' + question[4] + '\'>&#160;&#160;' + question[4] + '</input><br />'
				+ '<input type=\'radio\' name=\'myradio\' value=\'' + question[5] + '\'>&#160;&#160;' + question[5] + '</input><br />'
				+ '</div>'
				+ '</div>'
				+ '<div class=\'submission\'>ENTER</div>'
			, '');
			$('.submission').click(function(){
			var answer = $('input:radio:checked').val();
			if (answer == question[1]) {
				$('.genesis').fadeOut(200).delay(4000).fadeIn(1000);
				$('.answer').css({'opacity' : '1'}).delay(1000).fadeIn(200).html('That is correct!').delay(1750).fadeOut(1000);
				score++;
				askQuestion(questions[score]);
			} else {
				$('.genesis').fadeOut(200).delay(4000).fadeIn(1000);
				$('.answer').css({'opacity' : '1'}).delay(1000).fadeIn(200).html('Sorry. That is incorrect. Please try again.').delay(1750).fadeOut(1000);
			}
		});
		}
	}
	function endQuestion(){
		var message = 'Congratulations. You got ' + score + ' out of ' + questions.length + ' correct!';
		$('.genesis').remove();
		$('.answer').html(message).css({'display' : 'block'});
		$('.container').prepend('<div class=\'tryAgain\'>'
			+ 'Try Again?<br />'
			+ '<span id=\'answerYes\'>YES</span> '
			+ '<span>|</span> '
			+ '<span id=\'answerNo\'>NO</span>'
			+ '</div>');
		$('.tryAgain').css({'opacity' : '1'}).delay(5000).fadeIn(500);
		$('#answerYes').click(function(){
			window.location="index.html";
		});
		$('#answerNo').click(function(){
			$('.tryAgain').remove();
			$('.container').prepend('<div class=\'thankYou\'>'
				+ 'Thanks for playing my friend<br />'
				+ '<p>'
				+ '<a href=\'http://hungastryke.com/samples.html\'>'
				+ 'RETURN HOME'
				+ '</a>'
				+ '<span style=\'margin-left: 5px;\'>'
				+ '&#8594;'
				+ '</span>'
				+ '</p>'
				+ '</div>'
			);
			$('.thankYou').css({'opacity' : '1'}).delay(1000).fadeIn(500);
		});
	}
});