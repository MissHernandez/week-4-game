

window.onload = function() {

	var wins = 0

	var losses = 0

	var counter = 0

	function startGame(){

	var randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;

	var hiddenVals = [];

	counter = 0

	$("#targetNumber").html("Target Number: " + randomNumber);
	$("#wins").html("Wins: " + wins);
	$("#losses").html("Losses: " + losses);
	$("#total-score").html("<h2>Your Total Score is</h2>" + "<h2>" + counter + "</h2>");

	for (var i = 0; i < 4 ; i++) {
		var value = Math.floor(Math.random() * (12 - 1)) + 1;
			while (hiddenVals.indexOf(value) > -1){
				value = Math.floor(Math.random() * (12 - 1)) + 1;
			}
			hiddenVals.push(value);
			console.log(hiddenVals);
	};

	$("#crystal1").attr("value", hiddenVals[0]);
	$("#crystal2").attr("value", hiddenVals[1]);
	$("#crystal3").attr("value", hiddenVals[2]);
	$("#crystal4").attr("value", hiddenVals[3]);

	$(".crystal-img").on("click", function() {
		var currentVal = $(this).attr("value");
		counter = counter + parseInt(currentVal);
		$("#win-lose").html("");
		console.log(counter);
	
		gameRound();

function gameRound() {
	if (counter < randomNumber) {
		$("#total-score").html("<h2>Your Total Score is</h2>" + "<h2>" + counter + "</h2>");
	}

	else if (counter === randomNumber) {
		$("#win-lose").html("You win!");
		wins++
		startGame();
	}

	else {
		$("#win-lose").text("You lose!");
		losses++
		startGame();
	};

};
	});


	};

	startGame();


};

