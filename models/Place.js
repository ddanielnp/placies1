const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  address: {
    type: String,
    required: [true, 'Address is required']
  },
  reference: String
  // users: [{
  //   type: Schema.Types.UserId,
  //   ref: 'User'
  // }]
})

// mongoose.model(<singular form of model>, <schemaName>)
const Place = mongoose.model('Place', placeSchema)

module.exports = Place
