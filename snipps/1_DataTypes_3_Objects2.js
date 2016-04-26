//# Objects 2/2
//============

// Object passed by reference:
var obj1 = { a: 1 };
var obj2 = obj1;
obj2.a = 2;
console.log(obj1.a); // 2

function changeObj(obj) {
	obj.a = 3;
}
changeObj(obj1);
console.log(obj2.a); // 3

// compare with primitive
	function changeNumber(num) {
		num = 5;
	}
	var num = 1;
	changeNumber(num);
	console.log(num); // still 5
	// correct:
	function changeNumber(numWrp) {
		numWrp.value = 5;
	}
	var numWrp = {value:3};
	changeNumber(numWrp);
	console.log(numWrp.value);

// -----

// Object comparison:
var objA = { name: "Frank" };
var objB = { name: "Frank" };
console.log(objA == objB); // false
var objC = objA;
console.log(objA == objC); // true

// -----

// list all elements of object
var obj = {
	a: 1,
	b: 2,
	c: function() { return 3; }
};
for (var i in obj) {
	if (obj.hasOwnProperty(i)) // in case of prototypes, will be covered later
		console.log(i + ": " + obj[i].toString());
}

// -----

// deep copy of object
function deepCopy(obj) {
	var newObj = {};
	for (var i in obj) {
		if (obj.hasOwnProperty(i))
			if (typeof obj[i] == "object")
				newObj[i] = deepCopy(obj[i]);
			else
				newObj[i] = obj[i];
	}
	return newObj;
}
var obj1 = {
	a: 1,
	b: 2,
	c: {
		i: 3,
		j: 4,
		k: 5
	}
};
var obj2 = deepCopy(obj);
obj2.c.i = -10;
console.log(obj1.c.i); // 3
console.log(obj2.c.i); // -10


