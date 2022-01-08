const express = require("express");
const router = express.Router();
const Account = require("../models/account");

//CREATE
router.post("/", async (req, res) => {
  const account = new Account({
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
    password: req.body.password,
  });
  await account
    .save()
    .then(() => {
      console.log("Account created successfully.");
      res.json(account);
    })
    .catch((err) => {
      console.log("Error creating account: " + err);
    });
});

//READ
router.get("/id/:id", async (req, res) => {
  const account = await Account.findById(req.params.id);
  res.json(account);
});

router.get("/email/:email", async (req, res) => {
  const account = await Account.findOne({ email: req.params.email });
  res.json(account);
});

//UPDATE
router.patch("/:id", async (req, res) => {
  const account = await Account.findById(req.params.id);
  account.firstname = req.body.firstname
    ? req.body.firstname
    : account.firstname;
  account.middlename = req.body.middlename
    ? req.body.middlename
    : account.middlename;
  account.lastname = req.body.lastname ? req.body.lastname : account.lastname;
  account.email = req.body.email ? req.body.email : account.email;
  account.phone = req.body.phone ? req.body.phone : account.phone;
  account.street = req.body.street ? req.body.street : account.street;
  account.brgy = req.body.brgy ? req.body.brgy : account.brgy;
  account.mn = req.body.mn ? req.body.mn : account.mn;
  account.prov = req.body.prov ? req.body.prov : account.prov;
  account.gender = req.body.gender ? req.body.gender : account.gender;
  account.password = req.body.password ? req.body.password : account.password;

  await account
    .save()
    .then(() => {
      console.log("Account updated successfully.");
      res.json(account);
    })
    .catch((err) => {
      console.log("Error updating account: " + err);
    });
});

//DELETE
router.delete("/:id", async (req, res) => {
  const account = await Account.findByIdAndDelete(req.params.id);
  res.json(account);
});

module.exports = router;
