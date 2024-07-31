const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./userRoute/userRoute");
const app = express();

app.use(express.json());
app.use("/", userRoutes);

mongoose
  .connect(
    "mongodb+srv://admin:admin123@abapi.ypbs3sa.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=UsersApi"
  )
  .then(() => {
    app.listen(3005, () => {
      console.log("App is running on port 3005");
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });
