var express = require('express');
var router = express.Router();
var cardsController = require('../controllers/cardsController');

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/getAll', cardsController.getAll);
router.post('/getByID/:id', cardsController.getByID);
router.get('/deleteCard/:id', cardsController.deleteCard);
router.put('/updateCard/:id', cardsController.updateCard);
router.put('/respuestaCard/:id/:rpta', cardsController.updateCard);

module.exports = router;