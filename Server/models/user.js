const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: String,
  googleId: String,
  phone: String,
  otp: String,
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
