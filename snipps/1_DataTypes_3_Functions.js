// Creation of function
// 1) Function declaration:
function sum(a, b) {
	return a + b;
}
// 2) Function expression
var sum = function(a,b) {
	return a + b;
}
// 3) Named function expression
// useful when showing call stack and when calling recursivelly
var sum = function sumFunc(numArr) {
	if (numArr.length > 1) return numArr.shift() + sumFunc(numArr);
	else if (numArr.length > 0) { console.trace(); return numArr[0]; }
	else return 0;
}

// ----

// Functions as first class objects

// performer measures time of performing function
function performer(name, func, args) {
	console.log("Performing " + name + ":")
	console.time("perf"+name);
	func.apply(null,args);
	console.timeEnd("perf"+name);
}
var func = function sum(numArr) {
	var ret = 0;
	for (var i=0;i<numArr.length;i++) ret+=numArr[i];
	return ret;
}
performer("Sum", func, [[1,2,3]]);

// ---
