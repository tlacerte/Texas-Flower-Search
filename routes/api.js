var express = require('express');
var router = express.Router();
var flowersCtrl = require('../controllers/api');

router.get('/flowers', flowersCtrl.index);
router.get('/flowers/:id', flowersCtrl.show);
router.post('/flowers', flowersCtrl.create);
router.delete('/flowers/:id', flowersCtrl.delete);
router.put('/flowers/:id', flowersCtrl.update);

module.exports = router;