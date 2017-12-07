class Craps{
gameMessage: string;
gameStatus: number;
shooter: number;
point: number;



// setDiceRollTotal = function(){
// let drt = new Dice;
// var diceRollTotal = drt.rollDice(2)
// }


firstRoll=function(diceRollTotal){
switch (this.diceRollTotal) {
case 7:
case 11:
this.gameMessage = "You rolled a: " + this.diceRollTotal + "! You win!";
this.gameStatus = 1;
// addWinnings();
break;
case 2:
case 3:
case 12:
this.gameMessage = "You rolled a: " + this.diceRollTotal + "! You lose!";
this.gameStatus =2;

//loseBet();
break;
default:
//player.setPlayerPoint(diceRollTotal);
this.gameMessage = "Your point has be set to: " + this.diceRollTotal + ". Please roll again.";
this.gameStatus =3;
break;
}
return this.gameMessage;
}

nextRoll = function() {

// if (this.diceRollTotal == player.getPlayerPoint()) {
//this.gameMessage = "You win!";
//addWinnings();
if(this.shooter == this.point){
this.gameMessage = "You win!";
//add payout to bank
} else {
switch (this.diceRollTotal) {
case 7:
case 11:
this.gameMessage = "You lose!";
// loseBet();
this.gameStatus =2;
break;
case 2:
this.gameMessage = "You win!";
// addWinnings();
this.gameStatus =1;
break;
default:
this.gameMessage = "You rolled a: " + this.diceRollTotal + " you need to roll a _____. Please roll again.";
//this.gameMessage = "You rolled a: " + this.diceRollTotal + " you need to roll a " + player.getPlayerPoint() + " Please roll again.";
// nextRoll(player);
this.gameMessage ="You rolled a: " +this.shooter +" you need to roll a " + this.point + " Please roll again.";
this.gameStatus =3;
break;
}


}
return this.gameMessage;


}


}