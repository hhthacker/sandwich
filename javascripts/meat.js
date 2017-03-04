var SandwichMaker = (function(meatOption){
	var meatPrices = {
		"turkey": 2.25, 
		"chicken": 2.75, 
		"salami": 3.50, 
		"bologna": 1.50
	};

	//connected to DOM event listener, connecting key to value
	meatOption.getMeat = function(meatChoice){
		var meatChoicePrice = meatPrices[meatChoice];
		SandwichMaker.addTopping(meatChoicePrice);
	};
	meatOption.setMeat = function(meatChoice){
		var meatChoicePrice = meatPrices[meatChoice];
		SandwichMaker.removeTopping(meatChoicePrice);
	}

	return meatOption;
})(SandwichMaker || {});