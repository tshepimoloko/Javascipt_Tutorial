//normal function statement

function sayHi() {
  console.log('Hi');
}
sayHi();

//function expresion
var sayBye = function(){
  console.log('bye');
}
sayBye();

//parsing variable to function
function callFunction(fun) {
  fun();
}
callFunction(sayBye);
