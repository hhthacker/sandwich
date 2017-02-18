var SandwichMaker = (function(oldSandwichMaker){
	var veggies = ["tomato"];

	oldSandwichMaker.getVeggies = function(){
		return veggies;
	};

	return oldSandwichMaker;
})(SandwichMaker || {});