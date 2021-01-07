export default async function () {
  let idInput = document.querySelector(".car-Id");
  let nameInput = document.querySelector(".car-name");
  let modelInput = document.querySelector(".car-model");
  let priceInput = document.querySelector(".car-price");
  let dateInput = document.querySelector(".car-date");
  let bookedInput = document.querySelector(".car-booked");
  let detailsInput = document.querySelector(".car-details");
  let typeInput = document.querySelector(".car-type");
  let backBtn = document.querySelector(".backBtn");
  let updateBtn = document.querySelector(".updateBtn");
  let removeBtn = document.querySelector(".removeBtn");
  const rootDiv = document.querySelector(".carupdate-container");

  idInput.value = JSON.parse(sessionStorage.getItem("carID"));
  nameInput.value = JSON.parse(sessionStorage.getItem("carName"));
  modelInput.value = JSON.parse(sessionStorage.getItem("carModel"));
  priceInput.value = JSON.parse(sessionStorage.getItem("carPrice"));
  dateInput.value = JSON.parse(sessionStorage.getItem("carDate"));
  bookedInput.value = JSON.parse(sessionStorage.getItem("carBooked"));
  detailsInput.value = JSON.parse(sessionStorage.getItem("carDetails"));
  typeInput.value = JSON.parse(sessionStorage.getItem("carType"));

  backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/cars";
  });

  updateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let updatedCar = {
      id: idInput.value,
      name: nameInput.value,
      model: modelInput.value,
      price: priceInput.value,
      date: dateInput.value,
      booked: bookedInput.value,
      details: detailsInput.value,
      type: typeInput.value,
    };

    console.log(updatedCar);
    let url = "http://localhost:8081/api/v1/updatecar";
    let request = new XMLHttpRequest();
    request.onload = function (e) {
      let result = request.response;
      alert(
        "Bil: " + nameInput.value + " " + modelInput.value + " Har uppdateras"
      );
      window.location.href = "/cars";
    };
    request.open("PUT", url, true);
    request.withCredentials = true;
    request.responseType = "text";
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    let updatedCarJson = JSON.stringify(updatedCar);
    request.send(updatedCarJson);
    console.log(request.response);
  });

  let modal = document.getElementById("myModal");
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];
  let modalRemoveBtn = document.querySelector(".modalRemoveBtn");
  let modalCloseBtn = document.querySelector(".modalCloseBtn");
  let modalParagraf = document.querySelector(".modal-body-p");
  modalParagraf.innerHTML =
    "Vill du verkligen ta bort: " + nameInput.value + " " + modelInput.value;

  modalCloseBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  modalRemoveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let carToRemove = {
      id: idInput.value,
      name: nameInput.value,
      model: modelInput.value,
      price: priceInput.value,
      date: dateInput.value,
      booked: bookedInput.value,
      details: detailsInput.value,
      type: typeInput.value,
    };

    console.log(carToRemove);
    let url = "http://localhost:8081/api/v1/deletecar";
    let request = new XMLHttpRequest();
    request.onload = function (e) {
      let result = request.response;
      alert("CAR DELETED!");
      window.location.href = "/cars";
    };
    request.open("DELETE", url, true);
    request.withCredentials = true;
    request.responseType = "text";
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    let removeCarJson = JSON.stringify(carToRemove);
    request.send(removeCarJson);
    console.log(request.response);
  });

  removeBtn.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  return;
}
