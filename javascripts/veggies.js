var SandwichMaker = (function(maker){
	var veggies = {
		"tomato":0.75, 
		"spinach": 0.75, 
		"onion": 0.75, 
		"olives": 0.75, 
		"cucumber": 0.75, 
		"avocado": 0.75
	};

	maker.getVeggies = function(){
		return veggies;
	};

	return maker;
})(SandwichMaker || {});