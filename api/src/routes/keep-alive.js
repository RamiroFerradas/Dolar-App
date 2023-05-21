const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is alive");
  console.log("Server is alive");
});

module.exports = router;
