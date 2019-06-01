var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userController');

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login/:username/:pass', UserController.login);
router.post('/getAll', UserController.getAll);
router.post('/getByID/:id', UserController.getByID);
router.get('/deleteUser/:id', UserController.deleteUser);
router.put('/updateUser/:id', UserController.updateUser);

module.exports = router;