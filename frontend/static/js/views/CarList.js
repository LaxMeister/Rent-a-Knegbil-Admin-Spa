export default async function CustomerList() {
  console.log("BEER AND BALLOONS!");
  let table = document.querySelector(".car-table");
  let tbody = document.getElementById("tbody");
  let getNameCell = document.querySelector(".car-th3");
  let getIdCell = document.querySelector(".car-th1");
  let getModelCell = document.querySelector(".car-th2");
  let getPriceCell = document.querySelector(".car-th4");
  let getDateCell = document.querySelector(".car-th5");
  let getBookedCell = document.querySelector(".car-th6");
  let getDetailsCell = document.querySelector(".car-th7");
  let getTypeCell = document.querySelector(".car-th8");
  let MyCars = [];
  let IdBool = false;
  let nameBool = false;
  let modelBool = false;
  let priceBool = false;
  let dateBool = false;
  let bookedBool = false;
  let detailsBool = false;
  let typeBool = false;
  let addBtn = document.querySelector(".add-carBtn");

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/addCar";
  });
  setTimeout(() => {
    listCars();
  }, 500);

  fetch("http://localhost:8081/api/v1/cars", {
    credentials: "include",
  })
    .then((response) => response.json())
    .then((cars) => {
      cars.forEach((car) => {
        MyCars.push(car);
      });
      return MyCars;
    });

  function listCars() {
    MyCars.sort(function (a, b) {
      return b.id - a.id;
    });
    console.log(MyCars);
    for (let i = 0; i < MyCars.length; i++) {
      var row = tbody.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      cell1.innerHTML = MyCars[i].id;
      cell2.innerHTML = MyCars[i].name;
      cell3.innerHTML = MyCars[i].model;
      cell4.innerHTML = MyCars[i].price;
      cell5.innerHTML = MyCars[i].date;
      cell6.innerHTML = MyCars[i].booked;
      cell7.innerHTML = MyCars[i].details;
      cell8.innerHTML = MyCars[i].type;
      cell1.style.textAlign = "center";
      cell6.style.textAlign = "center";
      cell7.style.textAlign = "center";
      row.classList.add("myCars");
      row.id = MyCars[i].id;
      console.log(MyCars[i]);
    }
    addClickToRows();
    sortIds();
    sortNames();
    sortModel();
    sortPrice();
    sortDate();
    sortBooked();
    sortDetails();
    sortTypes();
  }

  function addClickToRows() {
    let getRows = document.getElementsByClassName("myCars");
    for (let i = 0; i < getRows.length; i++) {
      var carRow = getRows[i];
      carRow.addEventListener("click", redirectToUpdatePage);
    }
  }

  function redirectToUpdatePage() {
    MyCars.sort(function (a, b) {
      return a.id - b.id;
    });
    let getRows = document.getElementsByClassName("myCars");
    let getNode = event.currentTarget.id;
    for (var i = 0; i < getRows.length; i++) {
      if (getNode == getRows[i].id) {
        console.log(
          "CarID: " + MyCars[getNode - 1].id + " " + "Node ID: " + getNode
        );
        sessionStorage.setItem("carID", JSON.stringify(MyCars[getNode - 1].id));
        sessionStorage.setItem(
          "carName",
          JSON.stringify(MyCars[getNode - 1].name)
        );
        sessionStorage.setItem(
          "carModel",
          JSON.stringify(MyCars[getNode - 1].model)
        );
        sessionStorage.setItem(
          "carPrice",
          JSON.stringify(MyCars[getNode - 1].price)
        );
        sessionStorage.setItem(
          "carDate",
          JSON.stringify(MyCars[getNode - 1].date)
        );
        sessionStorage.setItem(
          "carBooked",
          JSON.stringify(MyCars[getNode - 1].booked)
        );
        sessionStorage.setItem(
          "carDetails",
          JSON.stringify(MyCars[getNode - 1].details)
        );
        sessionStorage.setItem(
          "carType",
          JSON.stringify(MyCars[getNode - 1].type)
        );
        window.location.href = "/updateCar";
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

  function sortNames() {
    getNameCell.addEventListener("click", () => {
      if (nameBool !== true) {
        nameBool = true;
        sortNameAZ();
      } else {
        nameBool = false;
        sortNameZA();
      }
    });
  }

  function sortModel() {
    getModelCell.addEventListener("click", () => {
      if (modelBool !== true) {
        modelBool = true;
        sortModelAZ();
      } else {
        modelBool = false;
        sortModelZA();
      }
    });
  }

  function sortPrice() {
    getPriceCell.addEventListener("click", () => {
      if (priceBool !== true) {
        priceBool = true;
        sortPriceAcs();
      } else {
        priceBool = false;
        sortPriceDesc();
      }
    });
  }

  function sortDate() {
    getDateCell.addEventListener("click", () => {
      if (dateBool !== true) {
        dateBool = true;
        sortDateAsc();
      } else {
        dateBool = false;
        sortDateDesc();
      }
    });
  }

  function sortBooked() {
    getBookedCell.addEventListener("click", () => {
      if (bookedBool !== true) {
        bookedBool = true;
        sortBookedAZ();
      } else {
        bookedBool = false;
        sortBookedZA();
      }
    });
  }

  function sortDetails() {
    getDetailsCell.addEventListener("click", () => {
      if (detailsBool !== true) {
        detailsBool = true;
        sortDetailsAsc();
      } else {
        detailsBool = false;
        sortDetailsDesc();
      }
    });
  }
  function sortTypes() {
    getTypeCell.addEventListener("click", () => {
      if (typeBool !== true) {
        typeBool = true;
        sortTypeAsc();
      } else {
        typeBool = false;
        sortTypeDesc();
      }
    });
  }

  function addSortedRows() {
    let newTbody = document.createElement("tbody");
    newTbody.id = "tbody";
    table.appendChild(newTbody);
    for (let i = 0; i < MyCars.length; i++) {
      var row = newTbody.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      cell1.innerHTML = MyCars[i].id;
      cell2.innerHTML = MyCars[i].name;
      cell3.innerHTML = MyCars[i].model;
      cell4.innerHTML = MyCars[i].price;
      cell5.innerHTML = MyCars[i].date;
      cell6.innerHTML = MyCars[i].booked;
      cell7.innerHTML = MyCars[i].details;
      cell8.innerHTML = MyCars[i].type;
      cell1.style.textAlign = "center";
      cell6.style.textAlign = "center";
      cell7.style.textAlign = "center";
      row.classList.add("myCars");
      row.id = MyCars[i].id;
    }

    addClickToRows();
  }

  function sortIdAsc() {
    removeCells();
    MyCars.sort(function (a, b) {
      return b.id - a.id;
    });
    addSortedRows();
  }

  function sortIdDesc() {
    removeCells();
    MyCars.sort(function (a, b) {
      return a.id - b.id;
    });
    addSortedRows();
  }

  function sortNameAZ() {
    removeCells();
    MyCars.sort(function (a, b) {
      return b.name.localeCompare(a.name);
    });
    addSortedRows();
  }

  function sortNameZA() {
    removeCells();
    MyCars.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    addSortedRows();
  }

  function sortModelAZ() {
    removeCells();
    MyCars.sort(function (a, b) {
      return b.model.localeCompare(a.model);
    });
    addSortedRows();
  }

  function sortModelZA() {
    removeCells();
    MyCars.sort(function (a, b) {
      return a.model.localeCompare(b.model);
    });
    addSortedRows();
  }

  function sortPriceAcs() {
    removeCells();
    MyCars.sort(function (a, b) {
      return b.price - a.price;
    });
    addSortedRows();
  }

  function sortPriceDesc() {
    removeCells();
    MyCars.sort(function (a, b) {
      return a.price - b.price;
    });
    addSortedRows();
  }

  function sortDateAsc() {
    removeCells();
    MyCars.sort(function (a, b) {
      return b.date - a.date;
    });
    addSortedRows();
  }

  function sortDateDesc() {
    removeCells();
    MyCars.sort(function (a, b) {
      return a.date - b.date;
    });
    addSortedRows();
  }

  function sortBookedAZ() {
    removeCells();
    MyCars.sort(function (a, b) {
      return b.booked - a.booked;
    });
    addSortedRows();
  }

  function sortBookedZA() {
    removeCells();
    MyCars.sort(function (a, b) {
      return a.booked - b.booked;
    });
    addSortedRows();
  }

  function sortDetailsAsc() {
    removeCells();
    MyCars.sort(function (a, b) {
      return b.details.localeCompare(a.details);
    });
    addSortedRows();
  }

  function sortDetailsDesc() {
    removeCells();
    MyCars.sort(function (a, b) {
      return a.details.localeCompare(b.details);
    });
    addSortedRows();
  }

  function sortTypeAsc() {
    removeCells();
    MyCars.sort(function (a, b) {
      return b.type.localeCompare(a.type);
    });
    addSortedRows();
  }

  function sortTypeDesc() {
    removeCells();
    MyCars.sort(function (a, b) {
      return a.type.localeCompare(b.type);
    });
    addSortedRows();
  }

  return;
}
