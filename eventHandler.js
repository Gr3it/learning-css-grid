function clicked(e, property, value, doOnChild = false) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  var gridBox =
    target.parentElement.parentElement.parentElement.lastElementChild;

  if (target.classList.contains("active")) return;

  if (doOnChild) gridBox.firstChild.style[property] = value;
  else gridBox.style[property] = value;

  for (var i = 0; i < target.parentElement.children.length; i++) {
    target.parentElement.children[i].classList.remove("active");
  }
  target.classList.add("active");
}
