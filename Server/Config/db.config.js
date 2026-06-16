const mongoose = require('mongoose');

const DBConfig = async () => {
  try {
    await mongoose.connect('mongodb+srv://DataCollect:DataCollect@cluster0.jtiah2x.mongodb.net/DataCollect?appName=Cluster0');
    console.log('DB connected');
  } catch (error) {
    console.error('DB connection error:', error);
    process.exit(1); // Exit process with failure
  }
}

module.exports = DBConfig;