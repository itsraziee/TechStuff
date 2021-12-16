const express = require("express");
const router = express.Router();
const techstuffController = require("../controllers/techstuffController");

/**
 * App Routes
 */

router.get("/", techstuffController.homepage);
router.get("/smartphone", techstuffController.smartphone);
router.get("/tablet", techstuffController.tablet);
router.get("/laptop", techstuffController.laptop);
router.get("/accessories", techstuffController.accessories);
router.get("/viewAll", techstuffController.viewAll);
router.get("/account", techstuffController.account);
router.get("/REGISTRATION", techstuffController.REGISTRATION);

router.get("/iPhone12", techstuffController.iPhone12);

module.exports = router;
