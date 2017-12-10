var Dice = /** @class */ (function () {
    function Dice() {
        this.displayElement = document.getElementById("display");
        this.userInputElement = document.getElementById("user_input");
    }
    //Dice made to be dynamic to adapt to dice needed per game.
    Dice.prototype.rollDice = function (diceNeeded) {
        var diceTotal = 0;
        var die;
        for (var i = 0; i < diceNeeded; i++) {
            die = (Math.random() * 6);
            diceTotal += die;
        }
        return Math.round(diceTotal);
    };
    Dice.prototype.showDice = function () {
        this.displayElement.innerHTML += this.rollDice(2);
    };
    return Dice;
}());
var Craps = /** @class */ (function () {
    //make getter/setter
    function Craps() {
        this.nextRoll = function () {
            console.log("point" + this.setPlayerPoint());
            //this.shooter = 0; Need to reset shooter to 0 after each roll
            var shooter = dice.rollDice(2);
            console.log("shooter" + shooter);
            //add payout to bank
            switch (shooter) {
                case this.shooter = this.setPlayerPoint():
                    this.gameMessage = "You win!(2nd roll?)";
                    break;
                case 7:
                    //case 11:
                    this.gameMessage = "You lose!";
                    // loseBet();
                    this.gameStatus = 2;
                    break;
                case 2:
                    this.gameMessage = "You win!";
                    // addWinnings();
                    this.gameStatus = 1;
                    break;
                default:
                    this.gameMessage = "You rolled a: " + shooter + " you need to roll a " + this.point + " Please roll again.";
                    this.gameStatus = 3;
                    break;
            }
            return "</br>" + this.gameMessage;
        };
        this.displayElement = document.getElementById("display");
        this.userInputElement = document.getElementById("user_input");
    }
    Craps.prototype.firstRoll = function () {
        var diceRollTotal = 7; //dice.rollDice(2); 
        switch (diceRollTotal) {
            case 7:
            case 11:
                //crapscash.addPlyrWinnings();
                this.gameMessage = "You rolled a: " + diceRollTotal + "! You win!"; // + crapscash.addPlyrWinnings() ;
                this.gameStatus = 1;
                break;
            case 2:
            case 3:
            case 12:
                this.gameMessage = "You rolled a: " + diceRollTotal + "! You lose!";
                this.gameStatus = 2;
                //loseBet();
                break;
            default:
                //player.setPlayerPoint(diceRollTotal);
                this.gameMessage = "Your point has be set to: " + diceRollTotal + ". Please roll again.";
                this.gameStatus = 3;
                this.point = diceRollTotal;
                break;
        }
        return this.gameMessage;
    };
    Craps.prototype.firstDiceRoll = function () {
        this.displayElement.innerHTML += this.firstRoll();
    };
    Craps.prototype.getPlayerPoint = function () { };
    Craps.prototype.setPlayerPoint = function () {
        var setPlayerPoint = this.point;
        return setPlayerPoint;
    };
    Craps.prototype.nextDiceRoll = function () {
        this.displayElement.innerHTML += this.nextRoll();
    };
    return Craps;
}());
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
    return Player;
}());
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
    Card.prototype.getRank = function () {
        return this.rank;
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
        return element.innerHTML += "</br>" + "your card is " + this.playerHand + ". Click GetCard to continue";
    };
    GoFish.prototype.checkPlayersCardRequestForGameRule = function (input) {
        this.givePlayerHand();
        console.log("Am I working");
        input = this.userInputElement.value;
        var checkresult = false;
        //let element = document.getElementById("display")
        for (var i = 0; i < this.playerHand.length; i++) {
            if (input.toUpperCase() == this.playerHand[i].rank) {
                checkresult = true;
                // checkresult = "</br>" + element.innerHTML +" " + this.askComputerHandForACArd(input);
                break;
            }
        }
        checkresult = false;
        //console.log("the input is not correct")
        // checkresult =  checkresult = "</br>" + element.innerHTML +" " + "insert proper value";
        //input= this.userInputElement.value
        console.log(checkresult);
        console.log(this.playerHand);
        return checkresult;
    };
    GoFish.prototype.askComputerHandForACArd = function (cardRank) {
        cardRank = this.userInputElement.value;
        var cards = [];
        var card;
        console.log(this.checkComputerHandForPlayerRequestCard(cardRank));
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
        }
        // let element = document.getElementById("display")
        //  return element.innerHTML += "</br>" + "your card is " + this.playerHand +". Click GetCard to continue"
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
    GoFish.prototype.checkCardExistance = function (cards, rank) {
        var checkOutcome = false;
        for (var i = 0; i < cards.length; i++) {
            if (cards[i].rank == rank)
                checkOutcome = true;
        }
        return checkOutcome;
    };
    GoFish.prototype.checkComputerHandForPlayerRequestCard = function (rank) {
        rank = this.userInputElement.value;
        this.giveComputerHand();
        console.log(this.checkCardExistance(this.computerHand, rank));
        console.log(this.computerHand);
        return this.checkCardExistance(this.computerHand, rank);
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
var CrapsCash = /** @class */ (function () {
    function CrapsCash() {
        this.plrBetInput = document.getElementById("plyrBet");
        this.plrBetInputDisplay = document.getElementById("display");
        this.displayElement = document.getElementById("display");
        this.userInputElement = document.getElementById("plyrCashToTable");
    }
    CrapsCash.prototype.setPlrCash = function () {
        var playerCashOnTable = this.userInputElement.value;
        this.betMessage = "You have made " + playerCashOnTable + " available for betting. How much would you like to bet?";
        var playerCash = playerCashOnTable;
        console.log("player cash:" + playerCash);
        return this.betMessage;
    };
    CrapsCash.prototype.plyrCashToTable = function () {
        this.displayElement.innerHTML += this.setPlrCash();
    };
    CrapsCash.prototype.setPlyrCashAvail = function () {
        var getPlyrCashAvail = this.setPlrCashAvail;
        return getPlyrCashAvail;
    };
    CrapsCash.prototype.setPlyrBet = function () {
        var betAmount = this.plrBetInput.value;
        if (betAmount <= this.setPlyrCashAvail) {
            this.betMessage = "You have made a bet of" + betAmount + ". Please take your first roll";
        }
        else {
            this.betMessage = "You have place a bet larger than your available cash. Please wager a smaller amount.";
        }
        console.log("player bet:" + this.getPlyrCashAvail);
        return this.betMessage;
    };
    CrapsCash.prototype.currentPlyrBet = function () {
        this.plrBetInputDisplay.innerHTML += this.setPlyrBet();
    };
    CrapsCash.prototype.addPlyrWinnings = function () {
        //add setPlyrBet to plyrCashAvail
        console.log("getPlyrCashAvail: " + this.getPlyrCashAvail);
        this.getPlyrCashAvail += this.betAmount;
        this.betMessage = "You won." + this.betAmount + "has been added to your total. You now have:" + this.getPlyrCashAvail + ". Would you like to play again?";
        return this.betMessage;
    };
    CrapsCash.prototype.minusPlyrLoss = function () {
        //minus setPlyrBet to plyrCashAvail
        this.getPlyrCashAvail -= this.betAmount;
        this.betMessage = "You lost." + this.betAmount + "has been deducted from your total. You now have:" + this.getPlyrCashAvail + ". Would you like to play again?";
        return this.betMessage;
    };
    return CrapsCash;
}());
/// <reference path="Dice.ts" />
/// <reference path="Craps.ts" />
/// <reference path="GoFishGame.ts" />
/// <reference path="CrapsCash.ts" />
// let aliceBob = new AliceAndBob();
// aliceBob.init();
var dice = new Dice();
var craps = new Craps();
var crapscash = new CrapsCash();
//drt.rollDice();
//document.getElementById("display").innerHTML+="string";
//var diceRollTotal = drt.rollDice(2);
var goFishGame = new GoFishGame();
var goFish = new GoFish();
//# sourceMappingURL=app.js.map