/// <reference path="MoneyPlayer.ts" />
/// <reference path="Card.ts" />
/// <reference path="Deck.ts" />


class BlackJack{
    
    private deck: Deck;
    private blackJackPlayer: MoneyPlayer;
    private dealer: MoneyPlayer;
    private playerHand: Card[]=[];
    private dealerHand: Card[]=[];
    private totalBetAMount:number
    private displayElement:any;
    private userInputElement: any; 
    private userInputElement2: any; 
    private getHandButton: any;
    private hitButton:any;
    private standButton:any;
    private playAgainButton:any;
    private quitButton:any;
    private getPlayerNameButton:any;
    private getBetButton: any;

    
    constructor(){
        this.blackJackPlayer = new MoneyPlayer();
        this.deck = new Deck();
        this.dealer = new MoneyPlayer();
        this.dealerHand = [];
        this.playerHand =[];
        this.totalBetAMount = 0;
        this.getPlayerNameButton = document.getElementById("getPlayerName");
        this.getHandButton = document.getElementById("getHand");
        this.displayElement = document.getElementById("miniDisplay");
        this.userInputElement2= document.getElementById("user_input2");
        this.userInputElement= document.getElementById("user_input");
        this.hitButton= document.getElementById("hit");
        this.standButton= document.getElementById("stand");
        this.playAgainButton= document.getElementById("playAgain");
        this.quitButton= document.getElementById("quit");
        this.getBetButton= document.getElementById("getBet");
    }
    
    startGame(){
        this.getBetButton.disabled = true;
        this.hitButton.disabled = true;
        this.standButton.disabled = true;
        this.quitButton.disabled = true;
        this.playAgainButton.disabled= true;
        this.getHandButton.disabled = true;
    }
    setPlayerName():string{
        let inputName = this.userInputElement.value
        if(inputName == ""){
            return "Anonymous Player"; }
        else {return inputName; }
        }

    getUserResponse () {
        this.displayElement.innerHTML =""
        this.blackJackPlayer.setName(this.setPlayerName()); 
        this.displayElement.innerHTML += "Welcome, " + this.blackJackPlayer.getName() +"!." + " Please put your bet and click GetHand button to continue!"
        this.getPlayerNameButton.disabled = true;
        this.getBetButton.disabled = false;
        this.userInputElement.value="";
    }

    setBetAmount(){
        let betAmount: number = this.userInputElement2.value;
        this.totalBetAMount+=betAmount;
        let response: string= "";
        if(isNaN(betAmount)|| betAmount.toString()==""){
            this.displayElement.innerHTML += "</br> Please insert proper value";
            this.userInputElement2.value="";
        }
        else if(betAmount > this.blackJackPlayer.getMoney()){
            this.displayElement.innerHTML += "</br>You dont have enough money. Please bet smaller amount.";
            this.userInputElement2.value="";
        }
        else if( this.totalBetAMount==0){
            console.log(this.blackJackPlayer.getMoney())
            this.quit();
            this.displayElement.innerHTML += "</br>You finished your money.";
            this.userInputElement2.value="";
           this.getBetButton.disabled = true;
        }
        else {
            this.displayElement.innerHTML +="</br>Your bet is $" + betAmount+ ". Good Luck!";
            this.getBetButton.disabled = true;
        }
        this.getHandButton.disabled = false;
    }
    
