const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Mongo connected');
  }).catch(err => {
    console.error('Mongo connect error', err);
    process.exit(1);
  });

  console.log("DB connected");
}



module.exports = connectDB;

