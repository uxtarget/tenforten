var nextBtns = document.querySelectorAll('.next-btn');
var backBtns = document.querySelectorAll(".back-btn");
var sections = document.querySelectorAll('.section');
var sections_total = 3;

for(var i = 0 ; i < nextBtns.length; i ++) {
    nextBtns[i].addEventListener('click', function(e) {clickHandler(e);});
}
for(var j = 0 ; j < backBtns.length; j ++) {
    backBtns[j].addEventListener('click', function(e) {backClickHandler(e);});
}

function backClickHandler(e) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  var target = e.currentTarget;
  var index = target.dataset["index"];
  if (index < sections_total) {
    sections[index - 1].classList.remove( "animate__fadeIn");
    sections[index-2] && sections[index-2].classList.remove( "animate__fadeOut");
  }
}
function clickHandler (e) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    var target = e.currentTarget;
    var index = target.dataset["index"];
    if (index < sections_total) {
        sections[index-1].classList.add("animate__animated","animate__fadeOut");
        sections[index].classList.add("animate__animated","animate__fadeIn");
    }
}
