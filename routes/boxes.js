var express = require('express');
var router = express.Router();
var boxesController = require('../controllers/boxesController');

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/getAll', boxesController.getAll);
router.post('/getByID/:id', boxesController.getByID);
router.get('/deleteBox/:id', boxesController.deleteBox);
router.put('/updateBox/:id', boxesController.updateBox);

module.exports = router;