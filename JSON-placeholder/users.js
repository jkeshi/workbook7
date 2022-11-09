let table = document.getElementById("usersTable");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let row = table.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
       let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
         let cell5 = row.insertCell(4);
      cell1.innerHTML = data[i].name;
      cell2.innerHTML = data[i].email;
      cell3.innerHTML = data[i].address.street;
      cell4.innerHTML = data[i].username;
      cell5.innerHTML = data[i].company.name;
    }
  });
window.onload = function () {};
