let buttonLikes = document.querySelectorAll('.photos__button-likes');
let likesNumber = document.querySelectorAll('.photos__number-likes');

for (let i = 0; i < buttonLikes.length; i++) {

  buttonLikes[i].onclick = function () {
    if (buttonLikes[i].classList.contains('like-active')) {
      likesNumber[i].textContent--;
      buttonLikes[i].classList.remove('like-active');
    } else {
      likesNumber[i].textContent++;
      buttonLikes[i].classList.add('like-active');
    }
  }
}
