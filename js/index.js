var nextBtns = document.querySelectorAll(".next-btn");
var backBtns = document.querySelectorAll(".back-btn");
var sections = document.querySelectorAll(".section");

var tmpl = (formObject) => {
  return `<div class="answers">
      <span class="text-box-label">City</span>
      <div>
        <span class="base">${formObject.City}</span>
      </div>
    </div>
    <div class="answers">
      <span class="text-box-label">State</span>
      <div>
        <span class="base">${formObject.State}</span>
      </div>
    </div>
    <div class="answers">
      <span class="text-box-label">Area of Focus</span>
      <div>
        <span class="base">${formObject.projectFocus}</span>
      </div>
    </div>
    <div class="answers">
      <span class="text-box-label">Project Description</span>
      <div>
        <span class="base">${formObject.story}</span>
      </div>
    </div>
    <div class="answers">
      <span class="text-box-label">Project Name</span>
      <div>
        <span class="base">${formObject.projectName}</span>
      </div>
    </div>`;
};

var sections_total = 3;

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
    sections[index - 1].classList.remove("animate__fadeIn");
    sections[index - 2] &&
      sections[index - 2].classList.remove("animate__fadeOut");
  }
}

var myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

function clickHandler(e) {
  // e.preventDefault();
  // var myForm = document.getElementById("myForm");
  var result = document.getElementById("result");
  var FD = new FormData(myForm);
  var formObject = Object.fromEntries(FD.entries());

  if (!myForm.checkValidity()) {
    return false;
  }

  result.innerHTML = tmpl(formObject);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  var target = e.currentTarget;
  var index = target.dataset["index"];
  if (index < sections_total) {
    sections[index - 1].classList.add("animate__animated", "animate__fadeOut");
    sections[index].classList.add("animate__animated", "animate__fadeIn");
  }
}

