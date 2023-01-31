function calculator() {
    let numOne;
    let numTwo;
    let result;
    return{
        init:(selector1, selector2,resultSelector) => {
        numOne = document.querySelector(selector1);
        numTwo = document.querySelector(selector2);
        result = document.querySelector(resultSelector)
        },
        add: () => (result.value = +numOne.value + +numTwo.value),
        subtract: () => (result.value = Number(numOne.value) - Number(numTwo.value))
    }
    
}

const calculate = calculator ();

calculate.init ('#num1', '#num2', '#result');



