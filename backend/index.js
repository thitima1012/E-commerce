const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const userRouter = require("./routers/user.router");
const productRouter = require("./routers/product.router");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger-output.json");
const app = express();
const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

//Connect to Mongo DB
try {
  mongoose.connect(DB_URL);
  console.log("Connect to Mongo DB Successfully");
} catch (error) {
  console.log("DB Connection Failed");
}

app.use(cors({ origin: BASE_URL, credentials: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h1>Welcome to SE Shop Restful API</h1>");
});

app.use("/uploads", express.static(__dirname + "/uploads"));

//use Router
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/product", productRouter);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
