var scope = "global"
function f(){
	console.log(scope);//undefined
	var scope = 'local';
	console.log(scope);//local
	
}
f();