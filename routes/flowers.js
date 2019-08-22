var express = require('express');
var router = express.Router();
var flowersCtrl = require('../controllers/flowers');

router.get('/', flowersCtrl.index);
router.get('/new', flowersCtrl.new);
 
module.exports = router;