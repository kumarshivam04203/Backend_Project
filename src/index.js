//dotenv ko require karne se code ke consestancy kharab hkarta hai
// require ('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from './app.js'

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port :  ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongo connection failed :", err);
  });

// TODO : First db connect approach
/*
import express from "express"
//initialize app
const app = express()

;(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        //database connect ke baad listener dektai hai. listerner app ke pass hotai hai  jo kaye event ko handle kar sakta hai
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("Error: ", error);
        throw new Error(`${error}.`)
    }
})()
*/
