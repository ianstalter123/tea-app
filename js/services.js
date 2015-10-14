app.factory('teas', function() {
	var teas = {};

	teas.teaList = [{
			_id: "55c8ee82152165d244b98300",
			name: "Bayard stew",
			ingredients: "concentrated gluten, jewelry, dill, beetle nut, toast",
			caffeineScale: 244,
			price: 15.40,
			inStock: true,
			rating: 1,
			imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$",
			__v: 0,
			categories: ["dark", "cold"]
		},

		{
			_id: "55c8ee82152165d244b98301",
			name: "Incompactness syrup",
			ingredients: "fennel, nutmeg leaves, parsley, cream of 'cream of cream', blarney",
			caffeineScale: 49,
			price: 73.48,
			inStock: true,
			rating: 2,
			imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
			__v: 0,
			categories: ["awesome"]
		}, {
			_id: "55c8ee82152165d244b98302",
			name: "Flexner white tea",
			ingredients: "hot sauce, iron, beetle nut, fresco, blarney, raw mashed potato",
			caffeineScale: 38,
			price: 49.91,
			inStock: true,
			rating: 4,
			imageUrl: "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
			__v: 0,
			categories: ["cold"]
		}, {
			_id: "55c8ee82152165d244b98303",
			name: "Pressor leaf",
			ingredients: "purina chow, flavorings, pepper, acorns, quality tallow, old sock, bay leaf",
			caffeineScale: 153,
			price: 54.96,
			inStock: true,
			rating: 1,
			imageUrl: "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
			__v: 0,
			categories: ["dry", "hot", "awesome"]
		}, {
			_id: "55c8ee82152165d244b98304",
			name: "Flexner veggie tea",
			ingredients: "cream of tartar, eggplant, cake, deer antler",
			caffeineScale: 181,
			price: 24.45,
			inStock: true,
			rating: 1,
			imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
			__v: 0,
			categories: ["summer"]
		}, {
			_id: "55c8ee82152165d244b98305",
			name: "Topflighter malt",
			ingredients: "botox, toast, cream of 'cream of 'cream of cream'', kitchen scraps, beef, aligator tongue, lawn clippings",
			caffeineScale: 241,
			price: 44.86,
			inStock: true,
			rating: 3,
			imageUrl: "http://s7d5.scene7.com/is/image/Teavana/31359_d?$cimg$",
			__v: 0,
			categories: ["dry", "lucid", "warm"]
		}, {
			_id: "55c8ee82152165d244b98306",
			name: "Cooking mix",
			ingredients: "flavorings, roasted mushrooms, toast, tumeric",
			caffeineScale: 230,
			price: 69.73,
			inStock: true,
			rating: 3,
			imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
			__v: 0,
			categories: ["summer"]
		}, {
			_id: "55c8ee82152165d244b98307",
			name: "Cooking stew",
			ingredients: "eggplant",
			caffeineScale: 122,
			price: 60.03,
			inStock: true,
			rating: 2,
			imageUrl: "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
			__v: 0,
			categories: ["dry", "winter", "lucid"]
		}, {
			_id: "55c8ee82152165d244b98308",
			name: "Prevenient herb tea",
			ingredients: "cream of tartar, cream of cream, kitchen scraps, flavorings",
			caffeineScale: 196,
			price: 13.74,
			inStock: true,
			rating: 3,
			imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32174_d?$cimg$",
			__v: 0,
			categories: ["lucid", "hot"]
		}, {
			_id: "55c8ee82152165d244b98309",
			name: "Angular mix",
			ingredients: "hot sauce, lawn clippings, fennel, parsley, quinine",
			caffeineScale: 196,
			price: 41.58,
			inStock: true,
			rating: 2,
			imageUrl: "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
			__v: 0,
			categories: ["spring", "warm", "winter"]
		}
	]
	teas.findItem = function(arr, value) {
		for (var i = 0; i < arr.length; i++) {
			for (var key in arr[i]) {
				if (arr[i][key] == value) {
					return arr[i]
				}

			}
		}
	}
	teas.findBasket = function(arr, value) {
	//arr[i][0] is quantity, arr[i][1] is tea object
		for (var i = 0; i < arr.length; i++) {
			for (var key in arr[i][1]) {
				if (arr[i][1][key] == value) {
					return arr[i]
				}

			}
		}
	}

	//for keeping track of total price
	teas.total = 0;

	teas.addBag = function(id, basket, quantity) {
		//finds the price of a specfic tea by getting 
		//id of the other tea from the array
		var price = teas.findItem(teas.teaList, id);
		price = price['price'];

		// if basket has tea quantity
		// increment tea by quantity selected
		if (teas.findBasket(basket, id)) {
			console.log("FOUND")
			var found = teas.findBasket(basket, id);
			//console.log('adding some:   ' + Number(quantity))
			found[0] += Number(quantity);
			//teas.bag += Number(quantity);
			console.log(basket)
			//teas.total += price * quantity
		}
		// if no quantity in basket
		// set bag equal to quantity
		else {
			console.log("NOT FOUND")
			var found = teas.findItem(teas.teaList, id);
			basket.push([Number(quantity), found]);
			// teas.bag += Number(quantity);
			console.log(basket)
			teas.total += price * quantity
		}
	}
	return teas;
});
//check if one is in the cart add one 
app.factory('cart', function() {

	var cart = {};

	cart.calcPrice = function(total) {
		// console.log('calculating price')
		// console.log('total: ' + total)
		total = 0;
		// console.log('reset to 0')
		// console.log('going through cart')
		for (var i = 0; i < cart.items.length; i++) {
			var current_item = cart.items[i];
			var price = Number(current_item[1]['price']);
			// console.log('adding price to total')
			total += Number(price) * Number(current_item[0])
		}
		return total;
	}

	//for finding from the checkout page ?
	// the [1] on the end is for the tealist object since
	// the [0] represents the quantity .. . very messy

	cart.findItem1 = function(arr, value) {
		for (var i = 0; i < arr.length; i++) {
			for (var key in arr[i][1]) {
				if (arr[i][1][key] == value) {
					return arr[i]
				}

			}
		}
	}

	cart.items = []

	return cart;
});