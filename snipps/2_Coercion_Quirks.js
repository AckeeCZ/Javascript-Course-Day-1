// # coercion quirks:
	null >= 0 	// true
	null > 0 	// false
	null == 0 	// false

	// == !== : ECMAScript algorithm of equality
	// 	- one operand string, second number -> numbers
	// 	- boolean -> always to number
	// 	- string/number vs object -> object to primitive
// ---
{} + "a"
// ---
[1,2]+[3,4] // "[1,2][3,4]"
[1,2]-[3,4] // NaN
// ===