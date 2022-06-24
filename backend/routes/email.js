const express = require("express");
const emailRouter = express.Router();
const Email = require ("../models/Email")


emailRouter.get("/getEmails", (req, res) => {
  Email.find({}, (err, documents) => {
    if (err) {
      res.status(500).json({
        msg: {
          msgBody: "An error occured while retrieving emails",
          msgError: true,
        },
      });
    } else {
      res.status(200).json({ email: documents });
    }
  });
});

emailRouter.post("/newEmail", (req, res) => {
    console.log("email to add: ", req.body);
    const newEmail = new Email({
      name: req.body.name,
      text: req.body.text,
      email: req.body.email,
    });
    newEmail.save((err) => {
      if (err) {
        res.status(500).json({
          msg: {
            msgBody: "An error occurred while saving Email to bd",
            msgError: true,
          },
        });
      } else {
        res.status(201).json({
          msg: {
            msgBody: "Email was saved",
            msgError: false,
          },
        });
      }
    });
  });


  emailRouter.delete("/deleteEmail/:id", (req, res) => {
    Email.findByIdAndDelete(req.params.id, (err) => {
      if (err) {
        res.status(500).json({
          msg: {
            msgBody: "An error occured while deleting email",
            msgError: true,
          },
        });
      } else {
        res.status(200).json({
          msg: {
            msgBody: "Email was deleted",
            msgError: false,
          },
        });
      }
    });
  });



module.exports = emailRouter;