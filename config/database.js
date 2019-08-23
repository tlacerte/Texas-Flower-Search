var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

// database connection event
mongoose.connection.on('connected', function () {
  console.log(`Mongoose connected to mongoDB`);
});

module.exports = mongoose;