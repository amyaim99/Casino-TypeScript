/// <reference path="Player.ts" />
/// <reference path="Card.ts" />
/// <reference path="Deck.ts" />


class BlackJack{
    
    private deck: Deck
    private blackJackPlayer: Player
    private computerPlayer: Player
    private playerHand: Card[]=[]
    private computerHand: Card[]=[]
    private displayElement:any
    private  userInputElement: any 
    private  userInputElement2: any 
    
    constructor(){
        this.blackJackPlayer = new Player()
        this.deck = new Deck()
        this.computerPlayer = new Player
        this.computerHand = []
        this.playerHand =[]
        this.displayElement = document.getElementById("display");
        this.userInputElement2= document.getElementById("user_input2");
        this.userInputElement= document.getElementById("user_input");
    
    }
    
    getUserResponse () {
        this.blackJackPlayer.setName(this.userInputElement.value) 
        this.displayElement.innerHTML += "Welcome, " + this.blackJackPlayer.getName() + " Please click GetHand button to continue!"
        
    }
    
    giveHand(cards: Card[]): Card[] {
        
    let i: number = 0
        while(cards.length!=2){
            this.deck.cards.shift[i]
            cards.push(this.deck.cards[i])
            var index = this.deck.cards.indexOf(this.deck.cards[i], 0);
            if (index > -1) {
                this.deck.cards.splice(index, 1);
            }
            
            i++
    }
        return cards;
    }
    
    giveComputerHand(){
        this.giveHand(this.computerHand)
        
    }
    
    givePlayerHand():string{
        
    this.giveHand(this.playerHand);
        this.blackJackPlayer.setScore( this.playerHand[0].getValue() +this.playerHand[1].getValue())
    let element = document.getElementById("display")
    if(this.blackJackPlayer.getscore()==21){
        this.displayElement.innerHTML += "</br>" +"your card is "+ this.playerHand+ ". Your total score is " +this.blackJackPlayer.getscore() + ". Yeah, you won!"
        +"</br>  Do you want to play again? Pleas insert your reply and click the 'Play again' button"
        let response = this.userInputElement2.value
        this.playAgain(response)
    }
    return this.displayElement.innerHTML += "</br>" + "your card is " + this.playerHand +". Your total is " + this.blackJackPlayer.getscore() + ". Click Hit or stand"    
    
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
            +"</br>  Do you want to play again? Pleas insert your reply and click the 'Play again' button"
            let response = this.userInputElement2.value
            this.playAgain(response)
        }
        else if(this.blackJackPlayer.getscore()==21){
            this.displayElement.innerHTML += "</br>" +"your card is "+ this.playerHand+ ". Your total score is " +this.blackJackPlayer.getscore() + ". Yeah, you won!"
            +"</br> Do you want to play again? Pleas insert your reply and click the 'Play again' button"
            let response = this.userInputElement2.value
            this.playAgain(response)
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
        if(this.computerPlayer.getscore() >this.blackJackPlayer.getscore()){
            this.displayElement.innerHTML+=". The computer won.";
        }
        else{
            this.displayElement.innerHTML+=". The player won.";
        }
    }
   
}

 computerHit( ){
    this.giveComputerHand()
    let computerScore:number = this.computerHand[0].getValue() + this.computerHand[1].getValue()
    console.log(computerScore)
        console.log(this.computerPlayer.getscore)
        
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

    playAgain(reply: string){
        if(reply == "YES"){

       this.displayElement.innerHTML+= "Here is your card" + this.givePlayerHand()
        }

        else if (reply == "NO"){

        this.displayElement.innerHTML+="Bye bye!"
        }
        else{
            this.displayElement.innerHTML+="Insert proper value!" 
        }


    }
    }
