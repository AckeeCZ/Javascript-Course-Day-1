// list iteration
for(var len=100;len<100000000;len*=10) {
	var arr = new Array(len);
	for (var i=0;i<len;i++)arr[i]=i;
	var sum = 0;
	console.time("prop"+len);
	for (var i=0;i<arr.length;i++)
		sum += arr[i];
	console.timeEnd("prop"+len);
}

// var100: 0,064ms
// var1000: 0,063ms
// var10000: 0,519ms
// var100000: 6,201ms
// var1000000: 136,251ms
// var10000000: 715,387ms