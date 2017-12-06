class AliceAndBob{
    displayElement:any

    userInputElement: any

    constructor(){
        this.displayElement = document.getElementById("display");
        this.userInputElement= document.getElementById("user_input");


    }

    init(){
        this.askForName();

    }


    private askForName () {

        this.displayElement.innerHTML+="What is your name?"

    }
}