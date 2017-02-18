var SandwichMaker = (function(oldSandwichMaker){
	var condiment = ["mayo"];

	oldSandwichMaker.getCondiment = function(){
		return condiment;
	};

	return oldSandwichMaker;
})(SandwichMaker || {});