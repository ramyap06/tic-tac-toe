//alert('Hello World');
console.log('Hello World');

// MDN has best documentation for Javascript

// variables: let & const
// const is constant, let is reassignable
// ALWAYS use const unless reassignable

//data types: string, numbers, boolean, null, undefined

const name = 'John'
const age = 30;
const rating = 4.5; // no float or double just number
const isCool = true;
const x = null; //null is null not an object is just getting confused since null pointer is 0
const y = undefined;
let z;

console.log('My name is ' + name + ' and I am ' + age);
console.log(`My name is ${name} and I am ${age}`); //new way!!

// String methods & properties
const s = 'Hello World';
let val;
// Get length
val = s.length;
// Change case
val = s.toUpperCase();
val = s.toLowerCase();
// Get sub string
val = s.substring(0, 5);
// Split into array
val = s.split('');

// arrays can contain any data type in the same array & any number, dynamic

// ARRAYS - Store multiple values in a variable
const numbers = [1,2,3,4,5];
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
console.log(numbers, fruit);

// Get one value - Arrays start at 0
console.log(fruits[1]);

// Add value
fruits[4] = 'blueberries';

// Add to end (append)
fruits.push('strawberries');

// Add to beginning (prepend)
fruits.unshift('mangos');

// Remove last value
fruits.pop();

// // Check if array
console.log(Array.isArray(fruits));

// // Get index
console.log(fruits.indexOf('oranges'));

//object --> like a dictionary, very simple

const person = {
    firstName: 'Ramya',
    lastName: 'Prasanna',
    age: 19,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '1101 Third Street',
        city: 'West Lafayette',
        state: 'IN'
    } // object inside object
};

const {firstName, lastName, address: {city}} = person;

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

tasks = [
    {
        order: 1,
        text: 'Finish JS video',
        isCompleted: true
    },
    {
        order: 2,
        text: 'Dentist appt',
        isCompleted: false
    },
    {
        order: 3,
        text: 'Oil and wash my hair',
        isCompleted: true
    }
];

for (let todo of tasks) {
    console.log(todo.text);
}

tasks.forEach(function(todo) {
    console.log(todo.text);
});

const taskText = tasks.map(function(todo) {
    return todo.text;
});

const taskFiltered = tasks.filtered(function(todo) {
    return todo.isCompleted === true; // === is strict equality checks type too while == doesn't check type
});

function addNums(num1, num2) {
    return num1 + num2;
}

const addNums = (num1, num2) => {
    return num1 + num2;
}

const addNums = num1 => num1 + num2;

function Bank(checking, savings, last_date) {
    this.checking = checking;
    this.savings = savings;
    this.last_date = last_date;
}

Bank.prototype.deposit= function(amount, type) {
    switch(type) {
        case 'checking':
            this.checking = this.checking + amount;
            break;
        case 'savings':
            this.savings = this.savings + amount;
            break;
        default:
            this.checking = this.checking + amount;
            break;
    }
}

Bank.prototype.withdraw = function(amount) {
    if (this.checking >= amount) {
        this.checking = this.checking - amount;
        return `Accepted, balance is now: ${this.checking}`;
    } else {
        return `Declined, not enough balance in checking.`
    }
}

const date = new Date(6-23-2025)
console.log(date.getDay());

/* class Person {
        constructor() {}
        
        methods
    }
*/

// querySelector & querySelectorAll practice
btn.style.background = 'red';

const list = document.querySelector('.items');
list.firstElementChild.remove();
list.lastElementChild.textContent = 'Haha I Changed You';
list.children[1].innerText = 'You are so cool Ramya';
list.firstElementChild.innerHTML = '<h3><strong>Hello</strong></h3>'

const collect = document.querySelectorAll('.item');

// event listener
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    document.querySelector('#my-form').style.background = 'dark grey';
    document.querySelector('#my-form').style.color = 'black';
    document.querySelector('body').classList.add('bg-dark');
});

/* events:
    - mouseover (hover)
    - mouseout (after hovering)
*/