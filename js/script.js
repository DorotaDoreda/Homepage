{
  const welcome = () => {
    console.log("Siema!");

  }

  const onChangeBackgroundClick = () => {
    const body = document.querySelector(".body");
    const buttonChange__inscription = document.querySelector(".buttonChange__inscription");
    body.classList.toggle("dark");
    buttonChange__inscription.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
  }

  const init = () => {
    const buttonChange = document.querySelector(".js-buttonChange");
    buttonChange.addEventListener("click", onChangeBackgroundClick);
    welcome();
  }
  init();




}











