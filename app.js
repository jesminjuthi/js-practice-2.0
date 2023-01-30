//* Show output in console 

// console.log('Jesmin Juthi')  
// console.log("Jesmin Juthi")

//* Variables (Var, Let, Const)
//! NB: Var is outdated. So try to avoid it 🙂

// let fullName = 'Jesmin Juthi'
// console.log(fullName);

// let sentence = "Let's learn JS! Let's goooo!";
// console.log(sentence);

//* Operators 👉 + - * / % ** 
//*** 🔥 Tips: How to take input from user? -> 🤔-> using "Prompt() function" 😃 
//* NB: Prompt returns sting as value  

// let favFruit = prompt("what is your favorite fruit?")
// console.log(favFruit) 

//* Simple tip calculator 🔥🔥 

// let food = Number( prompt( 'Food Cost? ' ) )
// let tip = Number( prompt( 'tip% ?' ) / 100 )
// let tipAmount = food * tip
// let totalAmount = food + tipAmount
// console.log('Total Bill: ',totalAmount, 'BDT')

/* * Data Types
    Numbers 👉 1, 2, 100, 50.5
    Stings 👉 "Anything in single or double quotes"
    Boolean 👉 true / false 
    Array 👉 []
    Objects 👉 {}
*/

/* * Math Methods 
    Floor 👉 Rounds Down -> 5.6 (5)
    Ceil 👉 Rounds Up -> 5.2 (6)
    Round 👉 Rounds Nearest Integer -> 5.2 (5) / 5.5 (6)
    Random 👉 Gives Number Between 0 and 1
*/

// * Conditional Operators 👉 ==  === > < >= <= != !==  
// * Baby Weather App 

// let weather = prompt('What is the weather?')
// if(weather == 'cold') {
//     console.log('Wear a warm cloth 🧥');
// } else if (weather == 'rainy') {
//     console.log('Grab an umbrella ☔');
// } else {
//     console.log('Put your glasses 😎');
// }

// * Function 
// * Normal Function with 0 argument

function myName() {
    console.log('Juthi')
}

// myName();

// * Function with arguments 

function sum1(a, b) {
    console.log(a + b)
}

// sum1(5, 7)

//* Function using Return and template literals (``)

function greeting(name) {
    return `Hi, ${name}! Nice to meet you 😃`
}

// console.log(greeting('juthi'));

// * Arrow Function => 
// with explicit return 

const sum = (a, b) => {
    return a + b
}

// console.log(sum(5, 7));

// * Arrow Function with implicit return and curly braces 

const sumArrow = (a,b) => a + b
// console.log(sumArrow(5, 4));

// * Tip calculator using arrow function 🔥 

const tipCalculator = (foodCost, tipAmount) => {
    let tipPercent = tipAmount / 100
    let totalTip = foodCost * tipPercent
    let totalBill = sum(foodCost, totalTip) // sum function created above 👆
    return totalBill
}

// console.log(tipCalculator(100, 20));

// * Array

const fruitsName = ['🍌', '🍎', '🍇', '🍊', '🥭']
console.log(fruitsName); // this will print all the elements

console.log(fruitsName[2]); // this will print the 3rd one

// * Array methods (push, slice, indexOf, length)

fruitsName.push('🫐')
console.log(fruitsName); // this will add the element at the end of the Array

console.log(fruitsName.slice(0, 4)); // It will print 0 to 4 index
console.log(fruitsName.indexOf('🍊'));
console.log(fruitsName.length);

// * Objects 👉 { key: value } 

const person = {
    name: 'Jesmin Juthi',
    profession: 'Developer',
    mobile: '+88019000000'
}

console.log(person); // show all the elements
console.log(person.name); // access the name only with dot notation
console.log(person['mobile']) // bracket notation to access specific element from object

// assign new item into the object

person['address'] = 'Dhaka, Bangladesh'
console.log(person.address);

// * Object in a function 

const bioInfo = (name, age, occupation, assets, debt) => {
    const person = {
        name: name,
        age: age,
        occupation: occupation,
        assets: assets,
        debt: debt,
        // ! We directly can't do any operators with the previous items that's why we will use another function in the object
        netWorth: function() {
            return this.assets - this.debt // we have to use this keyword to access the items
        }
    }
    //! to access the netWorth, we have to use person.netWorth() <- like this because this has a function inside 🙂

    const intro = `Hi! I'm ${person.name}. I'm a ${person.occupation}. My total assets is ${person.assets} BDT and total debt is ${person.debt} BDT. So my net worth is ${person.netWorth()} BDT. 😎`
    
    return intro
}

console.log(bioInfo('Jesmin', '23', 'Developer', 50000, 0));
