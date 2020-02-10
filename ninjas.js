const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creat ninja Schema & model
const NinjaSchema = new Schema({
  name:{
  type: String,
  required:[true, 'Name field is required']
}

rank:{
  type String
},
available:{
  type Boolean,
  default:false
}
//add in geo loacation
});
const Ninja = mongoose.model('ninja'.NinjaSchema);
mule.exports = Ninja;
