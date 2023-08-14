const router = require("express").Router();
const { Features } = require("../../models");

router.get("/", (req, res) => {
  Features.findAll().then((locData) => {
    res.json(locData);
  });
});

module.exports = router;
