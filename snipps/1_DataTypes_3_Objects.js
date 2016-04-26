//# Objects 1/2
//============

// Simple object example
var Circle = {
	// properties:
	radius: 5,
	position: { x: 0, y: 0 },
	// methods:
	area: function() {
		return Math.PI * Math.pow(radius, 2);
	}
}

// accessing properties
var table = {
	123: "lorem ipsum"
};
table[123]; // "lorem ipsum"
table["123"]; // "lorem ipsum"
table[12*10 + 3]; // "lorem ipsum"

// accessing by objects (bad practice):
var obj1 = { a: 1 };
var obj2 = { a: 2 };
var table = {};
table[obj1] = "jedna";
table[obj2] = "dva";
table[obj1] // "dva"
table[{}] // "dva"
({}).toString(); // "[object Object]"
obj1.toString(); // "[object Object]"

// fix
var obj1 = { a: 1, toString: function(){ return "obj"+this.a; } };
var obj2 = { a: 2, toString: function(){ return "obj"+this.a; } };
table[obj1] = "jedna";
table[obj2] = "dva";
console.log(table[obj1], table[obj2]); // "jedna" "dva"