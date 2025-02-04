import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      
      console.log("Connected to MongoDB Successfully");
    })

    connection.on("error", (err) => {
      console.log("MongoDB Connection Error",err);
      process.exit()
    })


  } catch (err) {
    console.log("Something went wrong While Connecting to DB",err);
  }
};