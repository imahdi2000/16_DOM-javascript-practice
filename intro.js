var title = document.getElementById("h");
var list = document.getElementById("thelist");
var button = document.getElementById("b");

var addToList = function(e) {
  var newElement = document.createElement("li");
  newElement.innerHTML = "New Item";
  list.appendChild(newElement);
};

button.addEventListener("click", addToList);
