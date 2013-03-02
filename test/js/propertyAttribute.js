/*
* getOwnPropertyDescriptor
*/
console.log('################################');
console.log('Object.getOwnPropertyDescriptor');
console.log(Object.getOwnPropertyDescriptor({x:1},'x'));//{ value: 1, writable: true, enumerable: true, configurable: true }
var obj1 = {
set accessor1(value){} 
}
console.log(Object.getOwnPropertyDescriptor(obj1, 'accessor1'));
/*{ 
  get: undefined,//no set accessor1 in var obj1
  set: [Function: accessor1],
  enumerable: true,
  configurable: true }
*/


/**
* define property 
* Object.defineProperty
*/

console.log('################################');
console.log('Object.defineProperty');
var o = {};
//add propery x
Object.defineProperty(o, "x", { value: 1, writable: true, enumerable: true, configurable: true });
console.log(o.x);//1
o.x = 2;
console.log(o.x);//2
console.log(Object.keys(o));//[x]


Object.defineProperty(o, "x", { value: 1, writable: false, enumerable: false, configurable: true });
o.x = 2;//no setting effect
console.log(o.x);//1
console.log(Object.keys(o));//[]

/*
* Object.defineProperties
*/
console.log('################################');
var p  = Object.defineProperties({},{x: {value:1, writeable:true, enumerable:true, configurable:true}});
console.log(p.x);

