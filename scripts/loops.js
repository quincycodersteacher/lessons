function printArray(arr) {
    console.log('-----------Begin----------------');
    for (let i = 0; i < arr.length; i++) { 
        console.log(arr[i]);
    }
    console.log('------------End---------------');
}

let fruits = ["Apple", "Orange", "Plum"];
printArray(fruits);

let arr = [];
console.log(arr.length);
arr.push("1");
console.log(arr.length);
arr.push("2");
printArray(arr);
console.log(arr.length);
let item = arr.pop();
console.log(arr.length);
printArray(arr);
