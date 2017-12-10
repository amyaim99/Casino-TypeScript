/// <reference path="Card.ts" />


class Deck{

    cards:Card[] = []

    constructor(){
               
            for(let i=0; i<4; i++){
           var suitArray: Suit[] =[Suit.CLUB, Suit.DIAMOND, Suit.HEART, Suit.SPADE]
           for(let j=0; j<13;j++){
            var rankArray: Rank[] = [Rank.ACE, Rank.TWO, Rank.THREE, Rank.FOUR, Rank.FIVE,
                Rank.SIX, Rank.SEVEN, Rank.EIGHT, Rank.NINE, Rank.TEN, Rank.JACK, Rank.QUEEN,Rank.KING]

                var card: Card = new Card(rankArray[j], suitArray[i])
                
            this.cards.push(card)
            
            }
        }
        for (let i: number = this.cards.length - 1; i >= 0; i--){
            var randomIndex: number = Math.floor(Math.random() * (i + 1));
            var itemAtIndex: Card = this.cards[randomIndex];
    
            this.cards[randomIndex] = this.cards[i];
            this.cards[i] = itemAtIndex;
        }
    }

   

    
    

   
        
   }




