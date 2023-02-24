const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("./Config/db");

// routes 
const productRouter = require("./Routes/product.routes");
const cartRouter = require('./Routes/cart.routes')
const categoryRouter = require("./Routes/category.routes");
const offerRoutes = require("./Routes/offer.routes");
const userRoutes = require("./Routes/user.routes");
const userOrderRouter = require("./Routes/userOrder.routes");
const searchRouter = require ('./Routes/search.routes')
// middleware
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(categoryRouter);
app.use("/product", productRouter);
app.use(cartRouter)
app.use("/offer", offerRoutes);
app.use("/users", userRoutes);
app.use("/order", userOrderRouter);
app.use(searchRouter);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./Views/index.html");
});

// handling route not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route Not Found",
  });
});

// handling server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something Broke",
  });
});

module.exports = app;
