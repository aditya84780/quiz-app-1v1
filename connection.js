const mongoose = require('mongoose')

async function connectMongoDb(url) {
    try {
        return await mongoose.connect(url)
    } catch (error) {
        console.log("mongoDb connection failed ", error);
    } 
}

module.exports = connectMongoDb;