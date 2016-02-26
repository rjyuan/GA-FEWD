var i = 1;

while (i<=100) {
	var toPrint = i;
	if(i%3 === 0) {
		toPrint = 'fizz';
	}
	if(i%5 === 5) {
		toPrint = 'buzz';
	}
	if(i%3 === 0 && i%5 === 0) {
		toPrint = 'FizzBuzz'
	}

	console.log(toPrint);
	i++;
};
