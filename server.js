const express = require("express");
const mongoose = require("mongoose");
const app = express();


/*connexion DB with server*/
const mongoURI =
  "mongodb+srv://med_chmingui:lapulga19@cluster0.hkgym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoURI, (err) => {
  err ? console.log(err) : console.log("database is connected");
});


/*parse the data*/
app.use(express.json());
app.use("/person", require("./routers/Router"));


const port = 5000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log("server is running on port", port);
});
