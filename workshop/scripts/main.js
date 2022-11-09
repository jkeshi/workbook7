"use script";

const selectDropdown = document.getElementById("select-dropdown");
const categoryDropdown = document.getElementById("category-dropdown");
function loadCategoryDropdown() {
 categoryDropdown.style.display = none;
    selectValue = selectDropdown.value

  fetch("http://localhost:8081/api/categories")
    .then((response) => response.json)()
    .then((categories) => {
        if (selectValue === all) {
            
        }
    });
}
window.onload = () => {
  selectDropdown.onchange = loadCategoryDropdown;
};
