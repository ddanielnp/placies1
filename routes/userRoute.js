const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users_controller')
//
// router.get('/new', function (req, res) {
//   res.render('users/new')
// })
router.get('/', function (req, res) {
  res.send('userpage')
})

router.post('/', usersController.create)

router.get('/new', usersController.show)

// implementation / calling the fn
// router.post('/', placesController.create)

module.exports = router
