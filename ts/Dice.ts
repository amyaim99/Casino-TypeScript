class Dice{
    displayElement:any

    userInputElement: any

    constructor(){
        this.displayElement = document.getElementById("display")
        this.userInputElement= document.getElementById("user_input");}

    //Dice made to be dynamic to adapt to dice needed per game.
    rollDice (diceNeeded: number){
  //correct dice to be random between diceNeeded & diceNeeded * 6
         var diceTotal: number = 0;
         var die;
         for(var i = 0; i < diceNeeded; i++){
             die = (Math.floor(Math.random()*6) + 1);
             diceTotal += die;
         }
         return Math.round(diceTotal);
    }
     showDice(){
        this.displayElement.innerHTML += this.rollDice(2);
    }
}