class CrapsCash{
displayElement:any
userInputElement: any
plrBetInput: any
plrBetInputDisplay: any;
    
constructor(){
this.plrBetInput= document.getElementById("plyrBet") 
this.plrBetInputDisplay= document.getElementById("display")   
this.displayElement = document.getElementById("display")
this.userInputElement= document.getElementById("plyrCashToTable");}

betAmount: number;
betMessage: string;
getPlyrCashAvail: number;
playerCash: number;
setPlrCashAvail : number;

setPlrCash(){  //get the amount the plyer wants to bring to the table.
let playerCashOnTable = this.userInputElement.value;
this.betMessage = "You have made " + playerCashOnTable + " available for betting. How much would you like to bet?";
let playerCash = playerCashOnTable;
console.log("player cash:" + playerCash);

return this.betMessage;
}

plyrCashToTable(){
    this.displayElement.innerHTML += this.setPlrCash();
}

setPlyrCashAvail(){//set the amount of money the player has brought to the table.
    let getPlyrCashAvail = this.setPlrCashAvail;
    return getPlyrCashAvail;
}

setPlyrBet(){//get the bet from the player.
 let betAmount = this.plrBetInput.value;

    if(betAmount <= this.setPlyrCashAvail){ 
         this.betMessage = "You have made a bet of" + betAmount + ". Please take your first roll";
    }else {
         this.betMessage = "You have place a bet larger than your available cash. Please wager a smaller amount.";
    }
    console.log("player bet:" + this.getPlyrCashAvail);
    return this.betMessage
}
currentPlyrBet(){
    this.plrBetInputDisplay.innerHTML += this.setPlyrBet();
}

addPlyrWinnings(){
    //add setPlyrBet to plyrCashAvail
    console.log("getPlyrCashAvail: " + this.getPlyrCashAvail)
    this.getPlyrCashAvail += this.betAmount;
    this.betMessage="You won." + this.betAmount + "has been added to your total. You now have:" + this.getPlyrCashAvail +". Would you like to play again?";
    return this.betMessage;
}

minusPlyrLoss(){
    //minus setPlyrBet to plyrCashAvail
    this.getPlyrCashAvail -= this.betAmount;
    this.betMessage="You lost." + this.betAmount + "has been deducted from your total. You now have:" + this.getPlyrCashAvail +". Would you like to play again?";
    return this.betMessage;
}

/*

 setPlayerPoint() {
    let setPlayerPoint = this.point;
    return setPlayerPoint;
}

takePlyrBet = function(){
    this.getPlyrCashAvail -= setPlyrBet();
}

*/
}