/// <reference path="Player.ts" />
/// <reference path="Card.ts" />
/// <reference path="Deck.ts" />




class GoFish{

private deck: Deck
private goFishPlayer: Player
private computerPlayer: Player
private playerHand: Card[]=[]
private computerHand: Card[]=[]
private displayElement:any
private  userInputElement: any 

constructor(){
    this.goFishPlayer = new Player()
    this.deck = new Deck()
    this.computerPlayer = new Player
    this.computerHand = []
    this.playerHand =[]
    this.displayElement = document.getElementById("display");
    this.userInputElement= document.getElementById("user_input");

}

getUserResponse () {
    this.goFishPlayer.setName(this.userInputElement.value) 
    this.displayElement.innerHTML += "Welcome, " + this.goFishPlayer.getName() + ". Click the GetHand button to continue!" ;

}



giveHand(cards: Card[]): Card[] {
    
let i: number = 0
    while(cards.length!=7){
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
    this.giveComputerHand()
    let element = document.getElementById("display")
    return element.innerHTML += "</br>" + "your card is " + this.playerHand +". Click GetCard to continue"    
}

checkPlayersCardRequestForGameRule(input: string):Boolean {
    this.givePlayerHand()
    console.log("Am I working")
   input= this.userInputElement.value
   let checkresult:Boolean = false;
    //let element = document.getElementById("display")
    for (let i = 0; i < this.playerHand.length; i++) {

        if (input.toUpperCase()== this.playerHand[i].rank) {
            checkresult = true;
           // checkresult = "</br>" + element.innerHTML +" " + this.askComputerHandForACArd(input);
            break;

        } 
    }
            checkresult = false;
            //console.log("the input is not correct")
           // checkresult =  checkresult = "</br>" + element.innerHTML +" " + "insert proper value";
            //input= this.userInputElement.value
        
    
        console.log(checkresult)
        console.log(this.playerHand)
    return checkresult;
}

askComputerHandForACArd(cardRank:string){

    cardRank = this.userInputElement.value
    let cards: Card[]= []
    let card:Card 
    console.log(this.checkComputerHandForPlayerRequestCard(cardRank))
    if(this.checkComputerHandForPlayerRequestCard){

        for(let i =0; i<this.computerHand.length; i++){
        //card= this.computerHand[i]
            if(cardRank==this.computerHand[i].rank){
            this.playerHand.push(this.computerHand[i])
            var index = this.computerHand.indexOf(this.computerHand[i], 0);
            if (index > -1) {
                this.computerHand.splice(index, 1);
                }
            }
        }
}

// let element = document.getElementById("display")
//  return element.innerHTML += "</br>" + "your card is " + this.playerHand +". Click GetCard to continue"
}


getMaximimRepeatingCard(cards:Card[]):string{
if(cards.length == 0){
    return null;
    }
var card:Card = cards[0]
var modeMap = {};

let maxCount = 1;
for(var i = 0; i < cards.length; i++)
{
    var maxRank = cards[i].rank;
    if(modeMap[maxRank] == null)
        modeMap[maxRank] = 1;
    else
        modeMap[maxRank]++;  
    if(modeMap[maxRank] > maxCount)
    {
        card.rank = maxRank;
        maxCount = modeMap[maxRank];
    }
}

    return card.rank;

}

computerCardToRequest(): string {
    this.giveComputerHand()
    return this.getMaximimRepeatingCard(this.computerHand)
} 

checkCardExistance(cards:Card[], rank:string):Boolean{
    let checkOutcome: Boolean = false;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].rank== rank) checkOutcome = true;
    }
    return checkOutcome;
}

checkComputerHandForPlayerRequestCard(rank:string){
    rank = this.userInputElement.value
    this.giveComputerHand()
    console.log(this.checkCardExistance(this.computerHand, rank))
    console.log(this.computerHand)
    return  this.checkCardExistance(this.computerHand, rank)
}


