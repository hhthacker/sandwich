var SandwichMaker = (function(maker){
	var cheesePrices = {
		"cheddar": 1.50, 
		"swiss": 1.50, 
		"blue": 1.50
	};

	maker.getCheese = function(cheese){
		// console.log("chz plz", cheesePrices[cheese], cheese);
		return cheesePrices[cheese];
	};

	return maker;
})(SandwichMaker || {});