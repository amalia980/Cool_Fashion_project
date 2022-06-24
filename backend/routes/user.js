const express = require('express')
const userRouter = express.Router()
const passport = require('passport')
const passportConfig = require('../passport')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

require('dotenv').config()

const signToken = (userId) => {
  return jwt.sign(
    {
      iss: 'FridaBolin',
      sub: userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: 60 * 60 * 24,
    },
  )
}

userRouter.post('/register', (req, res) => {
  const { username, password, role } = req.body
  User.findOne({ username }, (err, user) => {
    if (err) {
      res
        .status(500)
        .json({ msg: { msgBody: 'An error occurred', msgError: true } })
    }
    if (user) {
      res
        .status(400)
        .json({ msg: { msgBody: 'Username already taken', msgError: true } })
    } else {
      const newUser = new User({ username, password, role })
      newUser.save((err) => {
        if (err) {
          res
            .status(500)
            .json({ msg: { msgBody: 'An error occurred', msgError: true } })
        } else {
          res.status(201).json({
            msg: { msgBody: 'Account successfully created', msgError: false },
          })
        }
      })
    }
  })
})

userRouter.post(
  '/login',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const { _id, username, role } = req.user
      const token = signToken(_id)
      res.cookie('access-token', token, { httpOnly: true, sameSite: true })
      res.status(200).json({
        isAuthenticated: true,
        user: { _id, username, role },
        msg: { msgBody: 'Successfully logged in', msgError: false },
      })
    }
  },
)

userRouter.get(
  '/authenticated',
  passport.authenticate('user-rule', { session: false }),
  (req, res) => {
    const {
      _id,
      username,
      role,
      firstname,
      lastname,
      email,
      telephone,
      address,
      city,
      zipcode,
    } = req.user
    res.status(200).json({
      isAuthenticated: true,
      user: {
        _id,
        username,
        role,
        firstname,
        lastname,
        email,
        telephone,
        address,
        city,
        zipcode,
      },
    })
  },
)

userRouter.get('/getUsers', (req, res) => {
  User.find({}, (err, documents) => {
    if (err) {
      res.status(500).json({
        msg: {
          msgBody: 'An error occured while retrieving users',
          msgError: true,
        },
      })
    } else {
      res.status(200).json({ user: documents })
    }
  })
})

userRouter.get('/getOneUser/:id', (req, res) => {
  User.findById({ _id: req.params.id }, (err, documents) => {
    if (err) {
      res.status(500).json({
        msg: {
          msgBody: 'An error occured while retrieving your user',
          msgError: true,
        },
      })
    } else {
      res.status(200).json({ user: documents })
    }
  })
})

userRouter.delete('/deleteUser/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.status(500).json({
        msg: {
          msgBody: 'An error occured while deleting user',
          msgError: true,
        },
      })
    } else {
      res.status(200).json({
        msg: {
          msgBody: 'User was deleted',
          msgError: false,
        },
      })
    }
  })
})

userRouter.get(
  '/logout',
  passport.authenticate('user-rule', { session: false }),
  (req, res) => {
    res.clearCookie('access-token')
    res
      .status(200)
      .json({ msg: { msgBody: 'Successfully logged out', msgError: true } })
  },
)

userRouter.put(
  '/updateuseraddress/:id',
  passport.authenticate('user-rule', { session: false }),
  (req, res) => {
    const {
      username, 
      password,
      firstname,
      lastname,
      email,
      telephone,
      address,
      city,
      zipcode,
    } = req.body
    User.findByIdAndUpdate(
      { _id: req.params.id },
      { username, password, firstname, lastname, email, telephone, address, city, zipcode },
      (err) => {
        if (err) {
          res.status(500).json({
            msg: {
              msgBody: 'An error occured updating your account',
              msgError: true,
            },
          })
        } else {
          res.status(200).json({
            msg: {
              msgBody: 'Successfully updated account',
              msgError: false,
            },
          })
        }
      },
    )
  },
)

//get order history from only admins
userRouter.get(
  '/getorderhistory',
  passport.authenticate('user-rule', { session: false }),
  (req, res) => {
    User.findById({ _id: req.user._id })
      .populate('orderHistory')
      .exec((error, user) => {
        if (error) {
          res.status(500).json({
            msg: {
              msgBody: 'An error occured got order history',
              msgError: true,
            },
          })
        } else {
          res.status(200).json({
            orderHistory: user.orderHistory,
            msg: {
              msgBody: 'Successfully got order history',
              msgError: false,
            },
          })
        }
      })
  },
)

module.exports = userRouter
