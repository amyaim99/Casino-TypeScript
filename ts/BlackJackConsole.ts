// class BlackJackConsole{

  
//    private displayElement:any;
//    private getBetButton: any;
//    private userInput:any
//    private blackJack: BlackJack
//    private blackJackPlayer: MoneyPlayer
//    private userInputElement: any; 
//    private userInputElement2: any; 
//    private getHandButton: any;
//    private hitButton:any;
//    private standButton:any;
//    private playAgainButton:any;
//    private quitButton:any;
//    private getPlayerNameButton:any;
  


//    constructor(){
//      this.blackJack = new BlackJack()
//      this.blackJackPlayer = new MoneyPlayer()
//      this.getPlayerNameButton = document.getElementById("getPlayerName");
//      this.getHandButton = document.getElementById("getHand");
//      this.displayElement = document.getElementById("miniDisplay");
//      this.userInputElement2= document.getElementById("user_input2");
//      this.userInputElement= document.getElementById("user_input");
//      this.hitButton= document.getElementById("hit");
//      this.standButton= document.getElementById("stand");
//      this.playAgainButton= document.getElementById("playAgain");
//      this.quitButton= document.getElementById("quit");
//      this.getBetButton= document.getElementById("getBet");
//    }
//    startGame(){
//     this.getBetButton.disabled = true;
//     this.hitButton.disabled = true;
//     this.standButton.disabled = true;
//     this.quitButton.disabled = true;
//     this.playAgainButton.disabled= true;
//     this.getHandButton.disabled = true;
// }
//    getUserResponse () {
//     this.displayElement.innerHTML =""
//     this.blackJackPlayer.setName(blackJack.setPlayerName()); 
//     this.displayElement.innerHTML += "Welcome, " + this.blackJackPlayer.getName() +"!." + " Please put your bet and click GetHand button to continue!"
//     this.getPlayerNameButton.disabled = true;
//     this.getBetButton.disabled = false;
//     this.userInputElement.value="";
// }

// playGame(){
//   this.displayElement.innerHTML += blackJack.setBetAmount()
//   this.userInputElement2.value="";

// }
//    playAgain(){
//     console.log("Am I working")
//     let blackJack: BlackJack = new BlackJack();
//     this.displayElement.innerHTML ="Thank you for playing again " 
//    blackJack.getUserResponse();
//    blackJack.setBetAmount();
//    blackJack.givePlayerHand();
//     blackJack.giveDealerHand();
//     blackJack.dealerHit();
//     blackJack.dealerHit();

// }


// }