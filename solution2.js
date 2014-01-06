var x = 1;  // Initialize both x and y to the initial values of the Fibonacci sequence
var y = 2;
var sum = 2; // Initialize the sum variable to two because the initial value is not added by the while loop

while (y < 4000000) { // Iterates through the Fibonacci sequence just before the term of value 4000000
	x += y;
	y += x;
	if (x % 2 == 0) {  // Check to see if the x term is an even number
		sum += x;  // Adds even x term to sum variable
	}
	if (y % 2 == 0) {  // Check to see if the y term is an even number
		sum += y;  // Adds even y term to sum variable
	}
}

console.log(sum); // Outputs sum after the while loop