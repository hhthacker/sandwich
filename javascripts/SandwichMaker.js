var SandwichMaker = (function(){
	//private variable to store price
	var totalPrice = 0;

	//return the public interface that othrer code can interact with
	return {
		addTopping: function(toppingPrice) {
			totalPrice += toppingPrice;
		}
	};

})();