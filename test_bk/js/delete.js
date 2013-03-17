var o =  {x:1, y:2};
delete o.x;
console.log("x" in o);//false
console.log(o);//{ y: 2 }

var a = [1,2,3];
delete a[2];
console.log(2 in a);false
console.log(a.length);3


console.log(delete 1);
this.x = 1;
//console.log(x);//error
delete x;
delete this.x;
console.log(this.x);//undefined
//console.log(x);//error
