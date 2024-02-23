const productName = document.getElementById("nameProduct");
const productPrice = document.getElementById("priceProduct");
const tableProducts = document.getElementById("tableProducts");
const clearAllButton = document.getElementById("clearall");
const totalDiv = document.getElementById("totalDiv");
const divResult = document.getElementById("result");
const btnAdd = document.getElementById("addProduct");
const url = "https://fakestoreapi.com/products";
let results = null;

//Fetch is used to get JSON data and used in the application:
async function getProducts(url) { 
  const response = await fetch(url);      
  if (response.ok) {
    const data = await response.json();
    //console.log(data);
    displayProducts(data)
  }
}

function displayProducts(data) {
  const productList = document.querySelector("#nameProduct");                                   
  data.forEach(product => {                                                             
    const Item = document.createElement("option");        
    //All string builds use template literals versus string concatenation.                                  
    Item.textContent = `${product.title} - price: $${product.price}`;                                
    productList.append(Item);
  });
}

getProducts(url)

//At least one array method is used in the application.
let values = [];
let increment = 0;
let totalPurchases = 0;
let arrayMatchs = [];

btnAdd.addEventListener("click", captureValues);
clearAllButton.addEventListener("click", clearAllList);

function captureValues() {
  const selectedOption = document.querySelector("#nameProduct option:checked");
  //At least one instance of conditional branching is used.
  if (selectedOption) {
    const productName = selectedOption.textContent.split(" - ")[0];
    const productPrice = parseFloat(selectedOption.textContent.split(" - price: $")[1]);

    const product = {
      id: increment,
      name: productName,
      price: productPrice,
    };

    values.push(product);

    productName.value = "";
    productPrice.value = "";
    increment++;

    updateTotal();
    addRows(values);
  } else {
    alert("Please, select one product");
  }
}

// Add event
btnAdd.addEventListener("click", captureValues);

//At least one array method is used in the application.
function addRows(arrayInput) {
  clearList();

  arrayInput.forEach((el) => {
    const tableRow = tableProducts.insertRow();
    tableRow.id = `idRow${el.id}`;
    tableRow.innerHTML = `
      <td>${el.name}</td>
      <td>${el.price}</td>
      <td><button onclick="deleteRow(${el.id})">X</button></td>
    `;
  });
}

function deleteRow(id) {
  const index = values.findIndex((product) => product.id === id);
  //At least one instance of conditional branching is used.
  if (index !== -1) {
    tableProducts.deleteRow(index + 1);
    divResult.innerHTML -= values[index].price;
    values.splice(index, 1);
  }
}

function clearAllList() {
  clearList();
  values = [];
  updateTotal();
  alert("List cleared");
}

function clearList() {
  while (tableProducts.rows.length > 1) {
    tableProducts.deleteRow(1);
  }
}

function updateTotal() {
  totalPurchases = values.reduce((total, product) => total + product.price, 0);
  divResult.textContent = totalPurchases;
}
