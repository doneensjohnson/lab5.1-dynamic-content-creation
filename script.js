const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");

let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// // Listen for button click
// button.addEventListener("click", addItem);

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest("li");
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

// // Add an item
// function addItem() {
//   console.log("Button clicked!");
// }

//Create product
// const item = {
//   productNameInput: input.value,
//   productPriceInput: input.value,
// };

// Add Products
function addProduct() {
  let name = productNameInput.value;
  let price = parseFloat(productPriceInput.value);

  if (name ==="" || price === ""){
    alert ("You must enter a product and price.");
  }
 

  let newItem = document.createElement("li");
    newItem.dataset.price=price;
  newItem.textContent = name + " - $" + price.toFixed(2);


  // Remove an item from the list
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", removeItem);

//   // Add the Item to the List
//   cart.appendChild(newItem);
  newItem.appendChild(removeBtn);

//   totalPrice = totalPrice + price;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
  updateTotalPrice(price);

  productNameInput.value = "";
  productPriceInput.value = "";
}

// console.log(product);
// console.log(price);

// // Add item to array
// cart.push(item);

// Event Listener for Button Click
addProductButton.addEventListener("click", addProduct);
