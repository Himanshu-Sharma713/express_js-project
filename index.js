// import files / folder
import express from "express";
import path from "node:path";
import fs from "node:fs";

// create metods
const app = express();
const PORT = 3210;

// set methods
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(import.meta.dirname, "public")));

// route
app.get("/", (req, res) => {
  
  res.render("index");
});

// create server rendering
app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}/`);
});
