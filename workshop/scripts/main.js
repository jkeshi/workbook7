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
window.onload = () => {
  //selectDropdown.onchange = loadCategoryDropdown;
  loadCategoryDropdown();
};
