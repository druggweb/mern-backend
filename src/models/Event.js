const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  noun: String,
  machine: String,
  stock: String,
  location: String,
  description: String,
  //thumbnail: String,
  date: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  toJSON: {
    virtuals: true
  }
})

//EventSchema.virtual("thumbnail_url").get(function() {return `http://localhost:8000/files/${this.thumbnail}`})

module.exports = mongoose.model('Event', EventSchema)
