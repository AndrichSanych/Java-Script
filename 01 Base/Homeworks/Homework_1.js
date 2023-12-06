//1
//1.1
const year = 2023;
let userYear = +prompt("Enter your birthday year?");
let age = year - userYear;
alert(`Your age: ${age}`);

//1.2
const size = 820;
let flashSize = +prompt("Enter size in GB:");
let res = parseInt((flashSize * 1000)/size);
alert(`There are ${res} (size 820Mb) files get in flash`)

//2
//2.1
let number = +prompt("Enter number in range 0-9");
switch (number) {
    case 1:
        alert("!");
        break;
    case 2:
        alert("@");
        break;
    case 3:
        alert("#");
        break;
    case 4:
        alert("$");
        break;
    case 5:
        alert("%");
        break;
    case 6:
        alert("^");
        break;
    case 7:
        alert("&");
        break;
    case 8:
        alert("*");
        break;
    case 9:
        alert("(");
        break;
}

//2.2
let checkYear = +prompt("Enter year?");
if(checkYear%400==0||checkYear%4==0&&checkYear%100!=0)
{
    alert("The year is a intercalary");
}
else{ alert("The year is not intercalary")}

//3
