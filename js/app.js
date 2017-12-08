var AliceAndBob = /** @class */ (function () {
    function AliceAndBob() {
        this.displayElement = document.getElementById("display");
        this.userInputElement = document.getElementById("user_input");
    }
    AliceAndBob.prototype.init = function () {
        this.askForName();
    };
    AliceAndBob.prototype.askForName = function () {
        this.displayElement.innerHTML += "What is your name?";
    };
    return AliceAndBob;
}());
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
                case 11:
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
        var diceRollTotal = dice.rollDice(2);
        switch (diceRollTotal) {
            case 7:
            case 11:
                this.gameMessage = "You rolled a: " + diceRollTotal + "! You win!";
                this.gameStatus = 1;
                // addWinnings();
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
/// <reference path="Dice.ts" />
/// <reference path="Craps.ts" />
// let aliceBob = new AliceAndBob();
// aliceBob.init();
var dice = new Dice();
var craps = new Craps();
//drt.rollDice();
//document.getElementById("display").innerHTML+="string";
//var diceRollTotal = drt.rollDice(2); 
//# sourceMappingURL=app.js.map