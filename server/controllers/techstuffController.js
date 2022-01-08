const axios = require("axios");
/**
 * GET /
 * Homepage
 */
exports.homepage = async (req, res) => {
  res.render("index", { title: "TechStuff" });
};

exports.smartphone = async (req, res) => {
  await axios
    .get("http://localhost:3000/API/product/category/smartphone")
    .then((response) => {
      res.render("smartphone", { title: "TechStuff", products: response.data });
    });
};

exports.tablet = async (req, res) => {
  await axios
    .get("http://localhost:3000/API/product/category/tablet")
    .then((response) => {
      res.render("tablet", { title: "TechStuff", products: response.data });
    });
};

exports.laptop = async (req, res) => {
  await axios
    .get("http://localhost:3000/API/product/category/laptop")
    .then((response) => {
      res.render("laptop", { title: "TechStuff", products: response.data });
    });
};

exports.accessories = async (req, res) => {
  await axios
    .get("http://localhost:3000/API/product/category/accessories")
    .then((response) => {
      res.render("accessories", {
        title: "TechStuff",
        products: response.data,
      });
    });
};

exports.viewAll = async (req, res) => {
  await axios.get("http://localhost:3000/API/product").then((response) => {
    res.render("viewAll", { title: "TechStuff", products: response.data });
  });
};

exports.account = async (req, res) => {
  res.render("account", { title: "TechStuff" });
};

exports.register = async (req, res) => {
  res.render("register", { title: "TechStuff" });
};

exports.login = async (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("/account");
  } else {
    res.render("login", { title: "TechStuff" });
  }
};

exports.account = async (req, res) => {
  if (req.isAuthenticated()) {
    res.render("account", { title: "TechStuff" });
  } else {
    res.redirect("/login");
  }
};

exports.cart = async (req, res) => {
  res.render("cart", { title: "Techstuff" });
};

exports.profile = async (req, res) => {
  res.render("profile", { title: "TechStuff" });
};

exports.addProduct = async (req, res) => {
  res.render("addProduct", { title: "TechStuff" });
};

/**
 * GET /
 * Smartphones
 */
//iPhone XS Max
exports.iPhone10 = async (req, res) => {
  res.render("iPhone10", { title: "TechStuff" });
};
//iPhone 12 Pro Max
exports.iPhone12 = async (req, res) => {
  res.render("iPhone12", { title: "TechStuff" });
};
//Samsung Galaxy Note20 5G
exports.galaxynote20 = async (req, res) => {
  res.render("galaxynote20", { title: "TechStuff" });
};
//Samsung Galaxy S21 Ultra 5G
exports.galaxys21ultra = async (req, res) => {
  res.render("galaxys21ultra", { title: "TechStuff" });
};
//Huawei P40 Pro
exports.huaweip40pro = async (req, res) => {
  res.render("huaweip40pro", { title: "TechStuff" });
};
//Huawei Y7a
exports.huaweiy7a = async (req, res) => {
  res.render("huaweiy7a", { title: "TechStuff" });
};
//Realme GT Master Edition
exports.gtmaster = async (req, res) => {
  res.render("gtmaster", { title: "TechStuff" });
};
//Realme 8 Pro
exports.realme8pro = async (req, res) => {
  res.render("realme8pro", { title: "TechStuff" });
};
//Xiaomi 11T
exports.xiaomi11t = async (req, res) => {
  res.render("xiaomi11t", { title: "TechStuff" });
};
//Xiaomi Redmi Note 10s
exports.redminote10s = async (req, res) => {
  res.render("redminote10s", { title: "TechStuff" });
};

/**
 * GET /
 * Tablets
 */
