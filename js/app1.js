var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    function Player() {
        this.name = name;
        this.score = 0;
    }
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.getscore = function () {
        return this.score;
    };
    Player.prototype.setName = function (name) {
        this.name = name;
    };
    Player.prototype.setScore = function (score) {
        this.score = score;
    };
    return Player;
}());
/// <reference path="Player.ts" />
var MoneyPlayer = /** @class */ (function (_super) {
    __extends(MoneyPlayer, _super);
    function MoneyPlayer() {
        var _this = _super.call(this) || this;
        _this.money = 500;
        return _this;
    }
    MoneyPlayer.prototype.getMoney = function () {
        return this.money;
    };
    MoneyPlayer.prototype.setMoney = function (money) {
        this.money = money;
    };
    return MoneyPlayer;
}(Player));
var Suit;
(function (Suit) {
    Suit["HEART"] = "\u2661";
    Suit["DIAMOND"] = "\u2662";
    Suit["CLUB"] = "\u2664";
    Suit["SPADE"] = "\u2667";
})(Suit || (Suit = {}));
var Rank;
(function (Rank) {
    Rank["ACE"] = "11";
    Rank["TWO"] = "2";
    Rank["THREE"] = "3";
    Rank["FOUR"] = "4";
    Rank["FIVE"] = "5";
    Rank["SIX"] = "6";
    Rank["SEVEN"] = "7";
    Rank["EIGHT"] = "8";
    Rank["NINE"] = "9";
    Rank["TEN"] = "10";
    Rank["JACK"] = "J";
    Rank["QUEEN"] = "Q";
    Rank["KING"] = "K";
})(Rank || (Rank = {}));
/// <reference path="Suit.ts" />
/// <reference path="Rank.ts" />
var Card = /** @class */ (function () {
    function Card(rank, suit) {
        var _this = this;
        this.toString = function () {
            return _this.rank + " " + _this.suit;
        };
        this.rank = rank;
        this.suit = suit;
    }
    Card.prototype.getValue = function () {
        if (this.rank == "Q" || this.rank == "J" || this.rank == "K")
            return 10;
        else
            return parseInt(this.rank);
    };
    Card.prototype.getSuit = function () {
        return this.suit;
    };
    return Card;
}());
/// <reference path="Card.ts" />
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        for (var i = 0; i < 4; i++) {
            var suitArray = [Suit.CLUB, Suit.DIAMOND, Suit.HEART, Suit.SPADE];
            for (var j = 0; j < 13; j++) {
                var rankArray = [Rank.ACE, Rank.TWO, Rank.THREE, Rank.FOUR, Rank.FIVE,
                    Rank.SIX, Rank.SEVEN, Rank.EIGHT, Rank.NINE, Rank.TEN, Rank.JACK, Rank.QUEEN, Rank.KING];
                var card = new Card(rankArray[j], suitArray[i]);
                this.cards.push(card);
            }
        }
        for (var i = this.cards.length - 1; i >= 0; i--) {
            var randomIndex = Math.floor(Math.random() * (i + 1));
            var itemAtIndex = this.cards[randomIndex];
            this.cards[randomIndex] = this.cards[i];
            this.cards[i] = itemAtIndex;
        }
    }
    return Deck;
}());
/// <reference path="MoneyPlayer.ts" />
/// <reference path="Card.ts" />
/// <reference path="Deck.ts" />
var BlackJack = /** @class */ (function () {
    function BlackJack() {
        this.playerHand = [];
        this.dealerHand = [];
        this.blackJackPlayer = new MoneyPlayer();
        this.deck = new Deck();
        this.dealer = new MoneyPlayer();
        this.dealerHand = [];
        this.playerHand = [];
        this.totalBetAMount = 0;
        this.getPlayerNameButton = document.getElementById("getPlayerName");
        this.getHandButton = document.getElementById("getHand");
        this.displayElement = document.getElementById("miniDisplay");
        this.userInputElement2 = document.getElementById("user_input2");
        this.userInputElement = document.getElementById("user_input");
        this.hitButton = document.getElementById("hit");
        this.standButton = document.getElementById("stand");
        this.playAgainButton = document.getElementById("playAgain");
        this.quitButton = document.getElementById("quit");
        this.getBetButton = document.getElementById("getBet");
    }
    BlackJack.prototype.startGame = function () {
        this.getBetButton.disabled = true;
        this.hitButton.disabled = true;
        this.standButton.disabled = true;
        this.quitButton.disabled = true;
        this.playAgainButton.disabled = true;
        this.getHandButton.disabled = true;
    };
    BlackJack.prototype.setPlayerName = function () {
        var inputName = this.userInputElement.value;
        if (inputName == "") {
            return "Anonymous Player";
        }
        else {
            return inputName;
        }
    };
    BlackJack.prototype.getUserResponse = function () {
        this.displayElement.innerHTML = "";
        this.blackJackPlayer.setName(this.setPlayerName());
        this.displayElement.innerHTML += "Welcome, " + this.blackJackPlayer.getName() + "!." + " Please put your bet and click GetHand button to continue!";
        this.getPlayerNameButton.disabled = true;
        this.getBetButton.disabled = false;
        this.userInputElement.value = "";
    };
    BlackJack.prototype.setBetAmount = function () {
        var betAmount = this.userInputElement2.value;
        this.totalBetAMount += betAmount;
        var response = "";
        if (isNaN(betAmount) || betAmount.toString() == "") {
            this.displayElement.innerHTML += "</br> Please insert proper value";
            this.userInputElement2.value = "";
        }
        else if (betAmount > this.blackJackPlayer.getMoney()) {
            this.displayElement.innerHTML += "</br>You dont have enough money. Please bet smaller amount.";
            this.userInputElement2.value = "";
        }
        else if (this.totalBetAMount == 0) {
            console.log(this.blackJackPlayer.getMoney());
            this.quit();
            this.displayElement.innerHTML += "</br>You finished your money.";
            this.userInputElement2.value = "";
            this.getBetButton.disabled = true;
        }
        else {
            this.displayElement.innerHTML += "</br>Your bet is $" + betAmount + ". Good Luck!";
            this.getBetButton.disabled = true;
        }
        this.getHandButton.disabled = false;
    };
    BlackJack.prototype.giveHand = function (cards) {
        var i = 0;
        while (cards.length != 2) {
            this.deck.cards.shift[i];
            cards.push(this.deck.cards[i]);
            var index = this.deck.cards.indexOf(this.deck.cards[i], 0);
            if (index > -1) {
                this.deck.cards.splice(index, 1);
            }
            i++;
        }
        return cards;
    };
    BlackJack.prototype.givePlayerHand = function () {
        this.playerHand = this.giveHand(this.playerHand);
        this.blackJackPlayer.setScore(this.playerHand[0].getValue() + this.playerHand[1].getValue());
        var betAmount = parseInt(this.userInputElement2.value);
        var prevAmount = this.blackJackPlayer.getMoney();
        if (this.blackJackPlayer.getscore() == 21) {
            this.blackJackPlayer.setMoney(prevAmount + betAmount);
            this.displayElement.innerHTML += "</br>" + "your card is " + this.playerHand + ". Your score is " + this.blackJackPlayer.getscore() + ". You won!"
                + "</br> you have " + "$" + this.blackJackPlayer.getMoney() + "</br> To play again, click Play Again and also put your bet amount and click bet";
            this.enableQuitAndPlayAGainButNotHitButtton();
        }
        else {
            this.displayElement.innerHTML += "</br>" + "your card is " + this.playerHand + ". Your total is " + this.blackJackPlayer.getscore() + ". Click Hit or stand";
            this.getHandButton.disabled = true;
            this.hitButton.disabled = false;
            this.standButton.disabled = false;
        }
    };
    BlackJack.prototype.enableQuitAndPlayAGainButNotHitButtton = function () {
        this.hitButton.disabled = true;
        this.standButton.disabled = true;
        this.playAgainButton.disabled = false;
        this.quitButton.disabled = false;
    };
    BlackJack.prototype.playerHit = function () {
        if (this.deck.cards.length > 0) {
            var score = this.deck.cards[0].getValue();
            var betAmount = parseInt(this.userInputElement2.value);
            var prevAmount = this.blackJackPlayer.getMoney();
            this.playerHand.push(this.deck.cards[0]);
            this.deck.cards.splice(0, 1);
            this.blackJackPlayer.setScore(this.blackJackPlayer.getscore() + score);
            if (this.blackJackPlayer.getscore() > 21) {
                this.blackJackPlayer.setMoney(prevAmount - betAmount);
                this.displayElement.innerHTML += "</br>" + "your card is " + this.playerHand + ". Your score is  " + this.blackJackPlayer.getscore() + ". You Lost"
                    + "</br> you have " + "$" + this.blackJackPlayer.getMoney() + "</br>click Play to play again or Quit to leave the game";
                this.enableQuitAndPlayAGainButNotHitButtton();
            }
            else if (this.blackJackPlayer.getscore() == 21) {
                this.blackJackPlayer.setMoney(prevAmount + betAmount);
                this.displayElement.innerHTML += "</br>" + "your card is " + this.playerHand + ". Your score is " + this.blackJackPlayer.getscore() + ". You WON!"
                    + "</br> you have " + "$" + this.blackJackPlayer.getMoney() + "</br> To play again, click Play Again and also put your bet amount and click bet";
                this.enableQuitAndPlayAGainButNotHitButtton();
            }
            else
                this.displayElement.innerHTML += "</br>" + "your card is " + this.playerHand + ". Your  score is " + this.blackJackPlayer.getscore() + ". Do you want to hit or stay.";
        }
    };
    BlackJack.prototype.hitCheck = function (score) {
        if (score < 17) {
            return true;
        }
        return false;
    };
    BlackJack.prototype.giveDealerHand = function () {
        this.dealerHand = this.giveHand(this.dealerHand);
    };
    BlackJack.prototype.dealerHit = function () {
        this.giveDealerHand();
        console.log(this.dealerHand[0].getValue() + this.dealerHand[1].getValue());
        var dealerScore = this.dealerHand[0].getValue() + this.dealerHand[1].getValue();
        this.dealer.setScore(dealerScore);
        console.log(this.dealer.getscore());
        this.displayElement.innerHTML += "</br> The dealer hits ";
        if (dealerScore > 17) {
            this.dealerScoreCheck(this.dealerHand);
        }
        else {
            while (this.hitCheck(dealerScore)) {
                var score = this.deck.cards[0].getValue();
                console.log(score);
                this.dealerHand.push(this.deck.cards[0]);
                this.deck.cards.splice(0, 1);
                this.dealer.setScore(this.dealer.getscore() + score);
                dealerScore = this.dealer.getscore();
            }
            this.dealerScoreCheck(this.dealerHand);
        }
    };
    BlackJack.prototype.dealerScoreCheck = function (cards) {
        var betAmount = parseInt(this.userInputElement2.value);
        var prevAmount = this.blackJackPlayer.getMoney();
        if (this.dealer.getscore() > 21) {
            this.blackJackPlayer.setMoney(prevAmount + betAmount);
            this.displayElement.innerHTML += " The dealer score is " + this.dealer.getscore() + "</br> the dealer is busted!" +
                " </br> you have " + "$" + this.blackJackPlayer.getMoney() + "</br>Click play again to play again or quit to leave the game";
            this.enableQuitAndPlayAGainButNotHitButtton();
            this.standButton.disabled = true;
        }
        else if (this.dealer.getscore() <= 21) {
            this.standResult();
            this.enableQuitAndPlayAGainButNotHitButtton();
            this.standButton.disabled = true;
        }
    };
    BlackJack.prototype.standResult = function () {
        var betAmount = parseInt(this.userInputElement2.value);
        var prevAmount = this.blackJackPlayer.getMoney();
        var pScore = this.blackJackPlayer.getscore();
        if (this.dealer.getscore() == 21 || this.dealer.getscore() > pScore) {
            console.log(this.dealer.getscore() + " " + pScore + " " + this.blackJackPlayer.getMoney());
            this.blackJackPlayer.setMoney(prevAmount - betAmount);
            console.log(this.dealer.getscore() + " " + pScore + " " + this.blackJackPlayer.getMoney());
            this.displayElement.innerHTML += ".The dealer score is " + this.dealer.getscore() + ". You Lost!. </br>You have " + "$" + this.blackJackPlayer.getMoney()
                + ".</br> Click play again to play again or quit to leave the game";
            this.enableQuitAndPlayAGainButNotHitButtton();
        }
        else if (this.dealer.getscore() < pScore) {
            console.log(this.dealer.getscore() + " " + pScore + " " + this.blackJackPlayer.getMoney());
            this.blackJackPlayer.setMoney(prevAmount + betAmount);
            console.log(this.dealer.getscore() + " " + pScore + " " + this.blackJackPlayer.getMoney());
            this.displayElement.innerHTML += ".The dealer score is " + this.dealer.getscore() + ".</br> Yeah You WON!. You have " + "$" + this.blackJackPlayer.getMoney();
            ".</br> Click play again to play again or quit to leave the game";
            this.enableQuitAndPlayAGainButNotHitButtton();
        }
        else {
            console.log(this.dealer.getscore());
            this.displayElement.innerHTML += ".The dealer score is " + this.dealer.getscore() + ". Wow its a tie"
                + ".</br> Click play again to play again or quit to leave the game";
            this.enableQuitAndPlayAGainButNotHitButtton();
        }
    };
    BlackJack.prototype.quit = function () {
        this.displayElement.innerHTML = "</br>Thank you " + this.blackJackPlayer.getName() + "! It was nice playing with you, lets do it again sometime soon. Bye bye!";
        this.playAgainButton.disabled = true;
        this.getPlayerNameButton.disabled = false;
        this.userInputElement2.value = "";
        this.startGame();
        this.totalBetAMount = 0;
        this.blackJackPlayer.setMoney(500);
        this.deck = new Deck();
        this.playerHand = [];
        this.dealerHand = [];
    };
    BlackJack.prototype.playAgain = function () {
        console.log("Am I working");
        this.displayElement.innerHTML = "</br>Thank you for playing again " + this.blackJackPlayer.getName() + "! Please put your bet and click GetHand";
        this.deck = new Deck();
        this.playerHand = [];
        this.dealerHand = [];
        this.userInputElement2.value = "";
        this.getBetButton.disabled = false;
        this.playAgainButton.disabled = true;
    };
    return BlackJack;
}());
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
/// <reference path="Player.ts" />
/// <reference path="Card.ts" />
/// <reference path="Deck.ts" />
var GoFish = /** @class */ (function () {
    function GoFish() {
        this.playerHand = [];
        this.computerHand = [];
        this.goFishPlayer = new Player();
        this.deck = new Deck();
        this.computerPlayer = new Player;
        this.computerHand = [];
        this.playerHand = [];
        this.displayElement = document.getElementById("display");
        this.userInputElement2 = document.getElementById("user_input2");
        this.userInputElement = document.getElementById("user_input");
    }
    GoFish.prototype.getUserResponse = function () {
        this.goFishPlayer.setName(this.userInputElement.value);
        this.displayElement.innerHTML += "Welcome, " + this.goFishPlayer.getName() + ". Click the GetHand button to continue!";
    };
    GoFish.prototype.giveHand = function (cards) {
        var i = 0;
        while (cards.length != 7) {
            this.deck.cards.shift[i];
            cards.push(this.deck.cards[i]);
            var index = this.deck.cards.indexOf(this.deck.cards[i], 0);
            if (index > -1) {
                this.deck.cards.splice(index, 1);
            }
            i++;
        }
        return cards;
    };
    GoFish.prototype.giveComputerHand = function () {
        this.giveHand(this.computerHand);
    };
    GoFish.prototype.givePlayerHand = function () {
        this.giveHand(this.playerHand);
        this.giveComputerHand();
        var element = document.getElementById("display");
        console.log(this.deck.cards.length);
        return element.innerHTML += "</br>" + "your card is " + this.playerHand + ". Click GetCard to continue";
    };
    GoFish.prototype.checkCardExistance = function (cards, rank) {
        var checkOutcome = false;
        for (var i = 0; i < cards.length; i++) {
            if (cards[i].rank == rank)
                checkOutcome = true;
        }
        return checkOutcome;
    };
    GoFish.prototype.checkComputerHandForPlayerRequestCard = function (rank) {
        this.giveComputerHand();
        return this.checkCardExistance(this.computerHand, rank);
    };
    GoFish.prototype.askComputerHandForACArd = function (cardRank) {
        this.giveComputerHand();
        this.givePlayerHand();
        cardRank = this.userInputElement2.value;
        if (this.checkComputerHandForPlayerRequestCard) {
            for (var i = 0; i < this.computerHand.length; i++) {
                //card= this.computerHand[i]
                if (cardRank == this.computerHand[i].rank) {
                    this.playerHand.push(this.computerHand[i]);
                    var index = this.computerHand.indexOf(this.computerHand[i], 0);
                    if (index > -1) {
                        this.computerHand.splice(index, 1);
                    }
                }
            }
            return this.displayElement.innerHTML += "</br>" + "The computer has " + cardRank + ". Your card is " + this.playerHand + ". Click GetCard to continue";
        }
        else
            this.goFishingPlayer();
        // let element = document.getElementById("display")
        return this.displayElement.innerHTML += "</br>" + "the computer doesnt have your card. GoFishing. Your card is " + this.playerHand + ". Click GetCard to continue";
    };
    GoFish.prototype.getMaximimRepeatingCard = function (cards) {
        if (cards.length == 0) {
            return null;
        }
        var card = cards[0];
        var modeMap = {};
        var maxCount = 1;
        for (var i = 0; i < cards.length; i++) {
            var maxRank = cards[i].rank;
            if (modeMap[maxRank] == null)
                modeMap[maxRank] = 1;
            else
                modeMap[maxRank]++;
            if (modeMap[maxRank] > maxCount) {
                card.rank = maxRank;
                maxCount = modeMap[maxRank];
            }
        }
        return card.rank;
    };
    GoFish.prototype.computerCardToRequest = function () {
        this.giveComputerHand();
        return this.getMaximimRepeatingCard(this.computerHand);
    };
    GoFish.prototype.checkPlayerHasRequestedCardRank = function (rank) {
        this.givePlayerHand();
        console.log(this.checkCardExistance(this.playerHand, rank));
        console.log(this.playerHand);
        return this.checkCardExistance(this.playerHand, rank);
    };
    GoFish.prototype.askPlayerForACard = function (rank) {
        rank = this.computerCardToRequest();
        console.log("The computer requested " + rank);
        this.givePlayerHand();
        if (this.checkPlayerHasRequestedCardRank(rank)) {
            for (var i = 0; i < this.playerHand.length; i++) {
                if (rank == this.playerHand[i].rank) {
                    this.computerHand.push(this.playerHand[i]);
                    var index = this.playerHand.indexOf(this.playerHand[i], 0);
                    if (index > -1)
                        this.playerHand.splice(index, 1);
                }
            }
            console.log(this.goFishPlayer.getName + " has " + rank + "." +
                "The card is added to the computer hand");
            // rank = this.computerCardToRequest();
            // this.checkPlayerHasRequestedCardRank(rank);
        }
        else {
            console.log(" the player doesnt have " + rank + ". Go Fish!!");
        }
        return this.computerHand;
    };
    GoFish.prototype.goFishingComputer = function () {
        this.giveComputerHand();
        if (this.deck.cards.length > 0) {
            console.log("The computer is fishing");
            this.computerHand.push(this.deck.cards[0]);
            this.deck.cards.splice(0, 1);
            console.log(this.computerHand);
            console.log(this.deck.cards.length);
        }
        else
            console.log("The deck is empty. Game over");
    };
    GoFish.prototype.goFishingPlayer = function () {
        this.givePlayerHand();
        if (this.deck.cards.length > 0) {
            console.log("The player is fishing");
            this.playerHand.push(this.deck.cards[0]);
            this.deck.cards.splice(0, 1);
            console.log(this.playerHand);
            console.log(this.deck.cards.length);
        }
        else
            console.log("The deck is empty. Game over");
    };
    // checkPlayersCardRequestForGameRule(input: string):Boolean {
    //     this.givePlayerHand()
    //     console.log("Am I working")
    //    input= this.userInputElement.value
    //    let checkresult:Boolean = false;
    //     //let element = document.getElementById("display")
    //     for (let i = 0; i < this.playerHand.length; i++) {
    //         if (input == this.playerHand[i].rank) {
    //             checkresult = true;
    //            // checkresult = "</br>" + element.innerHTML +" " + this.askComputerHandForACArd(input);
    //             break;
    //         } 
    //     }
    //             checkresult = false;
    //             //console.log("the input is not correct")
    //            // checkresult =  checkresult = "</br>" + element.innerHTML +" " + "insert proper value";
    //             //input= this.userInputElement.value
    //         console.log(checkresult)
    //         console.log(this.playerHand)
    //     return checkresult;
    // }
    GoFish.prototype.countBooksInHand = function (cards) {
        if (cards.length == 0) {
            return null;
        }
        var card = cards[0];
        var modeMap = {};
        var maxCount = 1;
        for (var i = 0; i < cards.length; i++) {
            var maxRank = cards[i].rank;
            if (modeMap[maxRank] == null)
                modeMap[maxRank] = 1;
            else
                modeMap[maxRank]++;
            if (modeMap[maxRank] > maxCount && modeMap[maxRank] == 4) {
                card.rank = maxRank;
                maxCount = modeMap[maxRank];
            }
        }
        return card.rank;
    };
    GoFish.prototype.countPlayerScore = function (cards) {
        var rank = this.countBooksInHand(cards);
        var score = this.goFishPlayer.getscore();
        for (var i = 0; i < cards.length; i++) {
            if (cards[i].rank == rank) {
                score += 1;
            }
        }
    };
    GoFish.prototype.countComputerScore = function (cards) {
        var rank = this.countBooksInHand(cards);
        var score = this.computerPlayer.getscore();
        for (var i = 0; i < cards.length; i++) {
            if (cards[i].rank == rank) {
                score += 1;
            }
        }
    };
    GoFish.prototype.removeBooksinHand = function (cards) {
        var rank = this.countBooksInHand(cards);
        for (var i = 0; i < cards.length; i++) {
            if (cards[i].rank == rank) {
                var index = this.playerHand.indexOf(this.playerHand[i], 0);
                if (index > -1)
                    this.playerHand.splice(index, 1);
            }
        }
    };
    GoFish.prototype.removeBookedComputerHand = function () {
        this.removeBooksinHand(this.computerHand);
    };
    GoFish.prototype.removeBookedPlayerHand = function () {
        this.removeBooksinHand(this.playerHand);
    };
    GoFish.prototype.decideWiner = function () {
        var computerScore = this.computerPlayer.getscore();
        var playerScore = this.goFishPlayer.getscore();
        console.log("Computer score is " + computerScore);
        console.log("Player score is " + playerScore);
        if (computerScore > playerScore)
            console.log(" The computer won");
        else if (computerScore < playerScore)
            console.log("Wow, you won! Congrats!!!");
        else if (computerScore == playerScore)
            console.log("The game is tie! try again");
    };
    return GoFish;
}());
/// <reference path="GoFish.ts" />
var GoFishGame = /** @class */ (function () {
    function GoFishGame() {
        this.goFish = new GoFish();
        this.displayElement = document.getElementById("display");
        this.userInputElement = document.getElementById("user_input");
    }
    GoFishGame.prototype.init = function () {
        this.displayElement.innerHTML += "Insert the name you want to use for the game";
    };
    GoFishGame.prototype.getUserResponse = function () {
        var response = this.userInputElement.value;
        this.displayElement.innerHTML += "Welcome, " + this.userInputElement.value + ". Click the GetHand button to continue!";
    };
    GoFishGame.prototype.getHand = function () {
        return goFishGame.getHand();
    };
    return GoFishGame;
}());
/// <reference path="BlackJackConsole.ts" />
/// <reference path="GoFish.ts" />
/// <reference path="GoFishGame.ts" />
var goFishGame = new GoFishGame();
var goFish = new GoFish();
var blackJack = new BlackJack();
//let blackJackConsole = new BlackJackConsole()
blackJack.startGame();
//# sourceMappingURL=app1.js.map