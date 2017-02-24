var SandwichMaker = (function(oldSandwichMaker){
	var condiment = {
		"miso": 0.5,
		"hummus": 0.5,
		"mayo": 0.5,
		"ranch": 0.5,
		"sriracha": 0.5,
		"mustard": 0.5
	};

	oldSandwichMaker.getCondiment = function(){
		return condiment;
	};

	return oldSandwichMaker;
})(SandwichMaker || {});