var SandwichMaker = (function(maker){
	var cheese = {
		"cheddar": 1.50, 
		"swiss": 1.50, 
		"blue": 1.50
	};

	maker.getCheese = function(){
		return cheese;
	};

	return maker;
})(SandwichMaker || {});