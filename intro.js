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
  newElement.innerHTML = "item " + listElements.length;
  addListeners(newElement);
  list.appendChild(newElement);
});

for (i = 0; i < listElements.length; i++) {
  addListeners(listElements[i]);
};
