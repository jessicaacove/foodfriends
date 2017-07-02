const mongoose = require('mongoose');

const Schema = mongoose.Schema;




const RestaurantSchema = new Schema(
{
  restaurantName: {
    type: String
  },
  cuisine: {
    type: String
  }
});



const RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);

module.exports = RestaurantModel;
