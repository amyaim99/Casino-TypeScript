class CrapsCash{
displayElement:any;
userInputElement: any;
plrBetInput: any;
plrBetInputDisplay: any;
    
constructor(){
this.plrBetInput= document.getElementById("plyrBet") 
this.plrBetInputDisplay= document.getElementById("display")   
this.displayElement = document.getElementById("display")
this.userInputElement= document.getElementById("plyrCashToTable");
}

betAmount: number;
betMessage: string;
getPlyrCashAvail: number;
playerCash: number;
playerCashOnTable: number;

//setPlrCashAvail : number;

setPlrCash(){  //get the amount the plyer wants to bring to the table.
this.playerCashOnTable = this.userInputElement.value;
if(this.userInputElement.value ==null){
    this.betMessage= "</br> Please insert proper value";
 }else {
this.betMessage = "You have made " + this.playerCashOnTable + " available for betting. How much would you like to bet?";
 }
this.playerCash = this.playerCashOnTable;
//this.setPlyrCashAvail();
console.log("player cash:" + this.playerCash);

return this.betMessage;
}

plyrCashToTable(){
    this.displayElement.innerHTML += this.setPlrCash();
}

setPlyrBet(){//get the bet from the player.
  this.betAmount = this.plrBetInput.value;
 console.log("Bet Amount:" + this.betAmount);
if(isNaN(this.plrBetInput.value)|| this.betAmount.toString()==""){
   this.plrBetInputDisplay.innerHTML += "</br> Please insert proper value";
}else {
            if(this.betAmount <= this.playerCash){ 
                this.betMessage = "You have made a bet of" + this.betAmount + ". Please take your first roll";
            }else {
                this.betMessage = "You have place a bet larger than your available cash. Please wager a smaller amount.";
            }
    }
    console.log("Money Available:" + this.playerCash);
    return "</br>" + this.betMessage;
}
currentPlyrBet(){
    this.plrBetInputDisplay.innerHTML += this.setPlyrBet();
}

addPlyrWinnings(){
    //add setPlyrBet to plyrCashAvail
    this.getPlyrCashAvail = this.playerCash + this.betAmount;
    console.log("Player cash after win"+this.getPlyrCashAvail);    
    this.betMessage="You won. " + this.betAmount + " has been added to your total. You now have: " + this.getPlyrCashAvail +". Would you like to play again?";
   //console.log("getPlyrCashAvail: " + this.getPlyrCashAvail);
    return "</br>" + this.betMessage;
}
minusPlyrLoss(){
    //minus setPlyrBet to plyrCashAvail
    this.getPlyrCashAvail = this.playerCash - this.betAmount;
    console.log("Player cash after loss"+this.getPlyrCashAvail); 
    this.betMessage="You lost." + this.betAmount + "has been deducted from your total. You now have:" + this.getPlyrCashAvail +". Would you like to play again?";
    return "</br>" + this.betMessage;
}

/*
setPlyrCashAvail(){//set the amount of money the player has brought to the table.
     this.getPlyrCashAvail = this.playerCash + this.betAmount;
    console.log("setPlyrCashAvail has run."+this.getPlyrCashAvail)
    return this.getPlyrCashAvail;
}
*/
}