/*************************************************************************************************************************/
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/movieDb');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
 if (err) {
   console.log(err);
 } else {
   console.log('meow');
 }
});
/**************************************************************************************************************************/

var express = require('express');
var router = express.Router();

router.post('/add/:id', function (req, res) {
  res.send(req.params);
});

router.delete('/delete', function (req, res) {
  res.send('delete');
});

router.put('/update', function (req, res) {
  res.send('update');
});

router.get('/find', function (req, res) {
  res.send('find');
});

module.exports = router;
