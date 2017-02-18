var SandwichMaker = (function(oldSandwichMaker){
	var cheese = ["cheddar"];

	oldSandwichMaker.getCheese = function(){
		return cheese;
	};

	return oldSandwichMaker;
})(SandwichMaker || {});