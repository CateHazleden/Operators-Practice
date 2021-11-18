//Ex 1 - 15 percent off total of two items//

var item1 = 3
var item2 = 10
var total = item1 + item2
var discountPrice = total - (total*15/100)
console.log(discountPrice)

//Ex 2 - Conditional Operators - 3 cat show breeds per group - number of breeds needed to complete group - modulus//

/*
var breedCount = document.getElementsByTagName("LI");

document.write(breedCount); */

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



//Ex 4 - String operators - 