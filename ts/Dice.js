var Dice = /** @class */ (function () {
    function Dice() {
        this.rollDice = function (diceNeeded) {
            //Dice made to be dynamic to adapt to dice needed per game.
            var diceTotal = 0;
            var die;
            for (var i = 0; i < diceNeeded; i++) {
                die = (Math.random() * 6) + 1;
                diceTotal += die;
            }
            return diceTotal;
        };
        this.displayElement = document.getElementById("display");
        this.userInputElement = document.getElementById("user_input");
    }
    Dice.prototype.showDice = function () {
        this.displayElement.innerHTML += this.rollDice(2);
    };
    return Dice;
}());
