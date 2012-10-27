var true_var = 1;          //use var, can not delete
console.log(true_var);     //1
delete true_var;
console.log(true_var);     //1

this.fake_var = 2          //no use var,delete
console.log(this.fake_var);//2
delete this.fake_var;
console.log(this.fake_var);//delete --> undefine

