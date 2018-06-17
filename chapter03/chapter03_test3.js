function add(a, b) {
	return a+b;
}

var result = add (10, 10);

console.log('더하기 (10,10) : %d', result);

var arr = [3,4,5];
console.log(arr.length);

arr.forEach(function (item, index) {	
	console.log(arr[index]);
});