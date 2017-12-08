/// <reference path="Suit.ts" />
/// <reference path="Rank.ts" />



class Card{
suit: Suit
rank: Rank

constructor(rank:Rank, suit:Suit){

    this.rank = rank
    this.suit = suit
}

getRank():Rank{

    return this.rank
}
getSuit():Suit{
    
        return this.suit
    }

    public toString = () : string => {
        return this.rank+" "+ this.suit
    }

}