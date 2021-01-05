export default function FirstLogin() {
  fetch("http://localhost:8081/api/v1/currentUser", {
    credentials: "include",
  })
    .then((response) => response.json())
    .then((user) => {
      sessionStorage.setItem("UserId", JSON.stringify(user.id));
      sessionStorage.setItem("UserName", JSON.stringify(user.name));
    });
  return;
}
