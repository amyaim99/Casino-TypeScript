class Dice{
    displayElement:any

    userInputElement: any

    constructor(){
        this.displayElement = document.getElementById("display")
        this.userInputElement= document.getElementById("user_input");}

    //Dice made to be dynamic to adapt to dice needed per game.
    rollDice (diceNeeded: number){
       // diceNeeded = parseInt(this.userInputElement.value)
      //  console.log("is this ur inout" + diceNeeded)
       // console.log("this is a test!")
         var diceTotal: number = 0;
         var die;
         for(var i = 0; i < diceNeeded; i++){
             die = (Math.random()*6) + 1;
             diceTotal += die;
         }
         return diceTotal;

      //  return this.displayElement+=diceTotal.toString

    }

     showDice(){
        this.displayElement.innerHTML += this.rollDice(2);
    }
}