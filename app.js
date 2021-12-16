const express = require('express');
const expresLayouts = require('express-ejs-layouts');
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");

const app = express();
const port = process.env.PORT || 3000; //process.env.PORT is when you are uploading your code to somewhere
const initializePassport = require("./server/controllers/passport-config");
initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

const users = [];

 require('dotenv').config(); //storing database details

app.use(express.urlencoded( { extended: true} )); 
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
app.use(express.static('public'));
app.use(expresLayouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/techstuffRoutes.js');
app.use('/', routes);

//HOME
app.get("/", checkAuthenticated, (req, res) => {
    res.render("home.ejs");
  });
  
  //LOGIN
  app.get("/login", checkNotAuthenticated, (req, res) => {
    res.render("login.ejs");
  });
  
  app.post(
    "/login",
    checkNotAuthenticated,
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true,
    })
  );
//REGISTER
app.get("/register", checkNotAuthenticated, (req, res) => {
    res.render("register.ejs");
  });
  
  app.post("/register", checkNotAuthenticated, async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      users.push({
        id: Date.now().toString(),
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
      });
      res.redirect("/login");
    } catch {
      res.redirect("/register");
    }
  });

  //VIEW ALL
app.get("/account", checkAuthenticated, (req, res) => {
  res.render("account.ejs");
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
//app.listen(3000);


//SMARTPHONE
app.get("/smartphone", checkAuthenticated, (req, res) => {
  res.render("smartphone.ejs");
});

//TABLET
app.get("/tablet", checkAuthenticated, (req, res) => {
  res.render("tablet.ejs");
});

//LAPTOP
app.get("/laptop", checkAuthenticated, (req, res) => {
  res.render("laptop.ejs");
});

//ACCESSORIES
app.get("/accessories", checkAuthenticated, (req, res) => {
  res.render("accessories.ejs");
});

//VIEW ALL
app.get("/viewAll", checkAuthenticated, (req, res) => {
  res.render("viewAll.ejs");
});

//REGISTRATON
app.get("/REGISTRATION", checkAuthenticated, (req, res) => {
  res.render("REGISTRATION.ejs");
});

              //SMARTPHONE DESCRIPTION

//iPhone 12 Pro
app.get("/iPhone12", checkNotAuthenticated, (req, res) => {
  res.render("iPhone12.ejs");
});

              //TABLET DESCRIPTION

//iPad Pro
app.get("/iPadPro", checkNotAuthenticated, (req, res) => {
  res.render("iPadPro.ejs");
});
//iPad 8
app.get("/iPad8", checkNotAuthenticated, (req, res) => {
  res.render("iPad8.ejs");
});
//iPad Air
app.get("/iPadAir", checkNotAuthenticated, (req, res) => {
  res.render("iPadAir.ejs");
});
//iPad Mini
app.get("/iPadMini", checkNotAuthenticated, (req, res) => {
  res.render("iPadMini.ejs");
});
//Samsung Galaxy Tab S7+
app.get("/SamsungGalaxyTabS7", checkNotAuthenticated, (req, res) => {
  res.render("SamsungGalaxyTabS7.ejs");
});
//Samsung Galaxy Tab S5e
app.get("/SamsungGalaxyTabS5e", checkNotAuthenticated, (req, res) => {
  res.render("SamsungGalaxyTabS5e.ejs");
});
//Huawei MatePad 11
app.get("/HuaweiMatePad11", checkNotAuthenticated, (req, res) => {
  res.render("HuaweiMatePad11.ejs");
});
//Huawei MatePad T 10s
app.get("/HuaweiMatePadT10s", checkNotAuthenticated, (req, res) => {
  res.render("HuaweiMatePadT10s.ejs");
});
//Realme Pad
app.get("/RealmePad", checkNotAuthenticated, (req, res) => {
  res.render("RealmePad.ejs");
});
