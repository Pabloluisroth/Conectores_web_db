const db = require('./config/db');
var mongoose = require('mongoose');

const database = mongoose.connection
mongoose.connect(db.cluster, {
  useNewUrlParser: "true",
  useUnifiedTopology: "true"
})

// Configuracion de los eventos de la conexión Mongoose
database.on('connected', function () {
  console.log(' Mongoose default connection open to: Mongodb SingleQuickNotes cluster');
});

database.on('error',function (err) {
  console.log(' Mongoose default connection error: ' + err);
});

database.on('disconnected', function () {
  console.log('\n Mongoose connection disconnected');
});

process.on('SIGINT', function() {
  database.close(function () {
    console.log(' Mongoose through app termination');
    process.exit(0);
  });
});

