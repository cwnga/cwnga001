var a ={x:1}
a.y = function() {}
for (var index in a) {
console.log(index);
}
