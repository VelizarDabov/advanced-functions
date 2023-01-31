function solution(){
const library = {
    apple: {carbohydrate:1, flavour:2},
    lemonade: {carbohydrate: 10, flavour:20},
    burger: {carbohydrate: 5, fat:7, flavour:3},
    eggs: {protein: 5, fat:1, flavour: 1},
    turkey: {protein: 10,carbohydrate: 10,  fat: 10, flavour:10 }
}
const storedElements = {
    protein: 0,
    carbohydrate: 0,
    fat:0,
    flavour:0,
}

function manager(str){
let [command, action, quantity] = str.split(' ');
quantity = Number(quantity);
if(command === 'prepare'){
    let recipe = library[action];

    for (let element in recipe) {
        if(recipe[element] * quantity > storedElements[element]){
            return `Error: not enough ${element} in stock`
        }
        
    }
    for (let element in recipe){
        storedElements[element] -= recipe[element]*quantity;
    }
    return 'Success'
}else if(command === 'restock'){
    storedElements[action] += quantity;
    return 'Success'
}else if (command === 'report'){
    let result = [];
    for (let element in storedElements) {
       result.push(`${element}=${storedElements[element]}`)
    }
    return result.join(' ')
}
}
    return manager;
}





let manager = solution ();

console.log (manager ("restock flavour 50")); // Success

console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));

