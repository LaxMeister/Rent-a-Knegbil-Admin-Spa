export default async function CustomerList() {
  console.log("BEER AND BALLOONS!");
  let table = document.querySelector(".customers-table");
  let tbody = document.getElementById("tbody");
  let getfirstnameCell = document.querySelector(".th3");
  let getIdCell = document.querySelector(".th1");
  let getLastNameCell = document.querySelector(".th2");
  let getAdressCell = document.querySelector(".th4");
  let getPhoneCell = document.querySelector(".th5");
  let getUsernameCell = document.querySelector(".th6");
  let getRentTimesCell = document.querySelector(".th7");
  let MyCustomers = [];
  let IdBool = false;
  let firstNameBool = false;
  let lastNameBool = false;
  let adressBool = false;
  let phoneBool = false;
  let usernameBool = false;
  let rentBool = false;

  setTimeout(() => {
    listCustomers();
  }, 100);

  fetch("http://localhost:8081/api/v1/customers", {
    credentials: "include",
  })
    .then((response) => response.json())
    .then((customers) => {
      customers.forEach((customer) => {
        MyCustomers.push(customer);
      });
      return MyCustomers;
    });

  function listCustomers() {
    MyCustomers.sort(function (a, b) {
      return b.id - a.id;
    });
    console.log(MyCustomers);
    for (let i = 0; i < MyCustomers.length; i++) {
      var row = tbody.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      cell1.innerHTML = MyCustomers[i].id;
      cell2.innerHTML = MyCustomers[i].firstname;
      cell3.innerHTML = MyCustomers[i].lastname;
      cell4.innerHTML = MyCustomers[i].adress;
      cell5.innerHTML = MyCustomers[i].phone;
      cell6.innerHTML = MyCustomers[i].username;
      cell7.innerHTML = MyCustomers[i].rentTimes;
      cell1.style.textAlign = "center";
      cell6.style.textAlign = "center";
      cell7.style.textAlign = "center";
      // row.classList.add("old-rows");
      row.id = MyCustomers[i].id;
    }
    let input = document.querySelector(".search-box");
    input.addEventListener("keyup", filter);
    sortIds();
    sortFirstNames();
    sortLastNames();
    sortAdresses();
    sortPhoneNums();
    sortUsernames();
    sortRentTimes();
  }

  function filter() {
    let input, filter, table, tr, td, i, txtValue, filterBox;
    input = document.querySelector(".search-box");
    filter = input.value.toUpperCase();
    table = document.getElementById("customers-table");
    tr = table.getElementsByTagName("tr");
    filterBox = document.querySelector(".filter-box");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[filterBox.value];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function removeCells() {
    let elmtTable = document.getElementById("tbody");
    let tableRows = elmtTable.getElementsByTagName("tr");
    let rowCount = tableRows.length;

    console.log(tableRows);

    for (var x = rowCount - 1; x > 0; x--) {
      elmtTable.remove(tableRows[x]);
    }
  }

  function sortIds() {
    getIdCell.addEventListener("click", () => {
      if (IdBool !== true) {
        IdBool = true;
        sortIdAsc();
      } else {
        IdBool = false;
        sortIdDesc();
      }
    });
  }

  function sortFirstNames() {
    getfirstnameCell.addEventListener("click", () => {
      if (firstNameBool !== true) {
        firstNameBool = true;
        sortFirstNameAZ();
      } else {
        firstNameBool = false;
        sortFirstNameZA();
      }
    });
  }

  function sortLastNames() {
    getLastNameCell.addEventListener("click", () => {
      if (lastNameBool !== true) {
        lastNameBool = true;
        sortLastNameAZ();
      } else {
        lastNameBool = false;
        sortLastNameZA();
      }
    });
  }

  function sortAdresses() {
    getAdressCell.addEventListener("click", () => {
      if (adressBool !== true) {
        adressBool = true;
        sortAdressAZ();
      } else {
        adressBool = false;
        sortAdressZA();
      }
    });
  }

  function sortPhoneNums() {
    getPhoneCell.addEventListener("click", () => {
      if (phoneBool !== true) {
        phoneBool = true;
        sortPhoneAsc();
      } else {
        phoneBool = false;
        sortPhoneDesc();
      }
    });
  }

  function sortUsernames() {
    getUsernameCell.addEventListener("click", () => {
      if (usernameBool !== true) {
        usernameBool = true;
        sortUsernameAZ();
      } else {
        usernameBool = false;
        sortUsernameZA();
      }
    });
  }

  function sortRentTimes() {
    getRentTimesCell.addEventListener("click", () => {
      if (rentBool !== true) {
        rentBool = true;
        sortRentAsc();
      } else {
        rentBool = false;
        sortRentDesc();
      }
    });
  }

  function addSortedRows() {
    let newTbody = document.createElement("tbody");
    newTbody.id = "tbody";
    table.appendChild(newTbody);
    for (let i = 0; i < MyCustomers.length; i++) {
      var row = newTbody.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      cell1.innerHTML = MyCustomers[i].id;
      cell2.innerHTML = MyCustomers[i].firstname;
      cell3.innerHTML = MyCustomers[i].lastname;
      cell4.innerHTML = MyCustomers[i].adress;
      cell5.innerHTML = MyCustomers[i].phone;
      cell6.innerHTML = MyCustomers[i].username;
      cell7.innerHTML = MyCustomers[i].rentTimes;
      cell1.style.textAlign = "center";
      cell6.style.textAlign = "center";
      cell7.style.textAlign = "center";
      row.id = MyCustomers[i].id;
    }
  }

  function sortIdAsc() {
    removeCells();
    MyCustomers.sort(function (a, b) {
      return b.id - a.id;
    });
    addSortedRows();
  }

  function sortIdDesc() {
    removeCells();
    MyCustomers.sort(function (a, b) {
      return a.id - b.id;
    });
    addSortedRows();
  }

  function sortFirstNameAZ() {
    removeCells();
    MyCustomers.sort(function (a, b) {
      return b.firstname.localeCompare(a.firstname);
    });
    addSortedRows();
  }

  function sortFirstNameZA() {
    removeCells();
    MyCustomers.sort(function (a, b) {
      return a.firstname.localeCompare(b.firstname);
    });
    addSortedRows();
  }

  function sortLastNameAZ() {
    removeCells();
    MyCustomers.sort(function (a, b) {
      return b.lastname.localeCompare(a.lastname);
    });
    addSortedRows();
  }

  function sortLastNameZA() {
    removeCells();
    MyCustomers.sort(function (a, b) {
      return a.lastname.localeCompare(b.lastname);
    });
    addSortedRows();
  }

  function sortAdressAZ() {
    removeCells();
    MyCustomers.sort(function (a, b) {
      return b.adress.localeCompare(a.adress);
    });
    addSortedRows();
  }

  function sortAdressZA() {
    removeCells();
    MyCustomers.sort(function (a, b) {
      return a.adress.localeCompare(b.adress);
    });
    addSortedRows();
  }

  function sortPhoneAsc() {
    removeCells();
    MyCustomers.sort(function (a, b) {
      return b.phone - a.phone;
    });
    addSortedRows();
  }

  function sortPhoneDesc() {
    removeCells();
    MyCustomers.sort(function (a, b) {
      return a.phone - b.phone;
    });
    addSortedRows();
  }

  function sortUsernameAZ() {
    removeCells();
    MyCustomers.sort(function (a, b) {
      return b.lastname.localeCompare(a.lastname);
    });
    addSortedRows();
  }

  function sortUsernameZA() {
    removeCells();
    MyCustomers.sort(function (a, b) {
      return a.username.localeCompare(b.username);
    });
    addSortedRows();
  }

  function sortRentAsc() {
    removeCells();
    MyCustomers.sort(function (a, b) {
      return b.rentTimes - a.rentTimes;
    });
    addSortedRows();
  }

  function sortRentDesc() {
    removeCells();
    MyCustomers.sort(function (a, b) {
      return a.rentTimes - b.rentTimes;
    });
    addSortedRows();
  }

  return;
}
