const axios = require("axios");

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
    res.render("account", { title: "TechStuff", account: req.user });
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
