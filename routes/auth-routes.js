const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const UserModel = require('../models/user-model.js');

const router = express.Router();



router.get('/signup', (req, res, next) => {
  res.render('auth-views/signup-view.ejs');
});

router.post('/signup', (req, res, next) => {
  if (req.body.signupUsername === '' || req.body.signupPassword === '') {
    res.locals.messageForDumbUsers = 'Please provide both username and password';

    res.render('auth-views/signup-view.ejs');
    return;
  }




  UserModel.findOne(
    {username: req.body.signupUsername },

    (err, userFromDb) => {
      if (err) {
        next(err);
        return;
      }

      if (userFromDb) {
        res.locals.messageForDumbUsers = 'Sorry but that username is taken.';

        res.render('auth-views/signup-view.ejs');
        return;
      }
      const salt = bcrypt.genSaltSync(10);
      const scrambledPassword = bcrypt.hashSync(req.body.signupPassword, salt);

      const theUser = new UserModel({
        fullName: req.body.signupFullName,
        username: req.body.signupUsername,
        encryptedPassword: scrambledPassword
      });

      theUser.save((err) => {
        if(err) {
          next(err);
          return;
        }

        res.redirect('/');
      });
    });
    }
  );

// END REGISTRATIOM

// LOGIN
router.get('/login', (req, res, next) => {
  if (req.user) {
    res.redirect('/');
  }
  else {
    res.render('auth-views/login-view.ejs');
  }
});

router.post('/login', passport.authenticate(
  'local',                         // 1st arg is name of a strategy
  {                           // 2nd arg is a settings object
    successRedirect: '/restaurantlist',
    failureRedirect: '/login'
  }
));
// END LOG IN


router.get('/logout', (req, res, next) => {
  // the req.logout function is defined by the passport middleware (app.js)
  req.logout();
  res.redirect('/');
});


// SOCIAL LOGINS -------------
                                          // determined by v the npm package
// router.get('/auth/facebook', passport.authenticate('facebook'));
// router.get('/auth/facebook/callback',
// passport.authenticate(
//   'facebook',        // 1st arg -> name of the strategy
//   {                 // 2nd arg ->
//     successRedirect: '/special',
//     failureRedirect: '/login'
//   }
// ));
//
// router.get('/auth/google',
//   passport.authenticate(
//     'google',
//     {
//       scope: [
//         "https://www.googleapis.com/auth/plus.login",
//         "https://www.googleapis.com/auth/plus.profile.emails.read"
//       ]
//     }
//   )
// );
//
// router.get('/auth/google/callback',
// passport.authenticate(
//   'google',        // 1st arg -> name of the strategy
//   {                 // 2nd arg ->
//     successRedirect: '/special',
//     failureRedirect: '/login'
//   }
// ));
// END SOCIAL LOGINS ----------



module.exports = router;
