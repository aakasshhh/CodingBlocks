//CALL BACK FUNCTIONS

// console.log("START SCRIPT");

// console.log("hello")

// function walkInRes(cb){
//     console.log("I am walking inside the restro");
//     setTimeout(cb, 3000);
// }

// function checkMenu(cb){
//     console.log("I am checking the menu");
//     setTimeout(cb, 2000);
// } 

// function orderFood(cb){
//     console.log("I am ordering the food");
//     setTimeout(cb, 5000);
// }

// function havingLunch(cb){
//     console.log("I am having the lunch");
//     setTimeout(cb, 6000);
// }

// function payBill(cb){
//     console.log("I am paying the bill");
//     setTimeout(cb, 2000);
// }

// function walkOut(){
//     console.log("I am walking out of the restro");
// }

// walkInRes(() => {
//     checkMenu(() => {
//         orderFood(() => {
//             havingLunch(() => {
//                 payBill(() => {
//                     walkOut();
//                 });
//             });
//         });
//     });
// });

// console.log("END Script");



/* -------------------------------------------------------------------------------- */

/*var cart = ['shoes,clothes,watches']

function -> creating order ( pass this cart){
write some logic 5 items * 1000 rs}
return random order id , price


function placeOrder take this random id , price {
over this random id generate payment}


function paymentOrder(randomid and price)
payemnet successfully

fun orderCreatedMessage order no order id payment status
*/

var cart = ["Shoes", "Dresses", "Watches", "Groceries", "Gaming"];

function createOrder(cart, cb) {
    let price = cart.length * 100;
    let id = Math.abs(Math.random() * 100000);
    cb(id, price); 
    return { id, price };
}

function placeOrder(id, price, cb) {
    console.log(`Order placed! Order ID: ${id}, Total price: ₹${price}`);
    cb(id, price);
    return id;
}

function paymentOrder(id, price, cb) {
    console.log(`Payment of ₹${price} for Order ID ${id} done successfully!`);
    cb(id, price);
    return "Success";
}

function Message(id, paymentStatus) {
    console.log(`Order ID: ${id}. Payment Status: ${paymentStatus}`);
}


createOrder(cart, (id, price) => {
    placeOrder(id, price, (id, price) => {
        paymentOrder(id, price, (id, price) => {
            Message(id, "Success");  
        });
    });
});
