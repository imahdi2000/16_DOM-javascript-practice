var addListeners = function(element, header, oldHead, removeBool=false) {
  element.addEventListener("mouseover", function() {
    header.innerHTML = element.innerHTML;
  });
  element.addEventListener("mouseout", function() {
    header.innerHTML = oldHead;
  });
  if (removeBool) {
    element.addEventListener("click", function() {
      element.remove();
    });
  }
};

//Regular Numbers
var regTitle = document.getElementById("hReg");
var regList = document.getElementById("regList");
var regListElements = document.getElementsByClassName("reg");
var regButton = document.getElementById("regButton");

regButton.addEventListener("click", function() {
  var newElement = document.createElement("li");
  newElement.innerHTML = "item " + regListElements.length;
  newElement.setAttribute("class", "reg")
  addListeners(newElement, regTitle, "Hello World!", true);
  regList.appendChild(newElement);
});

//Fibonacci
var fibTitle = document.getElementById("hFib");
var fibList = document.getElementById("fibList");
var fibListElements = document.getElementsByClassName("fib");
var fibButton = document.getElementById("fibButton");

fibButton.addEventListener("click", function(){
  var newElement = document.createElement("li");
  var n = fibListElements.length;
  n < 2 ? newElement.innerHTML = n : newElement.innerHTML = parseInt(fibListElements[n-2].innerHTML) + parseInt(fibListElements[n-1].innerHTML);
  newElement.setAttribute("class", "fib");
  addListeners(newElement, regTitle, "Fibonacci!");
  fibList.appendChild(newElement);
});

//Factorial
var factorialTitle = document.getElementById("hFactorial");
var factorialList = document.getElementById("factorialList");
var factorialListElements = document.getElementsByClassName("factorial");
var factorialButton = document.getElementById("factorialButton");

factorialButton.addEventListener("click", function() {
  var newElement = document.createElement("li");
  var n = factorialListElements.length;
  n < 2 ? newElement.innerHTML = 1 : newElement.innerHTML = parseInt(factorialListElements[n-1].innerHTML) * n;
  newElement.setAttribute("class", "factorial")
  addListeners(newElement, regTitle, "Factorial!");
  factorialList.appendChild(newElement);
});
