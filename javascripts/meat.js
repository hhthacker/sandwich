var SandwichMaker = (function(maker){
	var meatPrices = {
		"turkey": 2.50, 
		"chicken": 2.50, 
		"salami": 2.50, 
		"bologna": 2.50
	};

	maker.getMeat = function(meat){
		console.log("first chicken??", meat);
		console.log("price of 2.50?", meatPrices[meat]);
		return meatPrices[meat];
	};

	return maker;
})(SandwichMaker || {});