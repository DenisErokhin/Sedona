let reviewForm = document.querySelector(".form-review");
let loginName = reviewForm.querySelector(".field__input--name");
let loginSurname = reviewForm.querySelector(".field__input--surname");
let contactTel = reviewForm.querySelector(".field__input--tel");
let contactEmail = reviewForm.querySelector(".field__input--email");
let popupSuccess = document.querySelector(".popup--success");
let popupMistake = document.querySelector(".popup--mistake");
let buttonMistake = popupMistake.querySelector(".popup__button--mistake");
let buttonSuccess = popupSuccess.querySelector(".popup__button--success");
let input = [loginName, loginSurname, contactTel, contactEmail];

reviewForm.addEventListener('submit', function (evt) {
  if (!loginName.value || !loginSurname.value || !contactTel.value || !contactEmail.value) {
    evt.preventDefault();
    popupMistake.classList.remove("popup--active");
    popupMistake.offsetWidth = popupMistake.offsetWidth;
    popupMistake.classList.add("popup--active");

    for (let i = 0; i < input.length; i++) {
      if (!input[i].value) {
        input[i].classList.add("input--mistake");
      } else {
        input[i].classList.remove("input--mistake");
      }

      input[i].onchange = function () {
        if (input[i].value) {
          input[i].classList.remove("input--mistake");
        }
      }
    }
  } else {
    evt.preventDefault();
    popupSuccess.classList.remove("popup--active");
    popupSuccess.offsetWidth = popupSuccess.offsetWidth;
    popupSuccess.classList.add("popup--active");
  }
})

buttonMistake.onclick = function () {
  popupMistake.classList.remove("popup--active");
}

buttonSuccess.onclick = function () {
  popupSuccess.classList.remove("popup--active");
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupSuccess.classList.contains("popup--active")) {
      evt.preventDefault()
      popupSuccess.classList.remove("popup--active")
    }
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupMistake.classList.contains("popup--active")) {
      evt.preventDefault()
      popupMistake.classList.remove("popup--active")
    }
  }
})
