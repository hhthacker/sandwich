var SandwichMaker = (function(cheeseOption){
	var cheesePrices = {
		"cheddar": 1.25, 
		"swiss": 1.75, 
		"blue": 2.50
	};

	cheeseOption.getCheese = function(cheeseChoice){
		var cheeseChoicePrice = cheesePrices[cheeseChoice];
		SandwichMaker.addTopping(cheeseChoicePrice);
	};
	cheeseOption.setCheese = function(cheeseChoice){
		var cheeseChoicePrice = cheesePrices[cheeseChoice];
		SandwichMaker.removeTopping(cheeseChoicePrice);
	}

	return cheeseOption;
})(SandwichMaker || {});