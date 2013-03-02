function add(m) {
	return function(n) {
		return m + n;
	};
}
var wait_another_arg = add(20); //先給一個參數
var a = function(arr) {
	var ret = 0;
	for (var i = 0; i < arr.length; i++) ret += arr[i];
	return ret;
} ([1, 2, 3, 4]); //計算一下另一個參數
console.log(a);
var b = wait_another_arg(a); //然後再繼續執行
console.log(b);

