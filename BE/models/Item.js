const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String
  },
  dropofflocation: {
    gps: String,
    keyword: [String]
  },
  timestamp: Date,
  location: {
    gps: String,
    keyword: [String]
  },
  image: [String],
  keyword: [String],
  comments: [{
    timestamp: Date,
    text: String
  }],
  votes: [{
    timestamp: Date,
    score: Number
  }],
  updated_date: {
    type: Date,
    default: Date.now
  }

})

module.exports = Item = mongoose.model('item', ItemSchema)
