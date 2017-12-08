var title = document.getElementById("h");
var list = document.getElementById("thelist");
var button = document.getElementById("b");
var listElements = document.getElementsByTagName("li");

var addListeners = function(element) {
  element.addEventListener("mouseover", function() {
    title.innerHTML = element.innerHTML;
  });
  element.addEventListener("mouseout", function() {
    title.innerHTML = "Hello World!";
  });
  element.addEventListener("click", function() {
    element.remove();
  });
};


button.addEventListener("click", function() {
  var newElement = document.createElement("li");
  var int = 0;
  if (listElements.length > 0) {
   int = parseInt(listElements[listElements.length-1].innerHTML.slice(5)) + 1;
  }
  newElement.innerHTML = "item " + int;
  addListeners(newElement);
  list.appendChild(newElement);
});

for (i = 0; i < listElements.length; i++) {
  addListeners(listElements[i]);
};