    giveHand(cards: Card[]): Card[] {
        let i: number = 0;
        while(cards.length!=2){
            this.deck.cards.shift[i];
            cards.push(this.deck.cards[i]);
            var index = this.deck.cards.indexOf(this.deck.cards[i], 0);
                if (index > -1) {
                    this.deck.cards.splice(index, 1); }
                    i++;
        }
            return cards;
        }

    
    givePlayerHand(){
        this.playerHand= this.giveHand(this.playerHand);
        this.blackJackPlayer.setScore( this.playerHand[0].getValue() +this.playerHand[1].getValue());
        let betAmount: number = parseInt(this.userInputElement2.value);
        let prevAmount: number = this.blackJackPlayer.getMoney();
         if(this.blackJackPlayer.getscore()==21){
            this.blackJackPlayer.setMoney (prevAmount + betAmount);
        this.displayElement.innerHTML += "</br>" +"your card is "+ this.playerHand+ ". Your score is " +this.blackJackPlayer.getscore() + ". You won!"
        +"</br> you have " + "$" +this.blackJackPlayer.getMoney()+ "</br> To play again, click Play Again and also put your bet amount and click bet";
        this.enableQuitAndPlayAGainButNotHitButtton();
    }
    else{ this.displayElement.innerHTML += "</br>" + "your card is " + this.playerHand +". Your total is " + this.blackJackPlayer.getscore() + ". Click Hit or stand";  
        this.getHandButton.disabled = true;
        this.hitButton.disabled = false;
        this.standButton.disabled = false;
    }
    }
    enableQuitAndPlayAGainButNotHitButtton(){
        this.hitButton.disabled = true;
        this.standButton.disabled = true;
        this.playAgainButton.disabled = false;
        this.quitButton.disabled = false;
    }
    
   playerHit() {
       if (this.deck.cards.length>0){
        let score:number = this.deck.cards[0].getValue()
        let betAmount: number = parseInt(this.userInputElement2.value);
        let prevAmount: number = this.blackJackPlayer.getMoney();
        this.playerHand.push(this.deck.cards[0])
        this.deck.cards.splice(0, 1);
        this.blackJackPlayer.setScore(this.blackJackPlayer.getscore()+ score)
        if(this.blackJackPlayer.getscore()>21){
           this.blackJackPlayer.setMoney (prevAmount - betAmount);
            this.displayElement.innerHTML += "</br>" +"your card is "+ this.playerHand+ ". Your score is  " +this.blackJackPlayer.getscore() + ". You Lost"
            +"</br> you have " + "$" + this.blackJackPlayer.getMoney() + "</br>click Play to play again or Quit to leave the game";
            this.enableQuitAndPlayAGainButNotHitButtton();
        } 
        else  if(this.blackJackPlayer.getscore()==21){
            this.blackJackPlayer.setMoney (prevAmount + betAmount);
        this.displayElement.innerHTML += "</br>" +"your card is "+ this.playerHand+ ". Your score is " +this.blackJackPlayer.getscore() + ". You WON!"
        +"</br> you have " + "$" + this.blackJackPlayer.getMoney()+ "</br> To play again, click Play Again and also put your bet amount and click bet";
            this.enableQuitAndPlayAGainButNotHitButtton();
           
    }        
        else
        this.displayElement.innerHTML += "</br>" +"your card is "+ this.playerHand+ ". Your  score is " +this.blackJackPlayer.getscore()+ ". Do you want to hit or stay."
    }       
    }

    hitCheck(score: number): Boolean{
        if(score<17){
            return true;
        }
        return false;
    }
    giveDealerHand(){
        this.dealerHand = this.giveHand(this.dealerHand);
        }

