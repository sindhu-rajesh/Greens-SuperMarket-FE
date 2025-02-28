// const mongoose = require("mongoose");
// require("dotenv").config();


// const connectMongoDB =() =>{
//     try{
//         mongoose.connect(process.env.MONGODB_URL);
//         console.log("MongoDB connected");
//     }catch(error){
//         console.log(error.message);
//     }
// };


// module.exports = connectMongoDB;
// configDB.js
const mongoose = require('mongoose');

const connectMongoDB = async () => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb+srv://guvi:guvi123@cluster0.yej84.mongodb.net/admin-panel';
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectMongoDB;