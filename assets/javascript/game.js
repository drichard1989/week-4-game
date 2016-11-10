// - First, we need to create all of the variables we think we are going to need. 
// - Then, we need to create all of the functions we think we are going to need. 
// 	-Function for the start of the game, called reset.
// 		-This will do a series of random calculations. 
// 			- First, randomly calculate a randomGoalNumber for the user to try and get to.
// 				- This number must be between 19 and 120, and will be visible.
// 			- Then, the computer will also randomly calclulate random numbers for each of the 4 images. 
// 				- rubyNumber, emeraldNumber, sapphireNumber, topazNumber.
// 					- These numbers must be between 1 and 12, and not be visible.
// 	- Then, we will create a function that will run when an image is clicked.
// 		- When any of the 4 buttons are clicked, they are added together in the yourTotalScore area. 
// 		- The value will be added in the display for yourTotalScore.
// 			- If accumulatedScore is larger than the randomGoalNumber, you lose, game resets, and adds a loss.  
// 			- If accumulatedScore is = to the randomGoalNumber, you win, and reset function runs after adding a win.

// - Then, write your HTML inline? code to plug in the variables on the DOM, and hopefully the thing starts to work!

$(document).ready(function(){

// Variables needed
var randomGoalNumber = Math.floor(Math.random()*101) + 19;
var wins = 0;
var losses = 0;
var accumulatedScore = 0;
var rubyNumber = Math.floor(Math.random()*12) + 1;
var emeraldNumber = Math.floor(Math.random()*12) + 1;
var sapphireNumber = Math.floor(Math.random()*12) + 1;
var topazNumber = Math.floor(Math.random()*12) + 1;

// This applies the values created above to the value of the button itself.
$("#rubyButton").val(rubyNumber);
$("#emeraldButton").val(emeraldNumber);
$("#sapphireButton").val(sapphireNumber);
$("#topazButton").val(topazNumber);

// This consoles the goal number for me to see
console.log("Your goal: " + randomGoalNumber);

// This function resets the game on demand.

function reset() {
	accumulatedScore = 0;
	var rubyNumber = Math.floor(Math.random()*12) + 1;
	var emeraldNumber = Math.floor(Math.random()*12) + 1;
	var sapphireNumber = Math.floor(Math.random()*12) + 1;
	var topazNumber = Math.floor(Math.random()*12) + 1;
	randomGoalNumber = Math.floor(Math.random()*101) + 19;
	// This re-applies the values created above to the value of the button itself.
	$("#rubyButton").val(rubyNumber);
	$("#emeraldButton").val(emeraldNumber);
	$("#sapphireButton").val(sapphireNumber);
	$("#topazButton").val(topazNumber);
	console.log("New objective: " + randomGoalNumber);

};

// This function is what we call an event listener, and runs the function when one of the buttons is clicked. 
$(document).on("click", "button", function()
	{

		// This takes the accumulatedScore variable, and makes it = to the values that are clicked, 
		// but only after they are converted to numbers. They were strings, and were concatenating.
		accumulatedScore +=parseInt($(this).val());

		// This consoles the accumulatedScore to see what it is returning.
		console.log("Your score: " + accumulatedScore); 

		// This compares the accumulatedScore to the randomGoalNumber, and if the user makes it equal to , 
		// and is successful, then it increases the wins by 1, displays a winning alert, and console.logs 
		// the wins to make sure they are increasing.
		if (accumulatedScore == randomGoalNumber) {
			wins++;
			alert("You finally won something!");
			console.log("Win count :" + wins);
			reset();
			
		} 
		// This compares the accumulatedScore to the randomGoalNumber, and if the user makes the accumulatedScore 
		// larger than the randomGoalNumber, they add a loss, an alert shows up on the page making them feel like
		// a looser,the game resets, and it consoles the loss count.
		if (accumulatedScore > randomGoalNumber) {
			losses ++ ;
			alert("Oh no! You suck again!");
			console.log("Loss count: " + losses);
			reset();
		
		};


		


	}
	)
});




