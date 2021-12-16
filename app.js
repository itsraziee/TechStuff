const express = require("express");
const expresLayouts = require("express-ejs-layouts");
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

require("dotenv").config(); //storing database details

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

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

const routes = require("./server/routes/techstuffRoutes.js");
app.use("/", routes);

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

////SMARTPHONE DESCRIPTION
//iPhone XS Max
app.get("/iPhone10", checkNotAuthenticated, (req, res) => {
  res.render("iPhone10.ejs");
});
//iPhone 12 Pro Max
app.get("/iPhone12", checkNotAuthenticated, (req, res) => {
  res.render("iPhone12.ejs");
});
//Samsung Galaxy Note20 5G
app.get("/galaxynote20", checkNotAuthenticated, (req, res) => {
  res.render("galaxynote20.ejs");
});
//Samsung Galaxy S21 Ultra 5G
app.get("/galaxys21ultra", checkNotAuthenticated, (req, res) => {
  res.render("galaxys21ultra.ejs");
});
//Huawei P40 Pro
app.get("/huaweip40pro", checkNotAuthenticated, (req, res) => {
  res.render("huaweip40pro.ejs");
});
//Huawei Y7a
app.get("/huaweiy7a", checkNotAuthenticated, (req, res) => {
  res.render("huaweiy7a.ejs");
});
//Realme GT Master Edition
app.get("/gtmaster", checkNotAuthenticated, (req, res) => {
  res.render("gtmaster.ejs");
});
//Realme 8 Pro
app.get("/realme8pro", checkNotAuthenticated, (req, res) => {
  res.render("realme8pro.ejs");
});
//Xiaomi 11T
app.get("/xiaomi11t", checkNotAuthenticated, (req, res) => {
  res.render("xiaomi11t.ejs");
});
//Xiaomi Redmi Note 10s
app.get("/redminote10s", checkNotAuthenticated, (req, res) => {
  res.render("redminote10s.ejs");
});

////TABLET DESCRIPTION
//iPad Pro
app.get("/iPadPro ", checkNotAuthenticated, (req, res) => {
  res.render("iPadPro .ejs");
});
//iPad 8th Gen
app.get("/iPad8", checkNotAuthenticated, (req, res) => {
  res.render("iPad8.ejs");
});
//iPad Air
app.get("/iPadAir", checkNotAuthenticated, (req, res) => {
  res.render("iPadAir.ejs");
});
//iPad mini 6th Gen
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
//Xiaomi Pad 5
app.get("/xiaomiPad", checkNotAuthenticated, (req, res) => {
  res.render("xiaomiPad.ejs");
});

////LAPTOP DESCRIPTION
//MacBook Pro 13
app.get("/MacBookPro", checkNotAuthenticated, (req, res) => {
  res.render("MacBookPro.ejs");
});
//MacBook Air (M1)
app.get("/MacbookAir", checkNotAuthenticated, (req, res) => {
  res.render("MacbookAir.ejs");
});
//Acer Nitro 7
app.get("/acerNitro7", checkNotAuthenticated, (req, res) => {
  res.render("acerNitro7.ejs");
});
//Acer Swift 7
app.get("/acerSwift7", checkNotAuthenticated, (req, res) => {
  res.render("acerSwift7.ejs");
});
//Asus ROG Strix G15 G512LV-AZ042T
app.get("/AsusStrix", checkNotAuthenticated, (req, res) => {
  res.render("AsusStrix.ejs");
});
//Asus ROG GL502VM
app.get("/AsusROG", checkNotAuthenticated, (req, res) => {
  res.render("AsusROG.ejs");
});
//HP Spectre x360
app.get("/HPspectre", checkNotAuthenticated, (req, res) => {
  res.render("HPspectre.ejs");
});
//HP Elite x2 G4
app.get("/HPelite", checkNotAuthenticated, (req, res) => {
  res.render("HPelite.ejs");
});
//Huawei MateBook D 15
app.get("/HuaweiD15", checkNotAuthenticated, (req, res) => {
  res.render("HuaweiD15.ejs");
});
//Huawei MateBook X Pro 2021
app.get("/HuaweiXpro", checkNotAuthenticated, (req, res) => {
  res.render("HuaweiXpro.ejs");
});


////ACCESSORIES DESCRIPTION
//AirPods Pro
app.get("/airPodsPro", checkNotAuthenticated, (req, res) => {
  res.render("airPodsPro.ejs");
});
//HomePod mini
app.get("/homePod", checkNotAuthenticated, (req, res) => {
  res.render("homePod.ejs");
});
//Apple MagSafe Charger
app.get("/MagSafe", checkNotAuthenticated, (req, res) => {
  res.render("MagSafe.ejs");
});
//Samsung Bluetooth Mouse Slim
app.get("/SamsungMouse", checkNotAuthenticated, (req, res) => {
  res.render("SamsungMouse.ejs");
});
//Samsung S Pen Fold Edition
app.get("/SamsungSpen", checkNotAuthenticated, (req, res) => {
  res.render("SamsungSpen.ejs");
});
//Samsung Galaxy Watch4
app.get("/galaxyWatch4", checkNotAuthenticated, (req, res) => {
  res.render("galaxyWatch4.ejs");
});
//Huawei Scale 3 Pro
app.get("/Scale3Pro", checkNotAuthenticated, (req, res) => {
  res.render("Scale3Pro.ejs");
});
//Apple Magic Keyboard
app.get("/AppleKeyboard", checkNotAuthenticated, (req, res) => {
  res.render("AppleKeyboard.ejs");
});
//Huawei Smart Keyboard
app.get("/HuaweiKeyboard", checkNotAuthenticated, (req, res) => {
  res.render("HuaweiKeyboard.ejs");
});
//Huawei 6700 mAh Power Bank
app.get("/HuaweiPowerBank", checkNotAuthenticated, (req, res) => {
  res.render("HuaweiPowerBank.ejs");
});
