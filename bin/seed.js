const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const Restaurant = require('../models/restaurant-model.js');

const restaurantInfoArray = [
  {
    restaurantName: "La Moon",
    cuisine: "Colombian",
    logoPhoto: "/images/restaurant-logos/lamoonlogo.jpg"
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
  {
    restaurantName: "La Sandwicherie",
    cuisine: "Sandwiches and Salads"
  },
  {
    restaurantName: "American Harvest",
    cuisine: "New American"
  },
  {
    restaurantName: "Pubbelly Sushi",
    cuisine: "Sushi"
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