    dealerHit( ){
        this.giveDealerHand();
        console.log(this.dealerHand[0].getValue() + this.dealerHand[1].getValue())
        let dealerScore:number = this.dealerHand[0].getValue() + this.dealerHand[1].getValue();
        this.dealer.setScore(dealerScore)
        console.log(this.dealer.getscore())
        this.displayElement.innerHTML += "</br> The dealer hits "
            if(dealerScore>17 ){
                this.dealerScoreCheck(this.dealerHand)
                }
            else{
                while(this.hitCheck(dealerScore))
                {
                    let score:number = this.deck.cards[0].getValue()
                    console.log(score)
                    this.dealerHand.push(this.deck.cards[0])
                    this.deck.cards.splice(0, 1);
                    this.dealer.setScore(this.dealer.getscore()+ score)
                    dealerScore = this.dealer.getscore()
                } 
                this.dealerScoreCheck(this.dealerHand)
                }
    }
    dealerScoreCheck(cards:Card[]){
        let betAmount: number = parseInt(this.userInputElement2.value);
        let prevAmount: number = this.blackJackPlayer.getMoney();
        if(this.dealer.getscore()>21)
        {  this.blackJackPlayer.setMoney (prevAmount + betAmount);
            this.displayElement.innerHTML+= " The dealer score is " + this.dealer.getscore() +"</br> the dealer is busted!" +
            " </br> you have " + "$" + this.blackJackPlayer.getMoney() +"</br>Click play again to play again or quit to leave the game";
            this.enableQuitAndPlayAGainButNotHitButtton();
            this.standButton.disabled = true;
        }
        else if (this.dealer.getscore()<=21)
        {
            this.standResult();
            this.enableQuitAndPlayAGainButNotHitButtton();
            this.standButton.disabled = true;
        }
    }

    standResult(){
        let betAmount: number = parseInt(this.userInputElement2.value);
        let prevAmount: number = this.blackJackPlayer.getMoney();
        let pScore: number =  this.blackJackPlayer.getscore()
            if(this.dealer.getscore() == 21 || this.dealer.getscore() > pScore){
                console.log(this.dealer.getscore() + " " + pScore+" " + this.blackJackPlayer.getMoney())
                this.blackJackPlayer.setMoney (prevAmount - betAmount);
                console.log(this.dealer.getscore() + " " + pScore+" " + this.blackJackPlayer.getMoney())
                this.displayElement.innerHTML+=".The dealer score is " + this.dealer.getscore()+ ". You Lost!. </br>You have " + "$" +this.blackJackPlayer.getMoney()
                + ".</br> Click play again to play again or quit to leave the game";
                this.enableQuitAndPlayAGainButNotHitButtton();
            }
            else if (this.dealer.getscore() < pScore){
                console.log(this.dealer.getscore() + " " + pScore + " " + this.blackJackPlayer.getMoney())
            this.blackJackPlayer.setMoney (prevAmount + betAmount);
            console.log(this.dealer.getscore() + " " + pScore+" " + this.blackJackPlayer.getMoney())
            this.displayElement.innerHTML+=".The dealer score is " + this.dealer.getscore() + ".</br> Yeah You WON!. You have " +"$" + this.blackJackPlayer.getMoney()
            ".</br> Click play again to play again or quit to leave the game";
            this.enableQuitAndPlayAGainButNotHitButtton();
            }
            else {
                console.log(this.dealer.getscore())
                this.displayElement.innerHTML+=".The dealer score is " + this.dealer.getscore() +". Wow its a tie"
                + ".</br> Click play again to play again or quit to leave the game";
                this.enableQuitAndPlayAGainButNotHitButtton();
            }
        }
    
    

    quit(){
        this.displayElement.innerHTML = "</br>Thank you " + this.blackJackPlayer.getName()+"! It was nice playing with you, lets do it again sometime soon. Bye bye!";
        this.playAgainButton.disabled = true;
        this.getPlayerNameButton.disabled = false;
        this.userInputElement2.value ="";
        this.startGame();
        this.totalBetAMount =0;
        this.blackJackPlayer.setMoney(500);
        this.deck = new Deck();
        this.playerHand =[]
        this.dealerHand=[]
    } 
    
    playAgain(){
        console.log("Am I working")
        this.displayElement.innerHTML = "</br>Thank you for playing again " + this.blackJackPlayer.getName() + "! Please put your bet and click GetHand";
        this.deck = new Deck();
        this.playerHand =[]
        this.dealerHand=[]
        this.userInputElement2.value ="";
        this.getBetButton.disabled = false;
        this.playAgainButton.disabled= true;
    }


    }
    
