import mongoose from "mongoose";

const establishDatabaseConn = async () => {
  try {
    const URI = process.env.MONGODB_URI as string;
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(URI);
    }
    console.log("[LOG] MongoDB connection established!")
  } catch (error) {
    console.error(error);
  }
};

export default establishDatabaseConn;
