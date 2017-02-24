var submitSandy = document.getElementById("sandy");
var finalSandyDiv = document.getElementById("myOrder");

var SandwichMaker = (function(){
	//private variable to store price
	var totalPrice = 0;

	//return the public interface that other code can interact with
	return {
		addTopping: function(toppingPrice) {
			totalPrice += toppingPrice;
		}
	};

})();

submitSandy.addEventListener("click", SandwichMaker);
console.log(SandwichMaker);