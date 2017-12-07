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
