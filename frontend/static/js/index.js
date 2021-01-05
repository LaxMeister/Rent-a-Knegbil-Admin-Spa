import Dashboard from "./views/Dashboard.js";
import Customers from "./views/Customers.js";
import CustomerList from "./views/CustomerList.js";
import CarList from "./views/CarList.js";
import FirstLogin from "./views/FirstLogin.js";
import Cars from "./views/Cars.js";
import CarUpdate from "./views/CarUpdate.js";
import CarUpdateInfo from "./views/UpdateCarInfo.js";
import UpdateCarInfo from "./views/UpdateCarInfo.js";
import AddCar from "./views/addCar.js";
import AddCarinfo from "./views/addCarInfo.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/dashboard", view: Dashboard },
    { path: "/customers", view: Customers },
    { path: "/cars", view: Cars },
    { path: "/updateCar", view: CarUpdate },
    { path: "/addCar", view: AddCar },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();

  if (match.result == "/" || match.result == "/dashboard") {
    FirstLogin();
  }
  if (match.result == "/customers") {
    CustomerList();
  }
  if (match.result == "/cars") {
    CarList();
  }
  if (match.result == "/updateCar") {
    UpdateCarInfo();
  }
  if (match.result == "/addCar") {
    AddCarinfo();
  }
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
