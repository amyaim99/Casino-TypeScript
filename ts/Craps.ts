class Craps{
    displayElement:any    
    userInputElement: any

gameMessage: string;
gameStatus: number;
point: number;

//make getter/setter

constructor(){
    this.displayElement = document.getElementById("display")
    this.userInputElement= document.getElementById("user_input");}

firstRoll(){
let diceRollTotal =dice.rollDice(2); 
   
switch (diceRollTotal) {
case 7:
case 11:
//crapscash.addPlyrWinnings();
this.gameMessage = "You rolled a: " + diceRollTotal +  crapscash.addPlyrWinnings() ;
this.gameStatus = 1;

break;
case 2:
case 3:
case 12:
this.gameMessage = "You rolled a: " + diceRollTotal + crapscash.minusPlyrLoss();
this.gameStatus =2;

//loseBet();
break;
default:
//player.setPlayerPoint(diceRollTotal);
this.gameMessage = "Your point has be set to: " + diceRollTotal + ". Please roll again.";
this.gameStatus =3;
this.point = diceRollTotal;
break;
}
return "</br>" +this.gameMessage;
}

firstDiceRoll(){
    this.displayElement.innerHTML += this.firstRoll();
}
getPlayerPoint(){}

 setPlayerPoint() {
    let setPlayerPoint = this.point;
    return setPlayerPoint;
}

nextRoll = function() {
console.log("point" + this.setPlayerPoint())
//this.shooter = 0; Need to reset shooter to 0 after each roll
let shooter = dice.rollDice(2);
console.log("shooter" + shooter)
//add payout to bank
switch (shooter) {
case this.shooter = this.setPlayerPoint():
this.gameMessage = "You matched your point. " + shooter +  crapscash.addPlyrWinnings();

break;
case 7:
//case 11:
this.gameMessage =  "You rolled a: " + shooter + crapscash.minusPlyrLoss();;
// loseBet();
this.gameStatus =2;
break;
case 2:
this.gameMessage = +   "You rolled a: " + shooter +crapscash.addPlyrWinnings();
// addWinnings();
this.gameStatus =1;
break;
default:
this.gameMessage ="You rolled a: " + shooter +" you need to roll a " + this.point + " Please roll again.";
this.gameStatus =3;
break;
}
return "</br>" + this.gameMessage;
}
nextDiceRoll(){
    this.displayElement.innerHTML += this.nextRoll();
}

}