const express = require("express");
const router = express.Router();

const {
  renderProduct,
  handleProductsubmit,
  displayProduct,
} = require("../controllers/products");

router.get("/", renderProduct);

router.post("/", handleProductsubmit);

router.get("/display", displayProduct);

module.exports = router;
