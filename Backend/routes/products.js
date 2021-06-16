const express = require("express");
const router = express.Router();

const {
  renderProduct,
  handleProductsubmit,
  displayProduct,
  get_all_products,
} = require("../controllers/products");

router.get("/", renderProduct);

router.post("/", handleProductsubmit);

router.get("/display", displayProduct);

router.get("/all", get_all_products);

module.exports = router;
