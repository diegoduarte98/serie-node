const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/noderest', { useNewUrlParser: true }).then(() => {
    console.log('connected');
}).catch((err) => {
    console.log('err', err);
});

mongoose.Promise = global.Promise;

module.exports = mongoose;