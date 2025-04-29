const express = require("express");
const cors = require("cors");
const userRoutes = require("./users"); // no routes folder

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes); // Register the router

module.exports = app;
