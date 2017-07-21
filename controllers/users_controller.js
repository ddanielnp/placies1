const User = require('../models/User')
const Place = require('../models/Place')
const bcrypt = require('bcrypt') // not used
const request = require('request')

function create (req, res) {
  User.create(req.body.user, function (err, newUser) {
    if (err) {
      // flow if user is invalid
      // passing error message to /users

      res.send(err)
      // res.redirect('/users')
    }

    // flow is user is created

    res.format({
      html: function () {
        res.redirect('/users/new')
      },

      json: function () {
        res.send('respond for ajax')
      }
    })
    // res.redirect('/users/new')
  })
}

function show (req, res) {

  // // getting all places from ajax
  // Place.find({}, function (err, places) {
  //   if (err) {
  //     console.log(err)
  //     return
  //   }
  //   res.render('users/new', {
  //     allPlaces: places
  //   })
  // })

  // getting all places from google place api
  const apiUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?'
  const apiKey = '&key=AIzaSyD3bDC9k6zz_wxVngX4Ei8-pWSAPwr0Qz8'
  const qString = `query=hotels in singapore`

  request(`${apiUrl}${qString}${apiKey}`, function (err, response, body) {
    if (err) res.send(err)

    var data = JSON.parse(body)
    res.render('users/new', {
      places: data.results
    })
  })

}// show function

module.exports = {
  create,
  show
}
