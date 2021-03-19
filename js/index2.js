var nextBtns = document.querySelectorAll(".next-btn");
var backBtns = document.querySelectorAll(".back-btn");
var sections = document.querySelectorAll(".inner");
var sections_total = 6;
var formData = {};

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
    sections[index - 2] &&
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


document.querySelectorAll("form").forEach((item) => {
  item.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

function clickHandler(e) {
  // e.preventDefault();
  var myForm = e.currentTarget.closest("form");

  if (myForm !== null) {
    var FD = new FormData(myForm);
    var formObject = Object.fromEntries(FD.entries());

    if (!myForm.checkValidity()) {
      return false;
    }

    formData = Object.assign(formData, formObject);

    if (e.currentTarget.id === "captureResult") {
      var result = document.getElementById("result");
      result.innerHTML = tmpl(formData);
    }
  }

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
}
