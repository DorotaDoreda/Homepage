console.log("Siema!");

let buttonChange = document.querySelector(".js-buttonChange");
let body = document.querySelector(".body");
let buttonChange__inscription = document.querySelector(".buttonChange__inscription");

buttonChange.addEventListener("click", () => {
  body.classList.toggle("dark");
  buttonChange__inscription.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});











