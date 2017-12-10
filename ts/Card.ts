/// <reference path="Suit.ts" />
/// <reference path="Rank.ts" />



class Card{
suit: Suit
rank: Rank

constructor(rank:Rank, suit:Suit){

    this.rank = rank
    this.suit = suit
}

getValue():number{
    if(this.rank=="Q" || this.rank=="J" || this.rank=="K")
    return 10

    else
    return parseInt(this.rank)
}
getSuit():Suit{
    
        return this.suit
    }

    public toString = () : string => {
        return this.rank+" "+ this.suit
    }

}