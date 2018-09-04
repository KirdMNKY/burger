var express = require("express");

var burger = require("./models/burger.js");

var router = new express.Router();

router.get("/burgers", function(req, res){
  const query = `SELECT * FROM burgers`;
  connection.query(query, function(err, result){
    console.log(err);
    console.log(result);
    res.send(renderResults(result, "burgers by Id"));
  })
})


module.exports = router;