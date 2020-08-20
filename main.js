var displayedImage = document.querySelector(".displayed-img");
var thumbBar = document.querySelector(".thumb-bar");

/* Looping through images */

for(let i = 1; i <= 5; i++) {
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "images/pic" + i + ".jpg");
  thumbBar.appendChild(newImage);
  newImage.onclick = function(event) {
    event = event || window.event;

    var targetElement = event.target || event.srcElement;

    if(targetElement.tagName == "IMG") {
      document.getElementById("displayed-img").src = targetElement.getAttribute("src");
    }
  }
}

var btn = document.querySelector("button");
var overlay = document.querySelector(".overlay");

btn.onclick = function() {
  var btnClass = btn.getAttribute("class");
  if(btnClass === "dark") {
  btn.setAttribute("class", "light");
  btn.textContent = "Ligthen";
  overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
}
