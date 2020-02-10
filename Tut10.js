var fs = require('fs');

// fs.unlink('writeMe.txt'); to delete file, make sure it exists

// fs.rmdirSync('stuff'); //mk = make | rm = remove , synchronously which blos=cks the code

// //assync way of creating directory, without it being empty
// fs.mkdir('stuff', function(){
//   fs.readFile('readMe.txt', 'utf8', function(err, data){
//     fs.writeFile('./stuff/writeMe.txt',data, () => {});
//   });
// });

//async to remove directory
fs.unlink('./stuff/writeMe.txt', function(){

});
fs.rmdir('stuff', () => {});
