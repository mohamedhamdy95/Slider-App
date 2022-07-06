// get slider items with array.from [ES 6]
var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
// number of slides
var slideCount = sliderImages.length;
// console.log(slideNumner);
// set current slider
var currentSlider = 1;
// slide Number Element
var slideNumnerElement = document.getElementById("slide-number");
// control buttons
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// handel click on next & prev
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
// create main UL element
var indicatorsElement = document.createElement("ul");
indicatorsElement.setAttribute("id", "indicator-ul");
// create list items based on number of slides
for (var i = 1; i <= slideCount; i++) {
  // create LI in UL element
  var indicatorsItem = document.createElement("li");
  //   set data-index attr
  indicatorsItem.setAttribute("data-index", i);
  //   set item content
  indicatorsItem.appendChild(document.createTextNode(i));
  //   append li to ul
  indicatorsElement.appendChild(indicatorsItem);
}
// add main ul to the page
document.getElementById("indicators").appendChild(indicatorsElement);
// get the new ul
var mainUl = document.getElementById("indicator-ul");
// get indicators items with array.from [ES 6]
var indicatorsBullts = Array.from(
  document.querySelectorAll("#indicator-ul li ")
);
// loop through all bullts
for (var i = 0; i < indicatorsBullts.length; i++) {
  indicatorsBullts[i].onclick = function () {
    currentSlider = parseInt(this.getAttribute("data-index"));
    cheeker();
  };
}
// trigger the cheeker function
cheeker();
// start functions
// create the chkeer function
function cheeker() {
  // set slide number
  slideNumnerElement.textContent =
    "Slide # " + currentSlider + " Of " + slideCount;
  // remove  active class from all images
  removeActive();
  // set active class to current slide
  sliderImages[currentSlider - 1].classList.add("active");
  // set active class to current Indicators Item
  mainUl.children[currentSlider - 1].classList.add("active");
  //   check if the curent slide is the first
  if (currentSlider == 1) {
    //   add disable class to prev
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  } //   check if the curent slide is the last
  if (currentSlider == slideCount) {
    //   add disable class to next
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}
// remove all active class from images and indecators
function removeActive() {
  // loop through images
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });
  // loop through indicatorsBullts
  indicatorsBullts.forEach(function (bullt) {
    bullt.classList.remove("active");
  });
}
// next function
function nextSlide() {
  // to stop after the last slide
  if (nextButton.classList.contains("disabled")) {
    // do no thing
    return false;
  } else {
    currentSlider++;
    cheeker();
  }
}
// prev function
function prevSlide() {
  // to stop after the first slide
  if (prevButton.classList.contains("disabled")) {
    // do no thing
    return false;
  } else {
    currentSlider--;
    cheeker();
  }
}
