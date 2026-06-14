const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  volunteerId: {
    type: String,
    required: true,
    ref: 'volunteers'
  },
  volunteerEmail: {
    type: String,
    required: true
  },
  reviewText: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('reviews', ReviewSchema);
