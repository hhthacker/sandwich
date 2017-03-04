var SandwichMaker = (function(veggiesOption){
	var veggiesPrices = {
		"tomato":0.75, 
		"spinach": 0.75, 
		"onion": 0.75, 
		"olives": 0.75, 
		"cucumber": 0.75, 
		"avocado": 0.75
	};

	veggiesOption.getVeggies = function(veggiesChoice){
		var veggiesChoicePrice = veggiesPrices[veggiesChoice];
		SandwichMaker.addTopping(veggiesChoicePrice);
	};
	veggiesOption.setVeggies = function(veggiesChoice){
		var veggiesChoicePrice = veggiesPrices[veggiesChoice];
		SandwichMaker.removeTopping(veggiesChoicePrice);
	};

	return veggiesOption;
})(SandwichMaker || {});