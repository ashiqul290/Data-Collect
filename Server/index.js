const express = require("express");
const DBConfig = require("./Config/db.config");
const router = require("./api/data");
const app = express();
const port = 5100;

DBConfig();
app.use(express.json());

app.use("/api", router);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});