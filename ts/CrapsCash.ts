class CrapsCash{
displayElement:any
userInputElement: any
    
constructor(){
this.displayElement = document.getElementById("display")
this.userInputElement= document.getElementById("user_input");}

betAmount: number;
betMessage: string;
getPlyrCashAvail: number;

setPlrCash(playerINPUT){
    var response = this.userInputElement.value
    let playerCash = "player input";
    return playerCash;
}

plyrCashAvail(){
    let getPlyrCashAvail = this.setPlrCash;
    return getPlyrCashAvail;
}

takePlyrBet = function(){
    this.getPlyrCashAvail -= setPlyrBet();
}

setPlyrBet(inputfrompler:number){
    this.betMessage = "";
    if(inputfrompler <= this.plyrCashAvail){

    }else if(){

    }
}

addPlyrWinnings(){
    //add setPlyrBet to plyrCashAvail
}

minusPlyrLoss(){
    //minus setPlyrBet to plyrCashAvail
}

}