function monthlySavings(arr, r) {
	if (!Array.isArray(arr) || typeof r !== "number" || arr.length === 0 || arr.some(payment => payment < 0) || r < 0) {
		return "invalid input";
	}

	const x = arr.reduce((sum, payment) => sum + payment, 0);
	const p = x * 0.2;
	const q = x - p;
	const s = q - r;

	if (s > 0) {
		return s;
	} else {
		return "earn more";
	}
}

// Example usage:
const payments = [1000, 2000, 3000];
const rent = 1500;
const result = monthlySavings(payments, rent);
console.log(result); // This will print the result to the console