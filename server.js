const express = require("express");
const path = require("path");
const connectDB = require("./controllers/connect_db");

const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());
const passport = require("passport");

app.use(express.json());
// app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

//! connect to databse
connectDB();

require("./controllers/auth")(passport);

app.get("/api", (req, res) => {
  res.json({ msg: "test1" });
});

app.use("/api/register", require("./routes/register"));
app.use("/api/login", require("./routes/login"));
app.use("/api/2fa", require("./routes/2fa"));
// THIS ROUTE IS NOT USED IN THE APP, JUST A SAMPLE JWT VERIFICATION
app.use("/api/token", require("./routes/tokenVerification"));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor funcionando en ${PORT}`));
