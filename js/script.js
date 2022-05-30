//use strict
"use strict"

function numberKing(){
// variables
	let userNumber = parseInt(document.getElementById("number").value);
	let counter= 1
	let factorial = 1
	
	 //do while loop for factorials
	do {
		factorial = factorial * counter
		counter = counter + 1
	} 
		while (counter <= userNumber)

	//output
	document.getElementById("factorial").innerHTML = "YES. YES! "+ factorial + " IS SO MUCH FOOD!! WITH ENOUGH OF THIS POWER, I CAN TURN E V E R Y T H I N G INTO NUMBERS!!! MWAHAHAHAHAHAHHAHAH! I AM THE NUMBER KING!";
	
	document.getElementById("number-king").innerHTML = '<img src="./images/number_king.png" width="600px" alt="Number king?!">';
}