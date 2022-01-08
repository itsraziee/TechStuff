const express = require("express");
const router = express.Router();
const Product = require("../models/product");

//CREATE
router.post("/", async (req, res) => {
  const product = new Product({
    imageURL: req.body.imageURL,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
  });
  await product
    .save()
    .then(() => {
      console.log("Product created successfully.");
      res.json(product);
    })
    .catch((err) => {
      console.log("Error creating product: " + err);
    });
});

//READ
router.get("/category/:category", async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  res.json(products);
});

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//UPDATE
router.patch("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  product.imageURL = req.body.imageURL ? req.body.imageURL : product.imageURL;
  product.name = req.body.name ? req.body.name : product.name;
  product.price = req.body.price ? req.body.price : product.price;
  product.description = req.body.description
    ? req.body.description
    : product.description;
  product.category = req.body.category ? req.body.category : product.category;

  await product
    .save()
    .then(() => {
      console.log("Product updated successfully.");
      res.json(product);
    })
    .catch((err) => {
      console.log("Error updating product: " + err);
    });
});

//DELETE
router.delete("/:id", async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  res.json(product);
});

module.exports = router;
