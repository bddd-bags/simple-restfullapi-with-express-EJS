const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/router");

require("dotenv").config();

app.set("view engine", "ejs");

app.use(require("express-ejs-layouts"));

// json parser && urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(router);

app.listen(port, () =>
  console.log(`Server anda berhasil dijalankan di http://localhost:${port}`)
);
