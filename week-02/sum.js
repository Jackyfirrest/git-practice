// ary: number array
function sum(ary) {
	// TODO: sum all elements in ary
    return ary.reduce((a, b) => a + b)
}

let arrayTest = [1, 5, 3, 2];

console.log(sum(arrayTest)); // 11
