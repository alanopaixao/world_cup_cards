// Date Footer
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

// slide up / down
const popupBg = document.querySelector("#popup-bg"),
  popup = document.querySelector("#popup"),
  btnClose = document.querySelector("#btn-close");

btnClose.addEventListener("click", closeModal);
popupBg.addEventListener("click", closeModal);

function closeModal(e) {
  e.preventDefault();
  popup.classList.add("slide-up");
  popupBg.classList.add("transparent");
  setTimeout(() => {
    popupBg.style.display = "none";
  }, 600);
}
