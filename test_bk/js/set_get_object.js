var a = {
$k : 10,
set b(value) {this.$k = value},
get b(){return this.$k;}
}
console.log(a.b);//k:10
a.b =100;
console.log(a.b);//k:100
