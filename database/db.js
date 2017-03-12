var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/currency');

var db = mongoose.connection;
db.on('error', function(error) {
  console.log('connection error: ', error);
});
db.once('open', function() {
  console.log('We are connected to the shortly database');
});

var moneySchema = mongoose.Schema({
  euro: Number,
  yen: Number,
  pound: Number,
  franc: Number
});

var Money = mongoose.model('Money', moneySchema);

var first = new Money({ 
	euro: 1.067,
  yen: 114.77,
  pound: 1.2164,
  franc: 0.9875
});

first.save(function(err, first) {
  if (err) {
    console.log(err);
  } else {
    console.log(first);
  }
});