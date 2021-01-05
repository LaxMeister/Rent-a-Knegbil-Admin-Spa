export default async function () {
  let idInput = document.querySelector(".car-Id");
  let nameInput = document.querySelector(".car-name");
  let modelInput = document.querySelector(".car-model");
  let priceInput = document.querySelector(".car-price");
  let dateInput = document.querySelector(".car-date");
  let bookedInput = document.querySelector(".car-booked");
  let detailsInput = document.querySelector(".car-details");
  let backBtn = document.querySelector(".backBtn");
  let updateBtn = document.querySelector(".updateBtn");

  backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/cars";
  });

  updateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let newCar = {
      name: nameInput.value,
      model: modelInput.value,
      price: priceInput.value,
      details: detailsInput.value,
    };

    console.log(newCar);
    let url = "http://localhost:8081/api/v1/addcar";
    let request = new XMLHttpRequest();
    request.onload = function (e) {
      let result = request.response;
      alert("CAR UPDATED!");
      window.location.href = "/cars";
    };
    request.open("POST", url, true);
    request.withCredentials = true;
    request.responseType = "text";
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    let newCarJson = JSON.stringify(newCar);
    request.send(newCarJson);
    console.log(request.response);
  });

  return;
}
