var SandwichMaker = (function(breadOption){
	var breadPrices = {
		"sourdough": 0.75, 
		"multigrain": 1.25, 
		"rye": 1.50
	};

	breadOption.getBread = function(breadChoice){
		var breadChoicePrice = breadPrices[breadChoice];
		SandwichMaker.addTopping(breadChoicePrice);
	};
	breadOption.setBread = function(breadChoice){
		var breadChoicePrice = breadPrices[breadChoice];
		SandwichMaker.addTopping(breadChoicePrice);
	}

	return breadOption;
})(SandwichMaker || {});