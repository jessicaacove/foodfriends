const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/foodfriends');

const Restaurant = require('../models/restaurant-model.js');

const restaurantInfoArray = [
  {
    restaurantName: ,
    cuisine:
  },
  {
    restaurantName: ,
    cuisine:
  },
  {
    restaurantName: ,
    cuisine:
  },
];



Restaurant.create(
  restaurantInfoArray,               // 1st arg -> array of product info objects
  (err, restaurantResults) => {      // 2nd arg -> callback
    if (err) {
      console.log('Database error.');
      return;
    }

    restaurantResults.forEach((oneRestaurant) => {
      console.log('New Restaurant! ' + oneRestaurant.restaurantName);
    });
  }
);
