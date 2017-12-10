/// <reference path="Player.ts" />


class MoneyPlayer extends Player{
    private money: number
   

    constructor(){
        super()
        this.money = 500
    }

getMoney():number{
    return this.money
}
setMoney(money:number){
this.money = money

}
}