const express = require("express");
const expresLayouts = require("express-ejs-layouts");
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const axios = require("axios");

require("dotenv").config(); //storing database details

//Database
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected");
});

const app = express();
const port = process.env.PORT || 3000; //process.env.PORT is when you are uploading your code to somewhere

//for login
const initializePassport = require("./server/controllers/passport-config");
initializePassport(
  passport,
  async (email) => {
    var user = null;
    await axios
      .get(`http://localhost:3000/API/account/email/${email}`)
      .then((response) => {
        user = response.data;
      });
    return user;
  },
  async (id) => {
    var user = null;
    await axios
      .get(`http://localhost:3000/API/account/id/${id}`)
      .then((response) => {
        user = response.data;
      });
    return user;
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(expresLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

const routes = require("./server/routes/techstuffRoutes.js");
app.use("/", routes);

//Sign-in
app.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

//Sign-up
app.post("/register", checkNotAuthenticated, async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  await axios
    .post("http://localhost:3000/API/account", {
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      street: req.body.street,
      brgy: req.body.brgy,
      mn: req.body.mn,
      prov: req.body.prov,
      gender: req.body.gender,
      password: hashedPassword,
    })
    .then((response) => {
      console.log(response.data);
      res.redirect("/login");
    })
    .catch((err) => {
      console.log(err);
    });
});

//LOGOUT
app.delete("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

//MIDDLEWARE
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

app.listen(port, () => console.log(`Listening to port ${port}`));

