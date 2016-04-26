//# Arrays
//============

// init array:
// 1) array initializer
var arr = [1,2,3];
// 2) Array constructor
var arr = new Array();
// carefull! : 
var arr = new Array(10); // -> array of 10 elements (all of them undefined)
var arr = new Array("10"); // -> ["10"]

// length property
var arr1 = [1, 2, 3];
arr1.length; // 3
arr1.length = 4;
arr1; // [1, 2, 3, undefined]
arr1.length = 2; // [1, 2]

// can be easily implemented
var MyArray = {
	length: 0,
	push: function(elm) {
		this[this.length++] = elm;
	},
	pop: function() {
		if (this.length) {
			this.length--;
			delete this[this.length];
		}
	},
	toString: function() {
		var ret = "[";
		for (var i=0; i<this.length;i++) ret += (i ? ',':'') + this[i].toString();
		return ret+"]";
	}
};

MyArray.push(1);
MyArray.push(2);
MyArray.push(3);
console.log(MyArray.toString()); // [1,2,3]
MyArray.pop();
console.log(MyArray.toString()); // [1,2]
MyArray.push(4);
console.log(MyArray.toString()); // [1,2,4]

// Internally still indexed by string
var arr = [1,2,3,4];
arr["0"] = 10;
console.log(arr); // [10,2,3,4]
// prove:
for (var i in arr) { console.log(typeof i); } // string, ...


// and it is still an object - can store any additional value
arr["hallo"] = 15;
arr.length; // still the same
for (var i in arr) { console.log(i); }


// ADVANCED:

// there are some performance improvements over objects
var strArr={};
console.time("strArr");
for(var i=0;i<1000000;i++) strArr["item"+ii] = i;
console.timeEnd("strArr");
// strArr: 2210,163ms (no cache!)
var arr=[];
console.time("arr");
for(var i=0;i<1000000;i++) arr[i] = i;
console.timeEnd("arr");
// arr: 69,073ms
// length property is auto-updated:
arr[100000]=1;
arr.length; // 100001
// but deleting property does not influence it, only array methods
delete arr[10000];
arr.length; // 100001

// max array length is 2^32-1
arr[4294967294] = 1
arr.length; // 4294967294
arr[4294967295] = 42
arr.length; // not changed - 4294967294, but the value was saved (on object)



