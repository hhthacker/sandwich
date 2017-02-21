var SandwichMaker = (function(oldSandwichMaker){
	var meat = {"turkey": 2.50, "chicken": 2.50, "salami": 2.50, "bologna": 2.50};

	oldSandwichMaker.getNeat = function(){
		return meat;
	};

	return oldSandwichMaker;
})(SandwichMaker || {});