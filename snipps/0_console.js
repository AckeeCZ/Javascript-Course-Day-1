//# 0_console
//============

// console.log - multiple arguments
console.log("a", 1, b, {3});

// warning flag to stand out
console.warn("Number should be positive.");

// prints stack trace
console.error("Cannot parse string.");

// measuring time
console.group();
for (var j = 10; j <= 1000000000; j*=10) {
	console.time("counting up to: " + j);
	for (var i = 0; i < j; i++) {
	}
	console.timeEnd("counting up to: " + j);
}
console.groupEnd();

// debug
// EXAMPLE 0_Adder_0

// Don't get lost in console
console.group()
console.groupCollapsed()
console.groupEnd()

// Console API:
// https://developer.chrome.com/devtools/docs/console-api

// Support across browsers:
// https://docs.google.com/document/d/1rtCIorwj4veWN2_wCVQqkitx2V1GSRxmuKByQtmUCr8/edit