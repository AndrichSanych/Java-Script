// 1
let array = [];

for (let i = 0; i < 20; i++) {
    //array.fill(parseInt(Math.random()*100,0,20));
    array.push(parseInt(Math.random() * 100));
    console.log(`[${i + 1}] - ${i}`)
}
console.log("Array:", array);

// 2
for (let i = 0; i < array.length; i++) {
    console.log(`[${i}] ${array[i]}`);
}

//3
for (let i = 0; i < array.length; i++) {
    if (array[i] % 7 == 0) {
        console.log(`Number is: ${array[i]}`)
    }
}
// find
//4
array.sort((a, b) => b - a);
console.log("Sorted array:", array);

//5 
array.fill(0, 10, 19);
console.log("After fill:", array);

//6
for (let i = 0; i < 3; i++) {
    array.shift();
}
// splice
console.log("Array after shift:", array);

//7
const numbers = array.reduce((result, current) => result == current ? true : false, [0]);
console.log("Same numbers in array:", numbers);

//8
console.log("Copy array without first and last:", array.pop(), array.shift(), array.map(x => x * 1));

//9
let countEven = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        countEven++;
    };
}
console.log("Count of even numbers:", countEven);