const express = require('express')
const orderRouter = express.Router()
const Order = require('../models/Order')
const User = require('../models/User')
const passport = require('passport')
const passportConfig = require('../passport')

orderRouter.post('/neworder', (req, res) => {
  console.log(req.body)
  const newOrder = new Order(req.body)
  newOrder.save((error) => {
    if (error) {
      res.status(500).json({
        message: {
          msgBody: 'An error occured while subitting order',
          msgError: true,
        },
      })
    } else {
      if (req.body.userId) {
        User.findById({ _id: req.body.userId }, (error, user) => {
          if (error) {
            res.status(500).json({
              message: {
                msgBody: 'An error occured getting user',
                msgError: true,
              },
            })
          } else {
            user.orderHistory.push(newOrder)
            user.save((error) => {
              if (error) {
                res.status(500).json({
                  message: {
                    msgBody: 'An error occured adding order to order history',
                    msgError: true,
                  },
                })
              } else {
                res.status(201).json({
                  message: {
                    msgBody: 'Successfully added order in  order-history',
                    msgError: false,
                  },
                })
              }
            })
          }
        })
      } else {
        res.status(201).json({
          message: {
            msgBody: 'Successful submitted order',
            msgError: false,
          },
        })
      }
    }
  })
})

orderRouter.get(
  '/getorders',
  passport.authenticate('admin-rule', { session: false }),
  (req, res) => {
    Order.find({}, (error, orders) => {
      if (error) {
        res.status(500).json({
          message: {
            msgBody: 'An error occured getting orders',
            msgError: true,
          },
        })
      } else {
        res.status(200).json({
          orders,
          message: {
            msgBody: 'Successfully got orders',
            msgError: false,
          },
        })
      }
    })
  },
)

//handle orders
orderRouter.put(
  '/handleorder/:id',
  passport.authenticate('admin-rule', { session: false }),
  (req, res) => {
    Order.findByIdAndUpdate(
      { _id: req.params.id },
      { handled: req.body.handled },
      (err) => {
        if (err) {
          res.status(500).json({
            message: {
              msgBody: 'An error occured handling order',
              msgError: true,
            },
          })
        } else {
          res.status(200).json({
            message: {
              msgBody: 'Successfully handled order',
              msgError: false,
            },
          })
        }
      },
    )
  },
)

//delete order
orderRouter.delete(
  '/deleteorder/:id',
  passport.authenticate('admin-rule', { session: false }),
  (req, res) => {
    Order.findByIdAndDelete({ _id: req.params.id }, (err) => {
      if (err) {
        res.status(500).json({
          message: {
            msgBody: 'An error occured deleting order',
            msgError: true,
          },
        })
      } else {
        res.status(200).json({
          message: {
            msgBody: 'Successfully deleted order',
            msgError: false,
          },
        })
      }
    })
  },
)

module.exports = orderRouter
