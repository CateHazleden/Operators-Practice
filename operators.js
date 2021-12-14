/*

//EXERCISE_1 - 15 percent off total of two items

var item1 = 3;
var item2 = 10;
var total = item1 + item2;
var discountPrice = total - (total*15/100);
console.log(discountPrice);



//EXERCISE_2 - Conditional Operators - 3 cat show breeds per group - number of breeds needed to complete group - modulus
*/

var breedCount = document.getElementsByTagName('li');

//console.log("breedCount"); 


//TRY THIS >>>

function breedFunction() { 
    let breedCount = number(document.getElementsByTagName('li'));

    let b = number(breedCount % 3);

    document.getElementById('modulus').innerHTML = (b == 0 ? 0:(3-b));

};





//^ counts number of breeds in list - can't get it to work!!

/*let num = document.querySelectorAll(".groups.li").length;
console.log(num);

let breedsNeeded = num % 3;

console.log(breedsNeeded == 0 ? 0:(3-breedsNeeded));


//EXERCISE_3 - Boolean, Equality operators - Send alert when cat breed is entered

function validateForm() {
    let x = document.forms["catTypes"]["breed"].value;
    if (x === "Chartreux") {
        defineMessage("Your cat is gray and they are awesome!");
        ;
    }
    else if (x === "Himalayan") {
        defineMessage("CONGRATS Your cat has no nose and they are excellent!");
        ;
    }
    else if (x === "Devon Rex") {
        defineMessage("Oh.My.Gosh! Your cat has the tightest curls and they are wonderful!");
        ;
    }
    else if (x === "Abyssinian") {
        defineMessage("Is your cat sorrel, blue, chocolate, lilac, fawn, or silver? Whatever colour, they are brilliant!");
        ;
    }
    else if (x === "Bombay") {
        defineMessage("Wow! Your cat is so shiny, black and gorgeous!");
        ;
    }
    else {
        defineMessage("*sadface* I have not met your cat! But I bet they are adorable!"); 
    }
    document.getElementById("paraMessage").innerText = defineMessage

}
*/

//EXERCISE_4 - ternary operators

/*const val = "Cate";
const rainPercentage = 0.2;
const temperatureInC = 21;

let message = `Hello, ${val}, with a rain chance of ${rainPercentage * 100}% and a temperature of ${temperatureInC}C we recommend that you ` + (rainPercentage > 0.3 ? "take an umbrella" : "enjoy this rain-free day") +
`${temperatureInC >= 26 ? ' and watch out for heatstroke.' : ' and bask in this fine weather.'}`;



document.getElementById("messageEx4").innerText = message;

//SESSION 12a - conditional//

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
//SESSION 12b - Sequence and comments

/*const lineOne = "Joy to the world";
const lineTwo = "All the boys and girls";
//const lineThree = "Joy to the fishes in the deep blue sea";
const lineFour = "Joy to you and me";

// const chorus = `${lineOne}\n${lineTwo}\n${lineThree}\n${lineFour}`;
const chorus = `${lineOne}\n${lineTwo}\n${lineFour}`;

chorus;
*/

//SESSION 13 - 3 variable demographics - 1st kids, 2nd teens, 3rd adults 1 - print 

/*function checkMessage() {

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


let messageEx7 = `Hello, ${nameVal}, with a rain chance of ${rainPercentage * 100}% and a temperature of ${temperatureInC}C we recommend that you ` + (rainPercentage > 0.3 ? "take an umbrella" : "enjoy this rain-free day") +
`${temperatureInC >= 26 ? ' and watch out for heatstroke.' : ' and bask in this fine weather.'}`;

console.log(messageEx7);
*/

//SESSION 14a SWITCH STATEMENTS

