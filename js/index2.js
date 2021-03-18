var nextBtns = document.querySelectorAll(".next-btn");
var sections = document.querySelectorAll(".inner");
var sections_total = 6;

for (var i = 0; i < nextBtns.length; i++) {
  nextBtns[i].addEventListener("click", function (e) {
    clickHandler(e);
  });
}

function clickHandler(e) {
  var target = e.currentTarget;
  var index = target.dataset["index"];
  if (index < sections_total) {
    sections[index - 1].classList.add(
      "animate__animated",
      "animate__slower",
      "animate__slideOutLeft"
    );
    sections[index].classList.add("animate__animated", "animate__slideInRight");
  }
}
