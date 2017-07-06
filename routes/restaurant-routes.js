const express = require('express');

const RestaurantModel = require('../models/restaurant-model.js');
const PairModel = require('../models/pair-model.js');

const router = express.Router();



router.get('/restaurantlist', (req, res, next) => {
  if (req.user === undefined) {
      res.redirect('/login');
      return;
    }

    RestaurantModel.find(
      {},
      (err, restaurantResults) => {
        if (err) {
          next(err);
          return;
        }

        res.locals.restaurantList = restaurantResults;

        res.render('restaurant-views/restaurant-list-view.ejs');
      }
    );
});


router.post('/restaurantlist', (req, res, next) => {

  const thePair = new PairModel({
    restaurantName: req.body.restaurantName
  });

  thePair.save((err) => {
      if (err) {
        next(err);
        return;
      }
      res.redirect('/restaurant');
    });
});


router.get('/restaurant', (req, res, next) => {

  res.render('restaurant-views/selected-restaurant-view.ejs');
});



module.exports = router;
