"use strict";

var closed = document.querySelector(".closed"),
    card = document.querySelector(".card"),
    animate = document.querySelector(".pop"),
    popUp = document.querySelector(".popup"),
    wrapper = document.querySelector(".wrapper"),
    header = document.querySelector(".nav-links"); // popUp всплытие и удаления 

closed.addEventListener('click', function () {
  wrapper.classList.remove('popup-active');
  popUp.style.display = 'none';
  animate.classList.remove('animate');
  animate.style.display = 'none';
}); // активный класс для сылок

header.addEventListener("mouseover", function () {
  var _loop = function _loop(i) {
    header.children[i].addEventListener("click", function () {
      for (var j = 0; j < header.children.length; j++) {
        header.children[j].classList.remove("active");
      }

      header.children[i].classList.add("active");
    });
  };

  for (var i = 0; i < header.children.length; i++) {
    _loop(i);
  }
}); //  счетчик для вызова poup

var headerClick = function headerClick() {
  var count = 1;
  header.addEventListener("click", function () {
    console.log(count);

    if (count === 3) {
      wrapper.classList.add('popup-active');
      popUp.style.display = 'flex';
      animate.classList.add('animate');
      animate.style.display = 'block';
      return count = 1;
    }

    count = count + 1;
  });
};

headerClick();