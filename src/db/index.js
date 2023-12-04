import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`/n MongoDb connected !! DB HOST ${connectionInstance.connection.host}`);
    } catch(error){
        console.log("MONGODB connection error", error)
        process.exit(1)
    }
}

export default connectDB 





//*******************1st Approach*******************//
/*
import expreess from "express"
const app = express ()

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()_=>{
            console.log("ERROR: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log("App is listening on port ${process.env.PORT}")
        })
    }catch(error){
        console.error("ERROR: ", error);
        throw error
    }
})()

*/