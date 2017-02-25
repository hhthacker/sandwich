
var SandwichMaker = (function(){
	//private variable to store price
	var totalPrice = 0;

	//return the public interface that other code can interact with
	return {
		addTopping: function(toppingPrice) {
			totalPrice += toppingPrice;
			SandwichMaker.getTotalPrice();
		},
		removeTopping: function(toppingPrice) {
			totalPrice -= toppingPrice;
			SandwichMaker.getTotalPrice();
		},
		getTotalPrice: function() {
			return totalPrice;
		}
	};
})(SandwichMaker || {});

