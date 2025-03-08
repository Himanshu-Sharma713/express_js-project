import express from "express";

const app = express();
const PORT = 3210;

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}/`);
});
