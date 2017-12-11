var title = document.getElementById("h");
var list = document.getElementById("thelist");
var button = document.getElementById("b");
var listElements = document.getElementsByTagName("li");

//creating new variable function that gets called for elements
var addListeners = function(element) {
  //This code here makes the heading match the item name
  element.addEventListener("mouseover", function() {
    title.innerHTML = element.innerHTML;
  });
  //This code here sets the heading to default when the mouse is not over items
  element.addEventListener("mouseout", function() {
    title.innerHTML = "Hello World!";
  });
  //This code removes element in list when you click on it
  element.addEventListener("click", function() {
    element.remove();
  });
};

//this code adds an item to the list
button.addEventListener("click", function() {
  var newElement = document.createElement("li");
  newElement.innerHTML = "item " + listElements.length;
  addListeners(newElement);
  list.appendChild(newElement);
});

//helps acess elements in the list
for (i = 0; i < listElements.length; i++) {
  addListeners(listElements[i]);
};
