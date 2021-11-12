/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/
intMin = parseInt (prompt("Please enter the lowest number (but no lower than 0) for your guessing range.")); //prompts user for lower range number

while (intMin <0 || isNaN(intMin)== true){ //tests inMin to see if user input is a number no lower than 0

intMin = prompt("Must be a number no lower than 0.");
}


/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/

intMax = parseInt (prompt("Please enter the highest number for your guessing range. It must be at least 2 higher than " + intMin + "."));

while (intMax < (intMin + 2) || isNaN(intMax)== true){ //test intMax to see if user input is a number at least 2 more than intMin

	intMax = parseInt(prompt("Must be a number at leat two more than " + intMin + "."));
}


/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt(Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// set the loop counter

intCount = 1;

/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/

intGuess = parseInt(prompt("What is your guess on the random number between " + intMin + " and " + intMax + "."));

while (intGuess < intMin || intGuess > intMax || isNaN(intGuess)== true){ //tests intGuess to see if user input is a number between intMin and intMax

	intGuess = parseInt(prompt("Guess must be between " + intMin + " and " + intMax + "."));
}


/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

 while (intGuess !== intRandom){

	if (intGuess < intRandom){
		
		intGuess = parseInt(prompt("Guess is too low!")); //if user input is lower than intRandom an alert will tell them their guess is too low
	}

	else{
		intGuess = parseInt(prompt("Guess is too high!")); //if user inout is higher than intRandom an alert will tell them their guess is too high
	}
	intCount ++; //counter increases by one
 }
 
 
 
 
 
 
 

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");

