app.controller('ShoppingController', ["$scope", "cart", "teas", function($scope, cart, teas) {
	$scope.message = "testing shoppingController";
	// loads the cart factory
	$scope.c = cart;
	// loads the tea factory for the shopping page
	$scope.t = teas;
}])

app.controller('CheckoutController', ["$scope", "cart", "teas", function($scope, cart, teas) {
	$scope.message = "testing checkoutController";
	// loads cart and teas
	$scope.c = cart;
	$scope.t = teas;

	$scope.t.total = $scope.c.calcPrice($scope.t.total);

	$scope.removeItem = function(id) {
		// finds the item in checkout array
		var y = $scope.c.findItem1($scope.c.items, id)
		// finds price of item
		var price = $scope.t.findItem($scope.t.teaList, id);
		price = price['price'];
		y['quantity'] = 0;
		var index1 = $scope.c.items.indexOf(y)
		// removes the objects from array
		$scope.c.items.splice(index1, 1);
		// resets the total on checkout page
		$scope.t.total = $scope.c.calcPrice($scope.t.total);
	}
	
	$scope.updateQ = function() {
		$scope.t.total = $scope.c.calcPrice($scope.t.total);
	}

}])