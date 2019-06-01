var express = require('express');
var router = express.Router();
var deckController = require('../controllers/decksController');

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/getAll', deckController.getAll);
router.post('/getByID/:id', deckController.getByID);
router.get('/deleteDeck/:id', deckController.deleteDeck);
router.put('/updateDeck/:id', deckController.updateDeck);

module.exports = router;