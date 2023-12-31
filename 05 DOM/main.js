// -=-=-=-=-=-=-=- Working with DOM -=-=-=-=-=-=-=-

// ------- find elements
console.log(document); // window.document
console.log(document.body);

const list = document.getElementById('main-list'); // ul

console.log(document.getElementsByClassName('important'));

console.log(document.querySelector('ul.my-list li.important')); // get single element
console.log(document.querySelectorAll('ul.my-list > li:nth-child(even)')); // get collection of element

console.log(list.querySelector('ul'));

// ----------------- get child nodes
console.log(list.childNodes);  // get tag elements, text nodes
console.log(list.children);    // get tag elements only

console.log('First item:', list.firstChild); // list.childNodes[0]
console.log('Last item:', list.lastChild);   // list.childNodes[list.childNodes.length-1]

console.log('First tag item:', list.firstElementChild); // list.children[0]
console.log('Last tag item:', list.lastElementChild);   // list.children[list.children.length-1]

// ------- node properties
const item = document.querySelector('#third-item'); // li
console.log(`Item props: ${item.id}, ${item.nodeName}, ${item.className}, ${item.nodeType}`);

console.log("Item content:", item.textContent);  // only text
console.log("Item inner HTML:", item.innerHTML); // inner text with tags
console.log("Item outer HTML:", item.outerHTML); // this tag with inner tags

// simple way to change the element content
item.innerHTML = "New content changed with <strong>JS</strong>!!!";

// ----------------- create elements dynamically
// 1 - using innerHTML
list.innerHTML += '<li class="muted" title="Hello">New item created with innerHTML</li>';

// 2 - using methods
// <li id="blabla" title="Hello" class="muted">New item created with methods</li>
const newItem = document.createElement('li');

newItem.textContent = 'New item created with methods';
newItem.setAttribute('title', 'Hello');
newItem.classList.add('muted');
newItem.id = 'blabla';

// ----------------- add/remove elements to DOM 
list.append(newItem);

list.prepend("Prepended item"); // insert first list item
list.append("Appended item");   // insert last list item

list.before("Before item");       // insert outside the list before
list.after("After item");         // insert outside the list after

list.children[3].remove();

// clone list
// list.after(list.cloneNode(true));

// ----------------- working with CSS classes
// 1 - using style property
newItem.style.textTransform = "uppercase";
newItem.style.backgroundColor = "yellow";
newItem.style.margin = '20px 0';

// 2 - using CSS classes
newItem.classList.remove('important');
newItem.classList.add('super');

// ------- set event handler
newItem.onclick = () => {
    // executes when the item was clicked
    //debugger;
    newItem.classList.toggle('important');
    newItem.textContent += "!";
}

// ----------------- working with attributes
newItem.setAttribute("name", 'test');
newItem.getAttribute('name'); // test
newItem.removeAttribute('name');

// ----------------- get items by hierarchy
const secondItem = list.children[1];

console.log("Next sibling:", secondItem.nextSibling);         // include elements and text nodes
console.log("Previous sibling:", secondItem.previousSibling); // include elements and text nodes

console.log("Next sibling element:", secondItem.nextElementSibling); // include elements only
console.log("Previous sibling element:", secondItem.previousElementSibling); // include elements only

console.log('Parent item:', secondItem.parentNode);

// ------ most usefull methods
// search: querySelector(), querySelectorAll()
// add content: innerHTML, append()
// remove: remove()
// events: on<name>, addEventListenerconst form = document.forms.creationForm;

const modelIn = form.elements.model;
const pricelIn = form.elements.price;
const statuslCb = form.elements.status;

class Product {

    static count = 10;

    constructor(model, price, status) {
        this.model = model;
        this.price = price;
        this.status = status;
        this.id = Product.count++;
    }

    get statusName() {
        return this.status ? "In Stock" : "Out of Stock";
    }
}

addBtn.onclick = (event) => {

    event.preventDefault();

    // const product = {
    //     id: 100,
    //     model: modelIn.value,
    //     price: pricelIn.value,
    //     status: statuslCb.checked
    // };
    let product = new Product(modelIn.value, pricelIn.value, statuslCb.checked);

    addProductToTable(product);
};

clearBtn.onclick = () => {
    tBody.innerHTML = "";
    // tBody.clear();
};

function addProductToTable(item) {
    // ---------------- add element to table
    tBody.innerHTML += `<tr class="table-primary">
                            <th scope="row">${item.id}</th>
                            <td>${item.model}</td>
                            <td>${item.price}$</td>
                            <td>${item.statusName}</td>
                        </tr>`;
}