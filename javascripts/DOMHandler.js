  // Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;
var selectedTopping = "";
// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("bread-chooser");
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var condimentsChooser = document.getElementById("condiments-chooser");
var veggiesChooser = document.getElementById("veggies-chooser");

var sandwichOrder = document.getElementById("myOrder");
var submitSandy = document.getElementById("sandy");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadChooser.addEventListener("click", function(event) {
	if (event.target.checked) {
		selectedTopping = event.target.value;
		SandwichMaker.getBread(selectedTopping);
	}
	if (event.target.checked === false) {
		selectedTopping = event.target.value;
		SandwichMaker.setBread(selectedTopping);
	}
	finalSandwichPrice = SandwichMaker.getTotalPrice();
	console.log("bread", selectedTopping, finalSandwichPrice);
});


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
	 console.log("meats", selectedTopping, finalSandwichPrice);
});

cheeseChooser.addEventListener("change", function(event) {
	if (event.target.checked) {
		selectedTopping = event.target.value;
		SandwichMaker.getCheese(selectedTopping);
	}
	if (event.target.checked === false) {
		selectedTopping = event.target.value;
		SandwichMaker.setCheese(selectedTopping);
	}
	finalSandwichPrice = SandwichMaker.getTotalPrice();
	console.log("cheese", selectedTopping, finalSandwichPrice);
});

condimentsChooser.addEventListener("change", function(event) {
	if (event.target.checked) {
		selectedTopping = event.target.value;
		SandwichMaker.getCondiment(selectedTopping);
	}
	if (event.target.checked === false) {
		selectedTopping = event.target.value;
		SandwichMaker.setCondiment(selectedTopping);
	}
	finalSandwichPrice = SandwichMaker.getTotalPrice();
	console.log("condiment", selectedTopping, finalSandwichPrice);
});

veggiesChooser.addEventListener("change", function(event) {
	if (event.target.checked) {
		selectedTopping = event.target.value;
		SandwichMaker.getVeggies(selectedTopping);
	}
	if (event.target.checked === false) {
		selectedTopping = event.target.value;
		SandwichMaker.setVeggies(selectedTopping);
	}
	finalSandwichPrice = SandwichMaker.getTotalPrice();
	console.log("condiment", selectedTopping, finalSandwichPrice);
})


//writes sandwich to DOM
function magicSandwich(event) {
	console.log("submit sandy");
	finalSandwichPrice = SandwichMaker.getTotalPrice();
	console.log("sandy price", finalSandwichPrice);
	var sandyOrder = `<p class="magic">yum yum!<br> Your sandwich is <br> $${finalSandwichPrice}</p>`;
	sandwichOrder.innerHTML += sandyOrder;
};

//hears the button clicky
submitSandy.addEventListener("click", magicSandwich);


