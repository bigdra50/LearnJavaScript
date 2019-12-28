var result;
for (var i = 1; i <= 1e+5; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        result = "FizzBuzz";
    } else if (i % 3 == 0) {
        result = "Fizz";
    } else if (i % 5 == 0) {
        result = "Buzz";
    }else{
        result = i;
    }
    document.writeln(result);
}