/*function catGreetings(){

        
        let breedVal = document.getElementById("sessionFourteena").value; 
        let greeting;

        switch (breedVal) {
            case "Chartreux":
                greeting = "Your cat is gray and they are awesome!";
                break;
        
            case  "Himalayan":
                greeting = "CONGRATS Your cat has big eyes and they are excellent!";
                break;
        
            case  "Devon Rex":
                greeting = "Oh.My.Gosh! Your cat has the tightest curls. They are wonderful!";
                break;
            
            case  "Abyssinian":
                greeting = "Is your cat sorrel, blue, chocolate, lilac, fawn, or silver? They are brilliant!";
                break;
            
            case  "Bombay":
                greeting = "Wow! Your cat is so shiny, black and gorgeous!";
                break;
            
            default:
                greeting = "*sadface* I have not met your cat! But I bet they are adorable!"; 
           }

        document.getElementById("messagePara").innerText = greeting;
}

//SESSION 14b - 3 variable demographics - 1st kids, 2nd teens, 3rd adults 1 - print 

function checkMessage() {

    
    let ageVal, demoInfo;
    let demoMessage;

    ageVal = document.getElementById("ageVal").value;

    if(ageVal <= 12){
        demoInfo = "kids"
    }
    console.log()

    if(ageVal >= 13 && ageVal <= 17){
        demoInfo = "teens"
    }

    if(ageVal >=18){
        demoInfo = "adults"
    }

    
    
    switch (demoInfo) {

        case  "kids":        
            demoMessage = "G'day kiddo, here's your card";
            break;

        case "teens":        
            demoMessage = "Something something viral tic toc trend";
            break;

        case "adults":        
            demoMessage = "Ey, good to go, buddy";
            break;

        default:
            demoMessage = "Enter yer age"
    }
    document.getElementById("demoPara").innerText = demoMessage;
}
    
function demoReset() {
    document.getElementById("demoReset")
}
//Session 14c Loops

//Increment
let count = 1
//while(count <=5) {
//console.log(`I am the ${count}, I love to count!`)
count++;
}*/
/*
//Decrement
let dec = 10
while(dec >=1) {
console.log(`I am the ${dec}, I love to count!`)
 dec--;
}


//Do while
let count = 1
do{
    console.log(`I am the ${count}, I love to count!`)
    count++;
} while(count <=5);

do {
    console.log(`I will execute once`);
} while (false);

//For Loop

for(inc = 0; inc<=10; inc++) {
    console.log(`I am the ${inc}, I love to count!`)
}

for(dec = 10; dec>=0; dec--) {
    console.log(`I am the ${dec}, I love to count!`)
}

//Session 14d Functions

function addVal(){
    
   let numVal1 = document.getElementById("num1").value;
   let numVal2 = document.getElementById("num2").value;

   numVal1 = parseInt(numVal1);
   numVal2 = parseInt(numVal2);

   console.log(numVal1 + numVal2);   
}

document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("numMessage").innerHTML = "The answers you seek can not be revealed. <br> ";
    }
);


document.getElementById("numMessage").addEventListener("mouseover", function(){
    document.getElementById("secretMess").innerHTML = "They are in the console log though ;)"
    }
);

let hides = document.getElementById("hideme");

for ( let i=0; i < hides.length; i++) {
    hides[i].addEventListener("mouseover", function(){
     let id = this.getAttribute("secretMess");
     document.getElementById(hideme).style.visibility = "hidden";
     });
 }

for ( let i=0; i < hides.length; i++) {
   hides[i].addEventListener("mouseout", function(){
    id = this.getAttribute("secretMess");
    document.getElementById(hideme).style.visibility = "hidden";
    });
}
*/

/*
//SESSION 15

//Session 15a Functions, Arguments, Parameters, Return

document.getElementById("returner").innerHTML = myFunction(5+10);

function myFunction(a, b) {
    return a + b;
}





let hello = "Hi";
let firstName = "PonyFace";

function say(hello, firstName) {        
    return `${hello}, ${firstName}!`
  };

document.getElementById("returnGN").innerHTML = say(hello, firstName);




//Session 15b Arrays - push pop shift

const cars = ["Mini", "Fiat", "Morris", "Hunter", "VW", "Skode", "Daihatsu"];

console.log(cars);

cars.push("Ford");

document.getElementById("cB1").addEventListener("click", carFunction);

function carFunction() {
    document.getElementById("pushEx").innerHTML = cars;
}

console.log(carFunction);

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

days.pop();
// => "Sun"

days;
// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

//const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

days.shift();
// => "Mon"

days;
// => [Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

//Session 16a Slices

const primes = [2,3,5,7]


const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

days.slice(2, 5);

//SPLICE

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

days.splice(2);
// => ["Wed", "Thu", "Fri", "Sat", "Sun"]
*//*
const menu = ['Jalapeno Poppers', 'Cheeseburger', 'Fish and Chips', 'French Fries', 'Onion Rings'];

menu.splice(1, 2, 'Veggie Burger', 'House Salad', 'Teriyaki Tofu');
// => ["Cheeseburger", "Fish and Chips"]

menu;*/
// => ["Jalapeno Poppers", "Veggie Burger", "House Salad", "Teriyaki Tofu", "French Fries", "Onion Rings"]

