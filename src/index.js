// require('dotenv'.config({path: './env'}))
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()





/* import express from 'express'
// mongoose.connect('mongodb://127.0.0.1:27017/test');
const app = express()

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}`/{DB_NAME})
        app.on("error",()=>{
            console.log("ERR :",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`APP is listening to to ${process.env.PORT}`);
        })
    }catch(error){
        console.error("ERROR : ",error)
        throw error
    }
})();
 */
