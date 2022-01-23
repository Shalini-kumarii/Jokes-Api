// import mongoose
const mongoose = require('mongoose');

// the schema - the rules that the entries in the db must follow
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
}, {timestamps: true})

// the model - this is what we use to make the actual queries to the db
const User = mongoose.model("User", UserSchema);

// export the model
module.exports = User;