var sum = 0; // Initialize storage variable at zero and declared outside for loop to avoid scoping issues

for(var i = 999; i > 0; i--) { // For loop that iterates through every number less than 1000
	if (i % 5 == 0) { // Checks if number is a multiple of 5
		sum += i;
	}
	else if (i % 3 == 0) { // Checks if number is a multiple of 3 while avoiding double counting numbers that are multiples of 15
		sum += i;
	}
}

console.log(sum);