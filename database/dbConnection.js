import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName:"HOTEL_MANAGEMENT_SYSTEM_DEPLOYED",
    })
    .then(() =>{
        console.log("connected to database");
    })
    .catch((err) =>{
        console.log(`some error in database: ${err}`);
    })
};