const Place = require('../models/Place')

function create (req, res) {
  var newPlace = new Place({
    name: req.body.name,
    address: req.body.address,
    reference: req.body.reference,
    // users: req.body.place????
  })

  newPlace.save(function (err, newPlace) {
    if (err) {
      return res.send(err)
    }
    res.send({
      status: 'ok',
      message: 'New place created'
    })
    // res.redirect('/places')
  })
}

module.exports = {
  create
}
