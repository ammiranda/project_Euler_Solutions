var x = 1;
var y = 2;
var sum = 0;

for (var y; y < 4000000; x) {
	x += y;
	y += x;
	if (x % 2 == 0) {
		sum += x;
	}
	if (y % 2 == 0) {
		sum += y;
	}
}

console.log(sum);