checkPlayerHasRequestedCardRank(rank: string):Boolean {
    this.givePlayerHand()
    console.log(this.checkCardExistance(this.playerHand, rank))
    console.log(this.playerHand)
    return  this.checkCardExistance(this.playerHand, rank)

}

askPlayerForACard(rank: string):Card[] {
    rank= this.computerCardToRequest()
    console.log("The computer requested " + rank);
    this.givePlayerHand()
    if (this.checkPlayerHasRequestedCardRank(rank)) {
        for (let i = 0; i < this.playerHand.length; i++) {
            if (rank==this.playerHand[i].rank){
                this.computerHand.push(this.playerHand[i]);
                var index = this.playerHand.indexOf(this.playerHand[i], 0);
                if (index > -1) this.playerHand.splice(index, 1);
            }
        }
        console.log(this.goFishPlayer.getName + " has " + rank + "." +
                "The card is added to the computer hand");
            
            // rank = this.computerCardToRequest();
            // this.checkPlayerHasRequestedCardRank(rank);
        }
    
    else{
    console.log( " the player doesnt have " + rank + ". Go Fish!!");
    }
    
    return this.computerHand
}

goFishingComputer() {
     this.giveComputerHand()
    if (this.deck.cards.length>0){
        console.log("The computer is fishing")
        this.computerHand.push(this.deck.cards[0])
        this.deck.cards.splice(0, 1);
        console.log(this.computerHand)
        console.log(this.deck.cards.length)
    }
        else
        console.log("The deck is empty. Game over")    
            
    } 

goFishingPlayer() {
    this.givePlayerHand()
    if (this.deck.cards.length>0){
        console.log("The player is fishing")
        this.playerHand.push(this.deck.cards[0])
        this.deck.cards.splice(0, 1);
        console.log(this.playerHand)
        console.log(this.deck.cards.length)
    }
    else
    console.log("The deck is empty. Game over")    
            
    } 

countBooksInHand(cards:Card[]):string {
         
    if(cards.length == 0){
        return null;
        }
    var card:Card = cards[0]
    var modeMap = {};
    
    let maxCount = 1;
    for(let i = 0; i < cards.length; i++)
    {
        var maxRank = cards[i].rank;
        if(modeMap[maxRank] == null)
            modeMap[maxRank] = 1;
        else
            modeMap[maxRank]++;  
        if(modeMap[maxRank] > maxCount && modeMap[maxRank]==4)
        {   
            card.rank = maxRank;
            maxCount = modeMap[maxRank];
        }
    }
        return card.rank;
    }

countPlayerScore(cards:Card[]){
    let rank = this.countBooksInHand(cards)
    let score = this.goFishPlayer.getscore()
        for(let i = 0; i < cards.length; i++)
        {
            if(cards[i].rank == rank){
            score +=1
              
            }
        }
    }

countComputerScore(cards:Card[]){
    let rank = this.countBooksInHand(cards)
    let score = this.computerPlayer.getscore()
        for(let i = 0; i < cards.length; i++)
        {
            if(cards[i].rank == rank){
            score+=1   
            }
        }
    }

removeBooksinHand(cards:Card[]){
    let rank = this.countBooksInHand(cards)
    for(let i = 0; i < cards.length; i++)
    {
        if(cards[i].rank == rank){
            var index = this.playerHand.indexOf(this.playerHand[i], 0);
            if (index > -1) this.playerHand.splice(index, 1);
        }
    }
}

removeBookedComputerHand(){
    this.removeBooksinHand(this.computerHand)
}

removeBookedPlayerHand(){
        this.removeBooksinHand(this.playerHand)
    }

decideWiner() {
    let computerScore= this.computerPlayer.getscore()
    let playerScore = this.goFishPlayer.getscore()
        console.log("Computer score is " + computerScore );
        console.log("Player score is " + playerScore );
        if (computerScore > playerScore)
           console.log(" The computer won");
        else if (computerScore < playerScore)
            console.log("Wow, you won! Congrats!!!");
        else if (computerScore == playerScore)
           console.log("The game is tie! try again");
       
    }

}