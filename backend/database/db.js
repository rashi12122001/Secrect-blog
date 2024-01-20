import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL =
    "mongodb+srv://shreyashchandra123:ReDJPvY7RCh1Nahd@shreyash.3mh5ouf.mongodb.net/secret-blog";
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: false,
      useUnifiedTopology: true,
    }); // Async
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error", error);
    //
  }
};

export default Connection;
