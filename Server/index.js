const express = require("express");
const DBConfig = require("./Config/db.config");
const app = express();
const port = 5100;

DBConfig();
app.use(express.json());


app.get("/", (req, res) => {
  res.json({
    name: "Ashiqul Islam",
    email: "ashiq@gmail.com",
  });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});