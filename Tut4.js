var time = 0;

  console.log('hey ninjas');

  var timer= setInterval(function() {
    time +=2;
    console.log(time + ' seconds have passed');
    if(time > 5){
      clearInterval(timer);
    }
  }, 2000)

 console.log(__dirname);//name of folder
 console.log(__filename);// __filename
