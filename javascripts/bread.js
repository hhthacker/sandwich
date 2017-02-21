var SandwichMaker = (function(oldSandwichMaker){
	var bread = {"sourdough": 0.75, "multigrain": 0.75, "rye": 0.75};

	oldSandwichMaker.getBread = function(){
		return bread;
	};

	return oldSandwichMaker;
})(SandwichMaker || {});