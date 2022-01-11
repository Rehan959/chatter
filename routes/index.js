var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/chat',(req,res)=>{
  let name = req.body.name;
  console.log(name)
  res.render('chat', {name})
})

module.exports = router;
