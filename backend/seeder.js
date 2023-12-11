// import productSchema from './models/productSchema.js'

// import productDataList from '../frontend/src/utils/products'
// import mongoose from 'mongoose'
// import productDataList from '../frontend/src/utils/products.js'

const mongoose = require("mongoose")
const product = require('./models/productSchema.js');
const productDataList = require('../frontend/src/utils/products.js')


mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))


const importData = async () => {
    try {
    await product.insertMany(productDataList)
    } catch (error) {
      console.error(`${error}`)
      process.exit(1)
    }
  }

  importData();

