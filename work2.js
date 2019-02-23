const factorial = (num) => {
     if (num != 1) {
     	return num * factorial(num-1);
     } else {
     	return num;
     }
}

alert(factorial(2));



