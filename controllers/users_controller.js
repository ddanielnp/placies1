const User = require('../models/User')
const Place = require('../models/Place')
const bcrypt = require('bcrypt')
const request = require('request')

function create (req, res, next) {
  // var salt = bcrypt.genSaltSync(10)
  // var hash = bcrypt.hashSync(req.body.user.password, salt)

  var newUser = new User({
    name: req.body.user.name,
    email: req.body.user.email,
    password: req.body.user.password
  })

  newUser.places.push(req.body.place.id)

  newUser.save(function (err, createdUser) {
    if (err) {
      // req.flash()
      next(err)
    }

    res.send({
      reqbody: req.body,
    // hash: hash
      newUser: newUser,
      createdUser: createdUser
    })
  })

  // User.create(req.body.user, function (err, newUser) {
  //   if (err) {
  //     // flow if user is invalid
  //     // passing error message to /users
  //
  //     res.send(err)
  //     // res.redirect('/users')
  //   }
  //
  //   // flow is user is created
  //
  //   res.format({
  //     html: function () {
  //       res.redirect('/users/new')
  //     },
  //
  //     json: function () {
  //       res.send('respond for ajax')
  //     }
  //   })
  //   // res.redirect('/users/new')
  // })
} // close for create function

function show (req, res) {
  // getting all places from DB
  Place.find({}, function (err, places) {
    if (err) {
      console.log(err)
      return
    }
    res.render('users/new', {
      places: places
    })
  })

  // // getting all places from google place api
  // const apiUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?'
  // const apiKey = '&key=AIzaSyD3bDC9k6zz_wxVngX4Ei8-pWSAPwr0Qz8'
  // const qString = `query=hotels in singapore`
  //
  // request(`${apiUrl}${qString}${apiKey}`, function (err, response, body) {
  //   if (err) res.send(err)
  //
  //   var data = JSON.parse(body)
  //   res.render('users/new', {
  //     places: data.results
  //   })
  // })
}// show function

module.exports = {
  create,
  show
}
