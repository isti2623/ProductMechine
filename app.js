const products = [
    {
        id: 01,
        name: "Potato",
        price: 10,
    },
    {
        id: 02,
        name: "Cocacola",
        price: 60,
    },
    {
        id: 03,
        name: "Biscuits",
        price: 30,
    },
    {
        id: 04,
        name: "Fanta",
        price: 20,
    },
    {
        id: 05,
        name: "Chocolate",
        price: 5,
    },
]




const chooseProduct = (product, y) => {
    if (product.id == y) {
        console.log(product.name);
        console.log(product.price);
    }
    else if (product.id == y) {
        console.log(product.name);
        console.log(product.price);
    }
    else if (product.id == y) {
        console.log(product.name);
        console.log(product.price);
    }
    else if (product.id == y) {
        console.log(product.name);
        console.log(product.price);
    }
    else if (product.id == y) {
        console.log(product.name);
        console.log(product.price);
    }
    else {
        console.log("Please Enter Correct ID");
    }
}

let y;
function myFunc() {
    y = window.prompt();
}
myFunc();
const x = products.map(product => chooseProduct(product, y));

// chooseProduct();