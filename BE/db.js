const mongoose = require('mongoose')
// const config = require('config')
// const db = config.get('mongoURI')
const db = 'mongodb://localhost:27017/db01'
// const db = 'mongodb+srv://dbuser:P%40ssw0rd@cluster1.ebiee.mongodb.net/db01?retryWrites=true&w=majority'
const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      { useNewUrlParser: true }
    )

    console.log('MongoDB is Connected...')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB
