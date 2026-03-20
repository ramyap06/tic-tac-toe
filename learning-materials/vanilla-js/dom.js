/* DOM - Document Object Model
- Basically it shows all the different elements on the document/page.
- These different elements can be represented as nodes or objects that can manipulated and used in code logic.
*/


// EXAMINE THE DOCUMENT OBJECT
console.dir(document);

console.log(document.domain); // gives you the host
console.log(window.location.hostname); // better alternatives
console.log(window.location.origin);

console.log(document.URL); // gives url to the page
console.log(document.title); // gives title to the page
document.title = "123";
// you can do this for doctype, head, body
console.log(document.all) //shows all objects on document
document.all[10].textContent = "Hello World!"; // whatever is the object of index 10 will now be changed to this text"
console.log(document.forms); // gathers all forms objects on document
console.log(document.links); // gathers all link objects on document
// can do images too


// GETELEMENTBYID
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle); // prints the line where this id is defined
headerTitle.textContent = "Hello"; // only looks at high level and changes text
headerTitle.innerText = "Goodbye"; // does the same but also pays attention to style
// otherwise can be used interchangeably
headerTitle.innerHTML = '<h3>Hello</h3>'; // changes the text to be an h3 heading, doesn't change the original size of the object
header.style.borderBottom = 'solid 3px black';


// GETELEMENTSBYCLASSNAME
var items = document.getElementsByClassName('list-group-item');
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';

// items.style.backgroundColor = 'pink';  --> can't do this causes error

for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'pink';
}


// GETELEMENTSBYTAGNAME
var li = document.getElementsByTagName('li');
li[1].textContent = 'HELLO';
li[1].style.fontWeight = 'lighter';

for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = 'yellow';
}
// this applies to all lists while the class only applies to lists with that class


// QUERYSELECTOR
var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

var input = document.querySelector('input[type="text"]');
input.value = 'Enter you message';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

// QUERYSELECTORALL
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'orange';
    even[i].style.backgroundColor = 'coral';
}


// TRAVERSING THE DOM

/* DOM aka html has a parent-child-sibling relationship 

<div> --> parent
    <p>My name is Ramya</p> --> child
    <h1>Hello World!</h1> --> sibling
</div>

*/
var itemList = document.querySelector('#item');

// parent
console.log(itemList.parentNode);
console.log(itemList.parentNode.parentNode);
itemList.parentNode.style.backgroundColor = 'grey';

console.log(itemList.parentElement);
console.log(itemList.parentElement.parentElement);

// child
console.log(itemList.childNodes); // gives array of children but says text where there is a break, Node List
console.log(itemList.children); // gives arrays efficiently, HTML collection

console.log(itemList.firstChild); // again puts text where there's line break
console.log(itemList.firstElementChild); // use this instead
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);

// sibling
console.log(itemList.nextSibling); // don't use

console.lof(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);


// CREATING AND INSERTING ELEMENTS

// making a div
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'goodbye';
newDiv.setAttribute('title', 'Hello Div');
console.log(newDiv);

// adding text to the div
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

// inserting div into DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1); // object.insertBefore(object_to_insert, where_to_insert);


// ADD EVENT LISTENER

// click actions
var button = document.getElementById('button').addEventListener('click', buttonClick);
function buttonClick(e) {
    document.querySelectorAll('.btn')[1].style.backgroundColor = 'red';
    alert(1);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    var output = document.getElementById('output');
    output.innerHTML = '<h3>+e.target.id+</h3>';
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
}

// mouse actions
button.addEventListener('click', runEvent);
button.addEventListener('dblclick', runEvent);
button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);
button.addEventListener('mouseenter', runEvent); // only element itself
button.addEventListener('mouseover', runEvent); // for inner elements and element itself
button.addEventListener('mouseleave', runEvent); // opposite of mouse enter
button.addEventListener('mouseout', runEvent); // opposite of mouse over
button.addEventListener('mousemove', runEvent); // while in there and moving mouse

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

itemInput.addEventListener('keydown', runEvent); // when you press down a key when typing in input box
select.addEventListener('change', runEvent); // with a dropdown, when the option is changed
select.addEventListener('input', runEvent); // does same thing
form.addEventListener('submit', runEvent);

function runEvent(e) {
    console.log('EVENT TYPE: ' + e.type);

    e.preventDefault(); // prevents submit button from submitting to external file

    // can access body by doing document.body
    button.style.backgroundColor = 'rgb("+e.offsetX+", "+e.offsetY+", 40)'; // when i move the mouse in the button the color with change based on it's position
    console.log(e.target.value); // shows the value aka what is being typed for keydown/changed for dropdown

}

/* 

- createElement to make a new element
- give it the same class as the elements you add it in using .className
- appendChild onto a parent element
- removeChild(element)
- Array.from(items)
- .forEach to make a filter
- item.style.display = 'block' --> shows the item in display
- item.style.display = 'none' --> hides the item in display

*/