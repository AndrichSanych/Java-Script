const tBody = document.querySelector('#product-table tbody');
const addBtn = document.querySelector('#addBtn');
const clearBtn = document.querySelector('#clearAll');
const form = document.forms.creationForm;

const brandIn = form.elements.brand;
const modelIn = form.elements.model;
const pricelIn = form.elements.price;
const statuslCb = form.elements.status;

class Product {

    static count = 10;

    constructor(brand, model, price, status) {
        this.brand = brand;
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
    let product = new Product(brandIn.value, modelIn.value, pricelIn.value, statuslCb.checked);

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
                            <td>${item.brand}</td>
                            <td>${item.model}</td>
                            <td>${item.price}$</td>
                            <td>${item.statusName}</td>
                        </tr>`;
};

search.onclick = (event) =>
{
    event.preventDefault();
    console.log(document.querySelectorAll('div.my-catalog > input.name'));
}