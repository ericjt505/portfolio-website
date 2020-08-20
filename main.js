function changeImage(event) {
  event = event || window.event;

  var targetElement = event.target || event.srcElement;

  if(targetElement.tagName == 'IMG') {
    document.getElementById("displayed-img").src = targetElement.getAttribute("src");
  }
}
