/**
 * Created by Daniel on 2017-04-13.
 */
const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
// console.log(req);
  res.status(200).json({
    message:   "You're authorized to see this secret message.",
    userID:    req.session.currentUserID,
    userName:  req.session.currentUserName,
    userEmail: req.session.currentUserEmail
  });
});

module.exports = router;
