function evenNumbersOnly(numbers){
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
        }
    }
}

// Example usage
evenNumbersOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);