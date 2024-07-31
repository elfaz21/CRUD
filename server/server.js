const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/", productRoutes);

mongoose
  .connect(
    "mongodb+srv://admin:admin123@abapi.ypbs3sa.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=abApi"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("The database is successfully connected");
      console.log("this app is running on port 3000");
    });
  })
  .catch(() => {
    console.log("not connected with mongodb");
  });
