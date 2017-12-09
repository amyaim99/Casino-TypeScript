
/// <reference path="MoneyPlayer.ts" />
/// <reference path="Card.ts" />
/// <reference path="Deck.ts" />


class BlackJack{
    
    private deck: Deck
    private blackJackPlayer: MoneyPlayer
    private computerPlayer: MoneyPlayer
    private playerHand: Card[]=[]
    private computerHand: Card[]=[]
    private displayElement:any
    private  userInputElement: any 
    private  userInputElement2: any 
    private getHandButton: any
    private getPlayerName:any

    
    constructor(){
        this.blackJackPlayer = new MoneyPlayer()
        this.deck = new Deck()
        this.computerPlayer = new MoneyPlayer()
        this.computerHand = []
        this.playerHand =[]
        this.getPlayerName = document.getElementById("getPlayerName");
        this.getHandButton = document.getElementById("getHand");
        this.displayElement = document.getElementById("display");
        this.userInputElement2= document.getElementById("user_input2");
        this.userInputElement= document.getElementById("user_input");
    
    }
    
    getUserResponse () {
        this.blackJackPlayer.setName(this.userInputElement.value) 
        this.displayElement.innerHTML += "Welcome, " + this.blackJackPlayer.getName() + " Please click GetHand button to continue!"
        this.getPlayerName.disabled = true;
        
    }
    
    giveHand(cards: Card[]): Card[] {
        
    let i: number = 0
        while(cards.length!=2){
            this.deck.cards.shift[i]
            cards.push(this.deck.cards[i])
            var index = this.deck.cards.indexOf(this.deck.cards[i], 0);
            if (index > -1) {
                this.deck.cards.splice(index, 1); }
            i++
    }
        return cards;
    }
    
    giveComputerHand(){
        this.giveHand(this.computerHand)
        
    }
    
    givePlayerHand(){
        
        
   this.playerHand= this.giveHand(this.playerHand);
        this.blackJackPlayer.setScore( this.playerHand[0].getValue() +this.playerHand[1].getValue())
         if(this.blackJackPlayer.getscore()==21){
        this.displayElement.innerHTML += "</br>" +"your card is "+ this.playerHand+ ". Your total score is " +this.blackJackPlayer.getscore() + ". Yeah, you won!"
        +"</br>  Do you want to play again? Pleas insert your reply and click the 'Play again' button. Put your bet amount and click bet"
    }
   this.displayElement.innerHTML += "</br>" + "your card is " + this.playerHand +". Your total is " + this.blackJackPlayer.getscore() + ". Click Hit or stand"  
  
   console.log('before:', this.getHandButton.disabled);
   this.getHandButton.disabled = true;
   console.log('after:', this.getHandButton.disabled);
   
    }
   
   playerHit() {
       if (this.deck.cards.length>0){
        let score:number = this.deck.cards[0].getValue()
        console.log(score)
        this.playerHand.push(this.deck.cards[0])
        this.deck.cards.splice(0, 1);
        this.blackJackPlayer.setScore(this.blackJackPlayer.getscore()+ score)
        if(this.blackJackPlayer.getscore()>21){
            this.displayElement.innerHTML += "</br>" +"your card is "+ this.playerHand+ ". Your total score is " +this.blackJackPlayer.getscore() + ". The computer won"
            +"</br>  click play again to play again or quit to leave the game"
        }
        else if(this.blackJackPlayer.getscore()==21){
            this.displayElement.innerHTML += "</br>" +"your card is "+ this.playerHand+ ". Your total score is " +this.blackJackPlayer.getscore() + ". Yeah, you won!"
            +"</br> click play again to play again or quit to leave the game"
           
        }else
        this.displayElement.innerHTML += "</br>" +"your card is "+ this.playerHand+ ". Your total score is " +this.blackJackPlayer.getscore()+ ". Do you want to hit or stay."
               
       } 
    }

hitCheck(score: number): Boolean{
       
        if(score<17)
        {
            return true;
        }
        return false;
    }

computerScoreCheck(cards:Card[]){

    if(this.computerPlayer.getscore()>21)
    {
       this.displayElement.innerHTML+= " The computer is busted!";
        
    }
else if (this.computerPlayer.getscore()<=21)
    {
        this.displayElement.innerHTML+=". The computer stands.";
        this.standResult()
        console.log(this.blackJackPlayer.getscore()+"hmmm")
    }
}

standResult(){
    let betValue = this.userInputElement2.value
    let comScore: number= this.computerPlayer.getscore() 
    let pScore: number =  this.blackJackPlayer.getscore()
        if(comScore > pScore || comScore == 21){
            let playerMoney= this.blackJackPlayer.getMoney()
            playerMoney-= parseInt(betValue);
            this.blackJackPlayer.setMoney(playerMoney)
            this.displayElement.innerHTML+=". Yeah You WON!. You have " + this.blackJackPlayer.getMoney()
            this.displayElement.innerHTML+=". You lost!";
        
        }
        else if (comScore < pScore){
            let playerMoney= this.blackJackPlayer.getMoney()
              playerMoney+= parseInt(betValue);
              this.blackJackPlayer.setMoney(playerMoney)
          this.displayElement.innerHTML+=". Yeah You WON!. You have " + this.blackJackPlayer.getMoney()
        
        }
        else {
            this.displayElement.innerHTML+=". wow its a tie";
        }
    }
   


 computerHit( ){
    this.giveComputerHand()
    let computerScore:number = this.computerHand[0].getValue() + this.computerHand[1].getValue()
        if(computerScore>=17 && computerScore <= 21){
            this.computerScoreCheck(this.computerHand)

        }
        
        while(this.hitCheck(computerScore))
        {
                let score:number = this.deck.cards[0].getValue()
                console.log(score)
                this.computerHand.push(this.deck.cards[0])
                this.deck.cards.splice(0, 1);
                this.computerPlayer.setScore(this.computerPlayer.getscore()+ score)
                computerScore = this.computerPlayer.getscore()
               } 
               this.displayElement.innerHTML += "</br> The computer hits "+ this.computerHand+ ". Computer  score is " +computerScore
            this.computerScoreCheck(this.computerHand)
    }


    playAgain(){
        
        this.deck = new Deck()
        this.givePlayerHand()
        this.giveComputerHand()
        //this.getUserResponse.disabled = false;
    
    }

    quit(){
        console.log("am I working")
       
        this.displayElement.innerHTML = "</br></br>Thank you! It was nice playing with you, lets do it again sometime soon. Bye bye!"

    }  
    clean(){
        
    }

    }
    
