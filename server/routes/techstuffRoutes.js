const express = require('express');
const router = express.Router();
const techstuffController = require('../controllers/techstuffController');

/**
 * App Routes
 */

router.get('/', techstuffController.homepage);
router.get('/smartphone', techstuffController.smartphone);
router.get('/tablet', techstuffController.tablet);
router.get('/laptop', techstuffController.laptop);
router.get('/accessories', techstuffController.accessories);
router.get('/viewAll', techstuffController.viewAll);
router.get('/account', techstuffController.account);
router.get('/REGISTRATION', techstuffController.REGISTRATION);

router.get('/iPhone12', techstuffController.iPhone12);


router.get('/iPadPro', techstuffController.iPadPro);
router.get('/iPad8', techstuffController.iPad8);
router.get('/iPadAir', techstuffController.iPadAir);
router.get('/iPadMini', techstuffController.iPadMini);
router.get('/SamsungGalaxyTabS7', techstuffController.SamsungGalaxyTabS7);
router.get('/SamsungGalaxyTabS5e', techstuffController.SamsungGalaxyTabS5e);
router.get('/HuaweiMatePad11', techstuffController.HuaweiMatePad11);
router.get('/HuaweiMatePadT10s', techstuffController.HuaweiMatePadT10s);
router.get('/RealmePad', techstuffController.RealmePad);

module.exports = router;
