// Execute the bubble sort
function init () {
	// Get min value
	var min = document.querySelector("#rangeMin").value;
	// Get max value
	var max = document.querySelector("#rangeMax").value;
	// Get the count
	var count = document.querySelector("#count").value;
	// Get random number between min and max
	var randomNumbers = getRandomNumbers(min, max, count);
	// Get results container
	var resultsContainer = document.querySelector("#results");
	// Sort the numbers using Bubble Sort!
	doSort(randomNumbers.slice(0), function (sorted) {
		resultsContainer.innerHTML = "" + 
		"<p style='font-weight:bold'>Original: " + randomNumbers + "</p>" + 
		"<p style='font-weight:bold'>Sorted: " + sorted + "</p>";
	});

	
}

// Do the Bubble Sort!
function doSort (numbers, callback) {
	// Track if we should keep sorting
	var flag = false;
	// Loop through the numbers
	for (var i = 0; i < numbers.length; i++) {
		// Get the value in the current index
		var current = parseInt(numbers[i]);
		// Get the value in the next index (if available)
		var next = numbers[i + 1] != null ? parseInt(numbers[i + 1]) : null;
		// Check if there is another value to sort and if the current value is bigger than the next value
		// This is the core of the Bubble Sort
		if (next != null && next < current) {
			// Let's do the switch-a-roo!
			var currentVal = numbers[i];
			var nextVal = numbers[i + 1];
			numbers[i] = nextVal;
			numbers[i + 1] = currentVal
			flag = true;
		}
	}
	if (flag)
		doSort(numbers, callback);
	callback(numbers);
}

// Get random array
function getRandomNumbers (min, max, count) {
	var arr = [];
	for (var i = 0; i < count; i++) {
		arr.push(getRandomNum(min, max));
	}
	return arr;
}

// Get random number
function getRandomNum (min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}