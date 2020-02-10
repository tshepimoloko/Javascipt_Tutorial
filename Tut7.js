//Module Patterns
var counter  = function(arr){
  return 'There are' + arr.length + 'elements in this array';
};
console.log(counter(['tshepi', 'jacqueline','moloko']));

var adder  = function(a,b){
return `The sum of the t.wo numbers is ${a+b}`;
}

var pi = 3.142;

//module.export is an empty object
//adding of properties by counter/adder/pi propertes are set into the functions above
module.exports.counter = {
  counter:counter,
  adder:adder,
  pi:pi,
};

//cut out middle man
module.exports.counter =  function(arr){
  return 'There are' + arr.length + 'elements in this array';
}
