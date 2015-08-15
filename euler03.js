var lpf = function(number) {
	for (var i = 2; i < number; i++) {
		if (number % i === 0) {
			number = number / 2;
		};
		console.log(number)
	};
};
lpf(600851475143);

/* 
lpf function takes one argument 'number'
for loop. while i equals 2 and while i is less than number, increment i by 1.
condition. if the number divided by i is equally divisble by a whole number, in other words, has 0 remainders,
then DO THIS: let number equal number divided by 2. */