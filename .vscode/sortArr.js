function solve(arr, command){
let sortedArr = [];

if(command == 'asc'){
    sortedArr = arr.sort((a,b) => a - b)
}else if(command == 'desc'){
    sortedArr = arr.sort((a,b) => b - a);
}
return sortedArr;


}
solve([14, 7, 17, 6, 8], 'desc')