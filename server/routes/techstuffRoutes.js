const express = require("express");
const router = express.Router();
const techstuffController = require("../controllers/techstuffController");
const accountAPIRouter = require("../API/account");
const productAPIRouter = require("../API/product");
const axios = require("axios");
/**
 * App Routes
 */
router.use("/API/account", accountAPIRouter);
router.use("/API/product", productAPIRouter);

router.get("/", techstuffController.homepage);
router.get("/category/smartphone", techstuffController.smartphone);
router.get("/category/tablet", techstuffController.tablet);
router.get("/category/laptop", techstuffController.laptop);
router.get("/category/accessories", techstuffController.accessories);
router.get("/viewAll", techstuffController.viewAll);
router.get("/account", techstuffController.account);
router.get("/login", techstuffController.login);
router.get("/register", techstuffController.register);
router.get("/cart", techstuffController.cart);
router.get("/profile", techstuffController.profile);
router.get("/addProduct", techstuffController.addProduct);
router.get("/product/:id", async (req, res) => {
  await axios
    .get(`http://localhost:3000/API/product/${req.params.id}`)
    .then((response) => {
      const product = response.data;
      console.log(product.price.$numberDecimal);
      res.render("productPage", {
        title: "TechStuff",
        product: product,
        category: `/category/${product.category}`,
      });
    });
});
router.delete("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = router;
