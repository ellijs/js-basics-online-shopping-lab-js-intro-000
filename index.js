var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  console.log("I'm here", item)
  function getPrice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + min) - min);
  }
  let price = getPrice(1, 100);
  //let itemName = "name";
  let newItem = {itemName: item, itemPrice: price}
  cart.push(newItem);
  return`${newItem.itemName} has been added to your cart.`
  // also ${newItem['itemNmae']} is possible
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
      let string = "In your cart, you have "
      for (let i = 0; i < cart.length; i++) {
        if (cart.length === 1) {
          string += `${cart[i].itemName} at \$${cart[i].itemPrice}${i === cart.length -1 ? "." : ", "}`
        } else {
          string += `${i === cart.length -1 ? "and " : ""}${cart[i].itemName} at \$${cart[i].itemPrice}${i === cart.length -1 ? "." : ", "}`
        }
      }
      return string;
    }
}

function total() {
//      let total = cart.reduce((accumulator, currentValue) => accumulator + currentValue.itemPrice, initialValue)
//      return "Your total is \$ ${total}.";
  let total = cart.reduce((accumulator, currentValue) => {return accumulator + currentValue.cart.itemPrice}, 0);
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
