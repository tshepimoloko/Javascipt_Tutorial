//Modules & require()
var counter = function(arr){
  return 'There are' + arr.length + 'elements in this array';
};
console.log(counter(['tshepi', 'jac','moloko']));

module.exports = counter;
