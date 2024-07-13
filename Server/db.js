const mongoose = require("mongoose");
const uri = "mongodb+srv://admin:admin@learningcluster.1g2fmqt.mongodb.net/?retryWrites=true&w=majority&appName=LearningCluster";

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB Connected.!')
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB;