// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [{
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

var sum = 0;



// Exercise 1


function buy(id) {
    let found = false,
        product, prodEscollit;
    // 1. Loop for to the array products to get the item to add to cart

    //FOR LOOP
    for (let i = 0; i < products.length; i++) {

        product = products[i];

        if (product.id == id) {

            prodEscollit = {
                ...product
            };
            found = true;
        }

    }

    // 2. Add found product to the cartList array
    if (found) { //Equival a posar if (found == true)

        cartList.push(prodEscollit);

    }


    console.log(cartList);
}

/*Using find() {
    const byId = products.find(product => product.id === id)
    cartList.push(byId)

    console.log(cartList)
    console.log(cartList.length)

}*/




// Exercise 2
function cleanCart() {

    cartList.length = 0;
    cart.length = 0;
    console.log(cartList)
}

// Exercise 3

// Calculate total price of the cart using the "cartList" array

function calculateTotal() {
    // FIRST method using a for loop.
    let i, price = 0,
        totalPrice = 0;

    for (i = 0; i < cartList.length; i++) {

        price = cartList[i].price;
        totalPrice += price;
    }
    console.log(totalPrice)

    /* Second method using reduce()
    
        var init = 0;
      var totalPrice = cartList.reduce((sum, item) => sum + item.price, init)

      console.log(totalPrice)
      */

}




function generateCart() {
    // Exercise 4

    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    cartList.forEach(product => {

            const seleccionaProducte = cart.filter(prod => prod.id === product.id)
            const cartItem = {
                ...product
            }

            if (seleccionaProducte.length) {
                const [producteRepetit] = seleccionaProducte
                producteRepetit.quantity++
                producteRepetit.subTotal = producteRepetit.price * producteRepetit.quantity

            } else {
                cart.push({
                    ...product,
                    quantity: 1,
                    subTotal: product.price
                })
                cartItem.subTotalWithDiscount = "not available";

            }




        }


    )

    console.log(cart);


}




// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (let i = 0; i < cart.length; i++) {

        const cartItem = cart[i];

        if ((cartItem.id == 1 || cartItem.id == 3) && (cartItem.quantity >= cartItem.offer.number)) {

            cartItem.subTotalWithDiscount = Number((cartItem.subTotal - cartItem.subTotal * cartItem.offer.percent / 100).toFixed(2));
        }
        console.log(cartItem);

    }

}







// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    /* Tenemos un cartItem para cada artículo y un cartFinal para ir guardando ahí los importes que se van generando en cada
    vuelta del for. 
    Si el articulo tiene descuento, se suma el importe de articulo.subtotalwithdiscount,
    sino, se suma el importe de articulo.subtotal a secas.

    Al final se ve el importe de todos los articulos del carrito, los que tienen descuento y los que no.

    */

    generateCart()
    applyPromotionsCart()
    let list = "",
        cartItem, cartFinal = 0;

    for (let i = 0; i < cart.length; i++) {
        cartItem = cart[i];

        list += "<tr>";
        list += "<th scope='row'>" + cartItem.name + "</th>";
        list += "<td>" + cartItem.price + "</td>";
        list += "<td>" + cartItem.quantity + "</td>";

        if (cartItem.subTotalWithDiscount == undefined) {
            list += "<td>" + cartItem.subTotal + "</td>";
            cartFinal += cartItem.subTotal;
        } else {
            list += "<td>" + cartItem.subTotalWithDiscount + "</td>";
            cartFinal += cartItem.subTotalWithDiscount;
        }

    }

    document.getElementById("cart_list").innerHTML = list;
    document.getElementById("total_price").innerHTML = cartFinal.toFixed(2);

}







// ** Nivell II **
// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}