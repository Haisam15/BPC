import mongoose from "mongoose";

const connection =mongoose.connect(process.env.MONGODB_URL).then(() => console.log("Mongo Connected!"));

export default connection;