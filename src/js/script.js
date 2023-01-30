// Date Footer
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

// slide up / down
const btnClose = document.querySelector("#btn-close");
const popupBg = document.querySelector("#popup-bg");
const popup = document.querySelector("#popup");

btnClose.addEventListener("click", () => {
  popup.classList.add("slide-up");
  popupBg.classList.add("transparent");
  setInterval(() => {
    popupBg.style.display = "none";
  }, 500);
});
