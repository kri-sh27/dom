const eventElement = document.getElementById("event");

// add a mouseout event listener to the element
eventElement.addEventListener("mouseout", function () {
  alert("you left the safe zone 🙅 (mouse out event working properly)");
});