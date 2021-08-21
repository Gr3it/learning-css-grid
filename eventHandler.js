function clicked(e, property, value) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  var gridBox =
    target.parentElement.parentElement.parentElement.lastElementChild;

  if (target.classList.contains("active")) return;

  gridBox.classList.replace(box.classList.item(position), property); //modifica questa

  for (var i = 0; i < target.parentElement.children.length; i++) {
    target.parentElement.children[i].classList.remove("active");
  }
  target.classList.add("active");
}