//Session 15b
//Arrays

/*

for (let i=0; i< cars.length; i++){
    //console.log(`My Favourite Car is ${cars[i]}`);
    console.log(`My Favourite Car Number ${i} is ${cars[i]}`);
}


for (let i=cars.length-1; i>=0; i--){
    //console.log(`My Favourite Car is ${cars[i]}`);
    console.log(`My Favourite Car Number ${i} is ${cars[i]}`)
}

for (let i=0; i<cars.length; i++){
    //console.log(`My Favourite Car is ${cars[i]}`);
    console.log(`My Favourite Car Number ${i} is ${cars[i]}`)
}
*/


/*
const copyOfCars = [...cars];

let x = copyOfCars

console.log(x)
document.getElementById("carsPara").innerHTML = "<p>This is a Copy of Cars List:" + " " + x + "</p>";

// Work out how to space-separate values in output


const allCars = [...cars, 'Austin', 'Leyland']

let i = allCars

console.log(i)
document.getElementById("carsPara2").innerHTML = "<p>This is a Spread of Cars List with two cars added:" + " " + i + "</p>";

let q = cars.pop();
document.getElementById("pop").addEventListener("click", popFunction);

function popFunction() {
    document.getElementById("popPara").innerHTML = q;
};


//Session_18 Objects and Arrays



const myArray = [];

myArray.summary = 'Empty array!';

myArray.push(2, 3, 5, 7);


//Object Iteration

const myArray1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

for (const inc of myArray1) {
  console.log(inc);
}

const myArrayOfCats = ['Max', 'Bertie', 'Teddy', 'Cpt Midnight', 'Philip'];

for (const inc of myArrayOfCats){
    document.getElementById("catArray").innerHTML = inc;
}


const address = {
    street1: '11 Broadway',
    street2: '2nd Floor',
    city: 'New York',
    state: 'NY',
    zipCode: "10004"
  };
  
  for (const key in address) {
    console.log(key);
  }



function changeBG0(){
    document.getElementById("redbtn").style.backgroundColor = "#8e2f2d";
}  

function changeBG1(){
    document.getElementById("pinkbtn").style.backgroundColor = "pink";
}  

function changeBG2(){
    document.getElementById("beigebtn").style.backgroundColor = "beige";
} 

document.getElementById("changeBG").onclick = changeColor

  function changeColor() {
    document.getElementById(redbutt).style.backgroundColor = "#8e2f2d";

    console.log()

    document.getElementById("pinkButt").style.backgroundColor = "#9c645c";

    document.getElementById("beigeButt").style.backgroundColor = "#f2d8b3";
}

//Session_19

function changeFontColor() {
    let fontColor = document.getElementById("colorInput").value;

    document.getElementById('fontChangePara').style.color = fontColor;
}

function changeFontColor() {
    let fontColor = document.getElementById("colorInput").value;

    document.getElementsByTagName('P').style.color = fontColor;  
};

//session_21


let listItems = document.querySelector('ul');
console.log(listItems);*/

/*let listItems = document.querySelectorAll('ul');
console.log(listItems);

let classItems = document.getElementsByClassName('sesssion_19');
console.log(classItems);*/


let idItems = document.getElementById('colorInput');
console.log(idItems);


let classItems2 = document.getElementsByClassName('border');
console.log(classItems2);

let qSelect = document.querySelector('p');
console.log(qSelect);

let qSelectA = document.querySelectorAll('p');
console.log(qSelectA);

let tName = document.getElementsByTagName('p');
console.log(tName);

//tName.style.color = 'red';


/*for (let i =0; i<classItems2.length; i++){
    classItems2[i].style.color = 'red';
}*/

//Kruti's code

function changeBGandFont() {
    
for (let i =0; i<classItems2.length; i++){
    classItems2[i].style.color = 'red';
    classItems2[i].innerHTML = "Paragraph text changed";
};

for (let i = 0; i < classItems2.length; i++){
    classItems2[i].style.backgroundColor = 'purple';
};

};

