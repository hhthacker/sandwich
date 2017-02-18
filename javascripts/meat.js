var SandwichMaker = (function(oldSandwichMaker){
	var meat = ["turkey"];

	oldSandwichMaker.getNeat = function(){
		return meat;
	};

	return oldSandwichMaker;
})(SandwichMaker || {});