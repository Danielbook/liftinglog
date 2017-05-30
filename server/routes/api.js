import express from "express";
const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    user: {
      userID: req.session.currentUserID,
      userName: req.session.currentUserName,
      userEmail: req.session.currentUserEmail,
    }
  });
});

module.exports = router;
