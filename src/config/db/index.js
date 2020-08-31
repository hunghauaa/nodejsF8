const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/F8', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('connect successfully');
    } catch (error) {
     console.log(error)   
    }

}

module.exports= { connect }
