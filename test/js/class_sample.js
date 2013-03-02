/*
 * 繼承
 */
function a() {
    this.x = 1;
    this.method1 = function() {
        return 'hhi';
    }
};

function b() {}

b.prototype = new a();
var test = new b();
console.log(test.x);
console.log(test.method1());
