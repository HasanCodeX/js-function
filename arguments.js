/**
 * Calculates the square of a given number.
 * 
 * @param {number} number - The number to be squared.
 * @returns {number} The square of the given number.
 */
function squareIt(number) {
    if (typeof number !== 'number') {
        throw new Error('Input must be a number');
    }

    const square = number * number;
    console.log(`Square of ${number} is ${square}`);
    return square;
}

// Example usage:
try {
    const result = squareIt(5);
    console.log(`Result: ${result}`);
} catch (error) {
    console.error(error.message);
}