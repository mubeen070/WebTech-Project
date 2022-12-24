import express from "express";
import equipment from "./routes/equipment.js";
import material from "./routes/material.js";
import home from './routes/home.js'
import about from "./routes/about.js";
import cart from "./routes/cart.js";
import login from "./routes/login.js"
import signup from "./routes/signup.js"
const app = express();

app.use("/", home);
app.use("/", signup);
app.use("/", login);
app.use("/equipment", equipment);
app.use("/material", material);
app.use("/", cart);
app.use("/", about);
app.listen(3000);
console.log("Listening...");
