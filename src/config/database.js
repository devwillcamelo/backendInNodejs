const mongoose = require ('mongoose');

const url = 'mongodb://localhost:3000';
mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;