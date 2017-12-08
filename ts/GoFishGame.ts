/// <reference path="GoFish.ts" />



class GoFishGame{

    goFish: GoFish
displayElement:any
    userInputElement: any

    constructor(){
        this.goFish = new GoFish()
        this.displayElement = document.getElementById("display");
        this.userInputElement= document.getElementById("user_input");
    }

    
    init(){
        this.displayElement.innerHTML += "Insert the name you want to use for the game";

    }

 
    getUserResponse () {

      
     var response = this.userInputElement.value
     this.displayElement.innerHTML += "Welcome, " + this.userInputElement.value + ". Click the GetHand button to continue!" ;


    }

     getHand():Card[]{

       return goFishGame.getHand()
     }
 




}