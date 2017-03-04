var SandwichMaker = (function(condimentOption){
	var condimentPrices = {
		"miso": 0.50,
		"hummus": 0.75,
		"mayo": 0.25,
		"ranch": 1.00,
		"sriracha": 1.25,
		"mustard": 1.50
	};

	//connected to DOM event listener, connecting key to value
	condimentOption.getCondiment = function(condimentChoice){
		var condimentChoicePrice = condimentPrices[condimentChoice];
		SandwichMaker.addTopping(condimentChoicePrice);
	};
	condimentOption.setCondiment = function(condimentChoice){
		var condimentChoicePrice = condimentPrices[condimentChoice];
		SandwichMaker.removeTopping(condimentChoicePrice);
	};

	return condimentOption;
})(SandwichMaker || {});