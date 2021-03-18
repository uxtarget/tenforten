var nextBtns = document.querySelectorAll('.next-btn');
var sections = document.querySelectorAll('.section');
var sections_total = 3;

for(var i = 0 ; i < nextBtns.length; i ++) {
    nextBtns[i].addEventListener('click', function(e) {clickHandler(e);});
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
