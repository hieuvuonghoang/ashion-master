

function connectToDB() {
    const mongoose = require('mongoose')
    const connectString = "mongodb://hieuvh:hieu2111@localhost:27017/ashion"
    mongoose.connect(connectString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Successfully connect to MongoDB'))
        .catch(err => console.error('Connection error', err));
}

// module.exports.db = connectToDB