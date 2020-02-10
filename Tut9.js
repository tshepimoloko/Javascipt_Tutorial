//Reading & Writing Files

var fs = require('fs'); //fs module

// var readMe = fs.readFileSync('readme.txt','utf8');
// console.log(readMe);

//read, store and write content of Files
fs.readFile('readme.txt','utf8',function(err, data){
  fs.writeFile('writeMe.txt',data, () => {});
});
