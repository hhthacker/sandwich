var SandwichMaker = (function(oldSandwichMaker){
	var cheese = {"cheddar": 1.50, "swiss": 1.50, "blue": 1.50};

	oldSandwichMaker.getCheese = function(){
		return cheese;
	};

	return oldSandwichMaker;
})(SandwichMaker || {});