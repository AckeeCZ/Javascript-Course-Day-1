// indexOf method
var str = "";
for (var i = 0; i < 1000000; i++) str+="a";
str+="b";

for (var i = 1; i < 100000; i*=10) {
	var needle = "";
	for (var j = 0; j < i; j++) needle+= "a";
	needle+="b";
	console.time("string "+i);
	str.indexOf(needle);
	console.timeEnd("string "+i);
}

// string immutable
for(var len = 10, actlen=0; len<=10000000; len*=10) {
	var str = "";
	for(var actlen=0;actlen<len;actlen++)str+="a";
	console.time("str: "+actlen);
	str=str.substring(0,actlen-1);
	console.timeEnd("str: "+actlen)
}
// str: 10: 0,029ms
// str: 100: 0,021ms
// str: 1000: 0,016ms
// str: 10000: 0,135ms
// str: 100000: 3,590ms
// str: 1000000: 17,564ms
// str: 10000000: 839,015ms