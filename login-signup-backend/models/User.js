const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { // <-- Add this line
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true // Hashed password
  }
});

module.exports = mongoose.model('User', UserSchema);
