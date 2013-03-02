/**
 *
 * 繼承
 * 方法1. father要使用prototype來把資料繼承
 * father.prototype.XXX = ?
 * var son.prototype =  new father();;
 */
function father() {}//father constructor
father.prototype.x = '100';//被son.prototype =  new father()繼承
father.x = '99';//被son2.prototype = father繼承
father.prototype.test = function (){return this.x;}//father test method
father.test = function (){return this.x;}//father test method

function son(){} //son construct
son.prototype = new father(); //son class 繼承 father, 是用class, 下面是一個object

//son object
var sonobj = new son();
console.log(sonobj.x);
console.log(sonobj.test());


function son2(){} //son construct
son2.prototype = father; //son class 繼承 father, 是用class, 下面是一個object

//son object
var son2obj = new son2();
console.log(son2obj.x);//99
console.log(son2obj.test());//99




/**
 *
 * 繼承 正式
 * 方法2. father不使用prototype來把資料繼承
 * father.XXX = ?
 * var son.prototype = father;
 */
function inherit(p) {
//return 一個繼承的object
    function f() {};
    f.prototype = p;
    return new f();
}
var p = function(){x:1000;}
p.x = 100;
p.fun = function(){x=1000; return x;}
var test = inherit(p);  
console.log(test.x);//1000 p.fun return 1000 
console.log(test.fun());//1000 p.fun return 1000 

