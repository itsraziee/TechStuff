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
router.get("/login", techstuffController.login);
router.get("/register", techstuffController.register);

router.get("/profile", techstuffController.profile);


// SMARTPHONES
router.get("/iPhone10", techstuffController.iPhone10);
router.get("/iPhone12", techstuffController.iPhone12);
router.get("/galaxynote20", techstuffController.galaxynote20);
router.get("/galaxys21ultra", techstuffController.galaxys21ultra);
router.get("/huaweip40pro", techstuffController.huaweip40pro);
router.get("/huaweiy7a", techstuffController.huaweiy7a);
router.get("/gtmaster", techstuffController.gtmaster);
router.get("/realme8pro", techstuffController.realme8pro);
router.get("/xiaomi11t", techstuffController.xiaomi11t);
router.get("/redminote10s", techstuffController.redminote10s);

// TABLETS
router.get("/iPadPro", techstuffController.iPadPro);
router.get("/iPad8", techstuffController.iPad8);
router.get("/iPadAir", techstuffController.iPadAir);
router.get("/iPadMini", techstuffController.iPadMini);
router.get("/SamsungGalaxyTabS7", techstuffController.SamsungGalaxyTabS7);
router.get("/SamsungGalaxyTabS5e", techstuffController.SamsungGalaxyTabS5e);
router.get("/HuaweiMatePad11", techstuffController.HuaweiMatePad11);
router.get("/HuaweiMatePadT10s", techstuffController.HuaweiMatePadT10s);
router.get("/RealmePad", techstuffController.RealmePad);
router.get("/xiaomiPad", techstuffController.xiaomiPad);

// LAPTOPS
router.get("/MacBookPro", techstuffController.MacBookPro);
router.get("/MacbookAir", techstuffController.MacbookAir);
router.get("/acerNitro7", techstuffController.acerNitro7);
router.get("/acerSwift7", techstuffController.acerSwift7);
router.get("/AsusStrix", techstuffController.AsusStrix);
router.get("/AsusROG", techstuffController.AsusROG);
router.get("/HPspectre", techstuffController.HPspectre);
router.get("/HPelite", techstuffController.HPelite);
router.get("/HuaweiD15", techstuffController.HuaweiD15);
router.get("/HuaweiXpro", techstuffController.HuaweiXpro);

// ACCESSORIES
router.get("/airPodsPro", techstuffController.airPodsPro);
router.get("/homePod", techstuffController.homePod);
router.get("/MagSafe", techstuffController.MagSafe);
router.get("/SamsungMouse", techstuffController.SamsungMouse);
router.get("/SamsungSpen", techstuffController.SamsungSpen);
router.get("/galaxyWatch4", techstuffController.galaxyWatch4);
router.get("/Scale3Pro", techstuffController.Scale3Pro);
router.get("/AppleKeyboard", techstuffController.AppleKeyboard);
router.get("/HuaweiKeyboard", techstuffController.HuaweiKeyboard);
router.get("/HuaweiPowerBank", techstuffController.HuaweiPowerBank);

module.exports = router;
