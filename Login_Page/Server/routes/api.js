const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const UserDetails = require("../models/userdetails");
const RegularEvents = require("../models/regularevents");
const SpecialEvents = require("../models/specialevents");
const db =
  "mongodb://admin:Karan0201@ds245250.mlab.com:45250/userinformationdb";
mongoose.Promise = global.Promise;

//Connecting to Mongoose
mongoose.connect(db, function(err) {
  if (err) {
    console.error("Error! " + err);
  } else {
    console.log("Connected to mongodb");
  }
});

router.get("/regularEvents", (req, res, next) => {
  RegularEvents.find(function(error, revents) {
    if (error) {
      res.json(error);
    } else {
      res.json(revents);
    }
  });
});

router.get("/specialEvents", (req, res, next) => {
  SpecialEvents.find(function(error, sevents) {
    if (error) {
      res.json(error);
    } else {
      res.json(sevents);
    }
  });
});

//API for Register New User
router.post("/register", (req, res, next) => {
  let userData = req.body;
  let userDetails = new UserDetails(userData);
  userDetails.save((error, registeredUser) => {
    if (error) {
      res.json(error);
    } else {
      res.status(200).send(registeredUser);
    }
  });
});

//API for Login
router.post("/login", (req, res) => {
  let userData = req.body;
  UserDetails.findOne({ userName: userData.userName }, (error, userDetails) => {
    if (error) {
      res.json(error);
    } else {
      if (!userDetails) {
        res.status(401).send("Invalid User Name");
      } else {
        if (userDetails.email !== userData.email) {
          res.status(401).send("Invalid Email address");
        } else if (userDetails.password !== userData.password) {
          res.status(401).send("Invalid Password");
        } else {
          res.status(200).json("User Login Successfull...!");
        }
      }
    }
  });
});
module.exports = router;
