/*Ex 1 - 15 percent off total of two items

var item1 = 3;
var item2 = 10;
var total = item1 + item2;
var discountPrice = total - (total*15/100);
console.log(discountPrice);

*/

//Ex 2 - Conditional Operators - 3 cat show breeds per group - number of breeds needed to complete group - modulus

/*
var breedCount = document.getElementsByTagName("LI");

console.log("breedCount"); 
*/

/* TRY THIS >>> function breedFunction() { 
    let breedCount = number(document.getElementsByTagName("LI");
    let breedsNeeded = number(breedCount % 3)
*/

//^ counts breeds in list - can't get it to work!!//

/*var num = document.querySelectorAll(".groups.li").length;
console.log(num)

var breedsNeeded = num % 3

console.log(breedsNeeded == 0 ? 0:(3-breedsNeeded));
*/

// Ex 3 - Boolean, Equality operators - Send alert when cat breed is entered//
/*
function validateForm() {
    let x = document.forms["catTypes"]["breed"].value;
    if (x === "Chartreux") {
        alert("Your cat is gray and they are awesome!");
        return true;
    }
    else if (x === "Himalayan") {
        alert("CONGRATS Your cat has no nose and they are excellent!");
        return true;
    }
    else if (x === "Devon Rex") {
        alert("Oh.My.Gosh! Your cat has the tightest curls and they are wonderful!");
        return true;
    }
    else if (x === "Abyssinian") {
        alert("Is your cat sorrel, blue, chocolate, lilac, fawn, or silver? Whatever colour, they are brilliant!");
        return true;
    }
    else if (x === "Bombay") {
        alert("Wow! Your cat is so shiny, black and gorgeous!");
        return true;
    }
    else (x !== "Chartreux", "Himalayan", "Devon Rex", "Abyssinian", "Bombay") ;
    {
        alert("*sadface* I have not met your cat! But I bet they are adorable!"); 
        return true
    }
}
*/

//Ex 4 - ternary operators

/*const val = "Cate";
const rainPercentage = 0.2;
const temperatureInC = 26;

let message = `Hello, ${val}, with a rain chance of ${rainPercentage * 100}% and a temperature of ${temperatureInC}C we recommend that you ` + (rainPercentage > 0.3 ? "take an umbrella" : "enjoy this rain-free day") +
`${temperatureInC >= 26 ? ' and watch out for heatstroke.' : ' and bask in this fine weather.'}`;

console.log(message);

document.getElementById("messagePara").innerText = message;

//ex 5 - conditional//

//let timeVal = new Date();
let timeVal = getHours();
let hours = timeVal.getHours();

if(hours <= 10) {
    alert("good morning")
}

else if(hours >= 12 && hours <= 18) {
    alert("happy afternoon")
}

else {hours >=19
    alert("good evening")
}
*/

//Ex 6 - Sequence and comments
/*
const lineOne = "Joy to the world";
const lineTwo = "All the boys and girls";
//const lineThree = "Joy to the fishes in the deep blue sea";
const lineFour = "Joy to you and me";

// const chorus = `${lineOne}\n${lineTwo}\n${lineThree}\n${lineFour}`;
const chorus = `${lineOne}\n${lineTwo}\n${lineFour}`;

chorus;

*/

//ex 7 - 3 variable demographics - 1st kids, 2nd teens, 3rd adults 1 - print 

function checkMessage() {

    let age;
    let returnMessage;
    age = document.getElementById("demoVal").value;

    if(age <= 12) 
    {
        returnMessage = "g'day kiddo, here's your card";
    }

    if(age >= 13 && age <= 17) 
    {
        returnMessage = "something something tic toc";
    }

    if(age >=18)
    {
        returnMessage = "ey, good to go, buddy";
    }

    document.getElementById("memberMessage").innerText = returnMessage;

}


/*let messageEx7 = `Hello, ${nameVal}, with a rain chance of ${rainPercentage * 100}% and a temperature of ${temperatureInC}C we recommend that you ` + (rainPercentage > 0.3 ? "take an umbrella" : "enjoy this rain-free day") +
`${temperatureInC >= 26 ? ' and watch out for heatstroke.' : ' and bask in this fine weather.'}`;

console.log(messageEx7);
*/

