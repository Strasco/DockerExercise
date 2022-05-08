const express = require("express");
const app = express();
const Item = require("./models/Item");
const faker = require("faker");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo:27017/docker-node-mongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// app.get("/", (req, res) => {
//   res.json({ message: "Docker is fun 🐳 " });

app.get("/", async (req, res) => {
  const items = await Item.find();
  res.json({ items: items });
  console.log(error);
});

app.post("/", async (req, res) => {
  const item = await Item.create({ name: faker.address.city() });
  res.status(200).json({ status: 200, message: "item added!" });
});

const port = process.env.PORT || 5000;

app.listen(port, "0.0.0.0", () => {
  console.log(`App listening on port ${port}!`);
});
