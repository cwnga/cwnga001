var accu = 0,
count = 10;
for (var i = 0; i < count; i++) {
	console.log(i);
	setTimeout(
	function() {
		count--;
		accu += i;
		console.log(i); //why 100? because for loop inter count = 10, then wait 50 ms to count--
		if (count <= 0) console.log(accu)
	},
	50)
}

