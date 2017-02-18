var SandwichMaker = (function(oldSandwichMaker){
	var bread = ["wheat"];

	oldSandwichMaker.getBread = function(){
		return bread;
	};

	return oldSandwichMaker;
})(SandwichMaker || {});