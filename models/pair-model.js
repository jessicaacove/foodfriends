const mongoose = require('mongoose');

const Schema = mongoose.Schema;




const PairSchema = new Schema(
{
  restaurantName: {
    type: String
  }
  // username: {
  //   type: String
  // }
});



const PairModel = mongoose.model('Pair', PairSchema);

module.exports = PairModel;
