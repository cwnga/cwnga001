var geval = eval;
var x = 'global';
var y = 'global';
function f() {
    var x = 'local';
    eval("x += 'change';");//eval 在使用的時候，是要用一層的變數
    return x;
}
function g() {
    var y = 'local';          
    geval("y += 'change';");//因為geval是＝eval是在外面assign， 所以是看到外面的y
    return y;
}
console.log(f(),x);//localchange global 
console.log(g(),y);//globalchange local
