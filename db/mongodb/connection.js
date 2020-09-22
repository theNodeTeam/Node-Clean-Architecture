let config = require('../../config')
let mongoose = require('mongoose');

// Use ES6 Promises for mongoose
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
// Set environment variables
let env = process.env.NODE_ENV;

if (env === 'production') {
  // Using mongoose to connect to MLAB database (Create new database single node free and create new user and set name and password)
  const username = config.mongo.MONGO_USER
  const password = config.mongo.MONGO_PW
  mongoose.connect(`mongodb+srv://aijazali:aijazali@cluster0.t9uxg.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority`)
} else {
  mongoose.connect(`mongodb+srv://aijazali:aijazali@cluster0.t9uxg.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority`), {
    useMongoClient: true,
  };
}

// Signal connection
mongoose.connection.once('open', function () {
  console.log('Connection has been made');
}).on('error', function (error) {
  console.log('Connect error', error);
}).on('disconnected', function () {
  console.log('Connection disconnected');
})

module.exports = mongoose
