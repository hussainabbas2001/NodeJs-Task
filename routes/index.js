var express = require('express');
var router = express.Router();
var userdb = require("./users")
var taskdb = require("./task")

/* GET home page. */
router.get('/', function(req, res) {
  taskdb.find().then((taskdata)=>{
    userdb.find().then((val)=>{ 
      res.render("index", {users : val, taskdata : taskdata})
    })
  })
 
});

router.post("/createuser", function(req, res){
  userdb.create({
    name : req.body.name,
    email : req.body.email,
    Mobile : req.body.Mobile
  }).then((val)=>{
    res.redirect("/")
  })
})

router.post("/createtask", function(req, res){
  taskdb.create({
    user: req.body.uname,
    taskname: req.body.tname,
    tasktype: req.body.ttype
  }).then((data)=>{
    res.redirect("/")
  })
})

router.get("/delete", function(req, res){
  taskdb.deleteMany().then(()=>{
    res.send("deleted")
  })
})


module.exports = router;
