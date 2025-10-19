const mongoose = require('mongoose');
const ShortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    unique: true
  },
  clicks: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('ShortUrl', ShortUrlSchema);
