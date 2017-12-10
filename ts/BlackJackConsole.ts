class BlackJackGame{

  
   private displayElement:any;
   private getBetButton: any;
   constructor(){
    this.displayElement = document.getElementById("miniDisplay");
    this.getBetButton= document.getElementById("getBet");
   }
   playAgain(){
    console.log("Am I working")
    let blackJack: BlackJack = new BlackJack();
    this.displayElement.innerHTML ="Thank you for playing again " 
   // this.blackJack.getUserResponse();
   blackJack.setBetAmount();
    blackJack.givePlayerHand();
    blackJack.giveDealerHand();
    blackJack.dealerHit();
    blackJack.dealerHit();

}


}