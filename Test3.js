describe ('calculatorSuite',function(){
    
    var calculator = new Calculator();

    it('should add two numbers', function(){
        expect(calculator.add(parseInt(4),parseInt(5))).toBe(10);
    })


})