//iPad Pro
exports.iPadPro = async (req, res) => {
  res.render("iPadPro", { title: "TechStuff" });
};
//iPad 8th Gen
exports.iPad8 = async (req, res) => {
  res.render("iPad8", { title: "TechStuff" });
};
//iPad Air
exports.iPadAir = async (req, res) => {
  res.render("iPadAir", { title: "TechStuff" });
};
//iPad mini 6th Gen
exports.iPadMini = async (req, res) => {
  res.render("iPadMini", { title: "TechStuff" });
};
//Samsung Galaxy Tab S7+
exports.SamsungGalaxyTabS7 = async (req, res) => {
  res.render("SamsungGalaxyTabS7", { title: "TechStuff" });
};
//Samsung Galaxy Tab S5e
exports.SamsungGalaxyTabS5e = async (req, res) => {
  res.render("SamsungGalaxyTabS5e", { title: "TechStuff" });
};
//Huawei MatePad 11
exports.HuaweiMatePad11 = async (req, res) => {
  res.render("HuaweiMatePad11", { title: "TechStuff" });
};
//Huawei MatePad T 10s
exports.HuaweiMatePadT10s = async (req, res) => {
  res.render("HuaweiMatePadT10s", { title: "TechStuff" });
};
//Realme Pad
exports.RealmePad = async (req, res) => {
  res.render("RealmePad", { title: "TechStuff" });
};
//Xiaomi Pad 5
exports.xiaomiPad = async (req, res) => {
  res.render("xiaomiPad", { title: "TechStuff" });
};

/**
 * GET /
 * Laptops
 */
//MacBook Pro 13
exports.MacBookPro = async (req, res) => {
  res.render("MacBookPro", { title: "TechStuff" });
};
//MacBook Air (M1)
exports.MacbookAir = async (req, res) => {
  res.render("MacbookAir", { title: "TechStuff" });
};
//Acer Nitro 7
exports.acerNitro7 = async (req, res) => {
  res.render("acerNitro7", { title: "TechStuff" });
};
//Acer Swift 7
exports.acerSwift7 = async (req, res) => {
  res.render("acerSwift7", { title: "TechStuff" });
};
//Asus ROG Strix G15 G512LV-AZ042T
exports.AsusStrix = async (req, res) => {
  res.render("AsusStrix", { title: "TechStuff" });
};
//Asus ROG GL502VM
exports.AsusROG = async (req, res) => {
  res.render("AsusROG", { title: "TechStuff" });
};
//HP Spectre x360
exports.HPspectre = async (req, res) => {
  res.render("HPspectre", { title: "TechStuff" });
};
//HP Elite x2 G4
exports.HPelite = async (req, res) => {
  res.render("HPelite", { title: "TechStuff" });
};
//Huawei MateBook D 15
exports.HuaweiD15 = async (req, res) => {
  res.render("HuaweiD15", { title: "TechStuff" });
};
//Huawei MateBook X Pro 2021
exports.HuaweiXpro = async (req, res) => {
  res.render("HuaweiXpro", { title: "TechStuff" });
};

/**
 * GET /
 * Accessories
 */
//AirPods Pro
exports.airPodsPro = async (req, res) => {
  res.render("airPodsPro", { title: "TechStuff" });
};
//HomePod mini
exports.homePod = async (req, res) => {
  res.render("homePod", { title: "TechStuff" });
};
//Apple MagSafe Charger
exports.MagSafe = async (req, res) => {
  res.render("MagSafe", { title: "TechStuff" });
};
//Samsung Bluetooth Mouse Slim
exports.SamsungMouse = async (req, res) => {
  res.render("SamsungMouse", { title: "TechStuff" });
};
//Samsung S Pen Fold Edition
exports.SamsungSpen = async (req, res) => {
  res.render("SamsungSpen", { title: "TechStuff" });
};
//Samsung Galaxy Watch4
exports.galaxyWatch4 = async (req, res) => {
  res.render("galaxyWatch4", { title: "TechStuff" });
};
//Huawei Scale 3 Pro
exports.Scale3Pro = async (req, res) => {
  res.render("Scale3Pro", { title: "TechStuff" });
};
//Apple Magic Keyboard
exports.AppleKeyboard = async (req, res) => {
  res.render("AppleKeyboard", { title: "TechStuff" });
};
//Huawei Smart Keyboard
exports.HuaweiKeyboard = async (req, res) => {
  res.render("HuaweiKeyboard", { title: "TechStuff" });
};
//Huawei 6700 mAh Power Bank
exports.HuaweiPowerBank = async (req, res) => {
  res.render("HuaweiPowerBank", { title: "TechStuff" });
};
