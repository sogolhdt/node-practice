const fs = require('fs');
const user = require('../models/userModel');
const md5 = require('md5');
const userAPI = require('./../utils/userAPI');



exports.getUser = async (req, res) => {
  try {
    // const tour = await Tour.findById(req.params.id);
    const userId = await user.find({
      'mobile': req.params.id
    }, {
      'is_blocked': req.params.id
    });
    // db.tours.find({$or:[{price:500} , rate:{$gte:4.8}]},{name:"1"})
    // const userMobile = await user.find({mobile : req.params.id});
    // if(userId.is_blocked){
    if (userId[0].is_blocked == 0) {
      res.status(200).json({
        status: 'success',
        data: {
          userId
        }
      });
    } else {
      res.status(401).json({
        status: 'the user is blocked',
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};
exports.signup = async (req, res) => {
  try {
    const API = new userAPI(user, req.body)
      .signup();
    const code = await API.query;
    const api = await API;
    console.log(api);
    console.log(code);
    res.status(200).json({
      status: 'success',
      data: {

      }

    });
  }
  catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.userValidationWithCode = async (req, res) => {
  try {
    const API = new userAPI(user, req.body)
      .userValidationWithCode();
    const token = API.token;
    const message = API.message;
    res.status(200).json({
      status: 'success',
      message: message,
      data: {
        token
      }
    });


  }
  catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};
exports.setPassword = async (req, res) => {
  try {
    const s = { ...req.query };
    console.log(s);
    const theUser = await user.find({ token: req.body.token });
    if (theUser[0]) {
      console.log(theUser);
      var myquery = { token: req.body.token };
      var newvalues = { password: req.body.password };
      const newPasswordSet = user.updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
      });

      res.status(200).json({
        status: 'success',
        message: 'Your password is set',
      });
    } else {
      res.status(200).json({
        status: 'failed',
        message: 'no users found',
      });
    }

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};