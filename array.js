

function sumOfNumbers(numbers){
	return numbers.reduce((acc, curr) => acc + curr, 0);
}
const numbs = [54,63,12,6];
const sum = sumOfNumbers(numbs);
console.log('sum of Numbers is ', sum)