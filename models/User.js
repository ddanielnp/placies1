const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please type your name']
  },
  email: {
    type: String,
    required: [true, 'Please type your email']
  },
  password: String,
  places: [{
    type: Schema.Types.ObjectId,
    ref: 'Place'
  }]
})

const User = mongoose.model('User', userSchema)

module.exports = User
