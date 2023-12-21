// Task1

// let number = console.log("Enter the number");
// let symbol = " ";
// function show (number)
// {
//     for(let i = 0; i <= number; i++)
//     {
//         symbol += "(";
//     }
//     for(let i = 0; i <= number; i++)
//     {
//         symbol += ")";
//     }

//     return symbol; 
// };

//Task2

// let squere = null;
// function getRectangleArea(width, height) {
//     if (isNaN(width) || isNaN(height))
//         throw new ReferenceError("Only number type")
//     if (width < 0 || height < 0)
//         throw new Error("Olny positive numbers")

//     return width * height;
// };
// let width = +prompt("Enter the width rectangle:");
// let height = +prompt("Enter the height rectangle:");

// console.log(getRectangleArea(width, height));

//Task3

class WeekdayError extends Error {
    constructor(message) {
        super(message || "Incorrect weekday number")
    }
}


function showWeekdayName(day) {

    if (day < 1 || day > 7)
        throw new WeekdayError("Incorrect weekday number")

    switch (day) {
        case 1:
            alert("Monday");
            break;
        case 2:
            alert("Tuesday");
            break;
        case 3:
            alert("Wednesday");
            break;
        case 4:
            alert("Thursday");
            break;
        case 5:
            alert("Friday");
            break;
        case 6:
            alert("Saturday");
            break;
        case 7:
            alert("Sunday");
            break;
    };
}
let day = +prompt("Enter number of the day:")
console.log(showWeekdayName(day)); 


