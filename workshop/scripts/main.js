"use script";

//const selectDropdown = document.getElementById("select-dropdown");
const categoryDropdown = document.getElementById("category-dropdown");

function loadCategoryDropdown() {
  //categoryDropdown.style.display = none;
  //selectValue = selectDropdown.value;
  selectValue = categoryDropdown.value;

  fetch("http://localhost:8081/api/categories")
    .then((response) => response.json())
    .then((categories) => {
      console.log(categories);
      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.categoryId;
        option.innerText = category.name;

        //OR
        // const option = new Option(user.name, user.id);

        categoryDropdown.appendChild(option);
      });
    });
}
function fillProductsTable(products) {
  const productsTable = document.querySelector("#productsTable tbody");
  for (const product of products) {
    let row = productsTable.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerText = product.productId;
    cell2.innerText = product.productName;
  }
}

function loadProducts() {
  return fetch("http://localhost:8081/api/products").then((response) =>
    response.json()
  );
}
window.onload = () => {
  //selectDropdown.onchange = loadCategoryDropdown;
  loadProducts().then(fillProductsTable);
  loadCategoryDropdown();
};
