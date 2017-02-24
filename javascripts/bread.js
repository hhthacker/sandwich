var SandwichMaker = (function(maker){
	var bread = {
		"sourdough": 0.75, 
		"multigrain": 0.75, 
		"rye": 0.75
	};

	maker.getBread = function(){
		return bread;
	};

	return maker;
})(SandwichMaker || {});