var nextBtns = document.querySelectorAll(".next-btn");
var backBtns = document.querySelectorAll(".back-btn");
var sections = document.querySelectorAll(".inner");
var sections_total = 6;

for (var i = 0; i < nextBtns.length; i++) {
  nextBtns[i].addEventListener("click", function (e) {
    clickHandler(e);
  });
}
for (var j = 0; j < backBtns.length; j++) {
  backBtns[j].addEventListener("click", function (e) {
    backClickHandler(e);
  });
}

function backClickHandler(e) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  var target = e.currentTarget;
  var index = target.dataset["index"];
  if (index < sections_total) {
    sections[index - 1].classList.remove(
      "animate__animated",
      "animate__slideInLeft",
      "animate__slideOutLeft",
      "animate__slideInRight"
    );
    // sections[index-1].classList.add("animate__slideOutLeft");
    sections[index - 2].classList.remove(
      // "animate__animated",
      "animate__slower",
      "animate__slideInLeft",
      "animate__slideOutLeft"
    );
    // sections[index - 2].classList.add("animate__slideInRight");
  }
  return false;
}

function clickHandler(e) {
  var target = e.currentTarget;
  var index = target.dataset["index"];
  if (index < sections_total) {
    sections[index - 1].classList.remove("animate__slideInRight");
    sections[index - 1].classList.add(
      "animate__animated",
      "animate__slower",
      "animate__slideOutLeft"
    );
    sections[index].classList.add("animate__animated", "animate__slideInRight");
  }
  return false;
}
