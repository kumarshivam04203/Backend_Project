import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        //mongodb me jaha be connection ho raha hai usko return karna
        console.log(`\n Connected to MongoDB!! DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MOOngodb connection Failed", error);
        process.exit(1);
    }
}

export default connectDB;