const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/foodfriends');

const Restaurant = require('../models/restaurant-model.js');

const restaurantInfoArray = [
  {
    restaurantName: "La Moon",
    cuisine: "Columbian"
  },
  {
    restaurantName: "Blue Tree Juice",
    cuisine: "Juice Bar"
  },
  {
    restaurantName: "Stanzione 87",
    cuisine: "Pizza"
  },
  {
    restaurantName: "Doraku",
    cuisine: "Sushi"
  },
  {
    restaurantName: "Burger and Beer",
    cuisine: "Burgers"
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
