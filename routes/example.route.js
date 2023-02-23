const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => {
  
    console.log(req.timeStamp);
    console.log(req.body);
    res.send('Hello World!')
  })
  
  router.post('/', (req, res) => {
    res.send('Hello World! desde el post')
  })
  
  router.put('/', (req, res) => {
    res.send('Hello World! desde el put')
  })
  
  router.delete('/', (req, res) => {
    res.send('Hello World! desde el delete') 
  })


  module.exports = router;