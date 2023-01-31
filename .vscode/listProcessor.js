function solve(arr){
let newArr = [];
for (const command of arr) {
    let [currCommand, word] = command.split(' ');
    if(currCommand == 'add'){
        add();
    }else if(currCommand == 'remove'){
        remove();
    }else if (currCommand == 'print'){
        print()
    }
function add(){
    newArr.push(word);
}
function remove(){
    let index = newArr.indexOf(word);
    newArr.splice(index, 1)
}   

}
function print(){
    console.log(newArr.join(','));
}

}


solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])