const CartA = document.getElementById('Cart1');
const CartB = document.getElementById('Cart2');
const CartC = document.getElementById('Cart3');


fetchDataAndDisplay();

async function fetchDataAndDisplay() {
    try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        const products = data.products;

        if (products.length >= 3) {
            CartA.textContent = products[0].title;
            CartB.textContent = products[1].title;
            CartC.textContent = products[2].title;
        } else {
            console.error("Not enough products to display.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}