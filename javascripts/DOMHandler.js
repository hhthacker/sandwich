  // Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;
var selectedTopping = "";
// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("bread-chooser");
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var condimentsChooser = document.getElementById("condiments-chooser");
var veggiesChooser = document.getElementById("veggies-chooser");

var sandwhichOrder = document.getElementById("myOrder")
var submitSandy = document.getElementById("sandy");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
// breadChooser.addEventListener("click", function(event) {
// 	selectedTopping = event.target.id;
// 	// console.log("mighty breads", breadChooser);
// 	selectedTopping = ??????
// });


meatChooser.addEventListener("change", function(event) {
  // Get the value name chosen from the DOM
  //sends selected topping through getMeat augmenter
	 if (event.target.checked) {
	 	selectedTopping = event.target.value;
	 	SandwichMaker.getMeat(selectedTopping);
	 }
	 if (event.target.checked === false) {
	 	selectedTopping = event.target.value;
	 	SandwichMaker.setMeat(selectedTopping);
	 }
	 finalSandwichPrice = SandwichMaker.getTotalPrice();
	 console.log("meats", selectedTopping, finalSandwichPrice)

});

// cheeseChooser.addEventListener("change", function(event) {
// 	selectedCheese = event.target.value;
// 	SandwichMaker.getCheese(selectedCheese);
// 	console.log("selected cheese", selectedCheese);
// });


  // Determine the price of the topping chosen
  // Add the topping to the SandwichMaker to increase the total price

//writes sandwich to DOM
function magicSandwich() {
	finalSandwichPrice = SandwichMaker.getTotalPrice();
	var sandyOrder = `<p>yum yum! ${[]}</p>`;
	myOrder.innerHTML += sandyOrder;
};

//hears the button clicky
submitSandy.addEventListener("click", magicSandwich);



