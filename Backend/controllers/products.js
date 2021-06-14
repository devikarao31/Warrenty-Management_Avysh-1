const Product = require("../models/product");

const renderProduct = (req, res) => {
  res.render("products");
};

const handleProductsubmit = (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const price = req.body.price;
  const category = req.body.category;
  const quantity = req.body.quantity;
  const description = req.body.description;

  if (
    name !== "" ||
    price !== "" ||
    quantity !== "" ||
    category !== "" ||
    description !== ""
  ) {
    console.log("Ready");
    const newProduct = new Product({
      name,
      price,
      quantity,
      category,
      description,
    });
    newProduct
      .save()
      .then(() => {
        console.log("Saved");
        res.redirect("/");
      })
      .catch((err) => {
        console.log("Error", err.message);
      });
  } else {
    alert("Please Fill Data Propely");
  }
};

// exports.renderWarranty = (req, res) => {
//   res.render("warranty");
// };

// exports.handleSubmit = (req, res) => {
//   console.log(req.body);
//   var warrId = req.body.warrid;
//   var warrName = req.body.warrname;
//   var resolution = Number(req.body.resolution);
//   var resolve;
//   var duration = Number(req.body.duration);
//   if (resolution == 1) {
//     resolve = "Repair";
//   } else if (resolution == 2) {
//     resolve = "Replace";
//   } else {
//     resolve = "Refund";
//   }
//   var type = Number(req.body.type);
//   var restype;
//   if (type == 1) {
//     restype = "Onsite";
//   } else {
//     restype = "Offsite";
//   }
//   var gridCheck = req.body.gridCheck1;
//   var extend;
//   if (gridCheck == "on") extend = true;
//   else extend = false;
//   var extendDur, extendPrice;
//   if (extend) {
//     extendDur = Number(req.body.extenddur);
//     extendPrice = Number(req.body.extendprice);
//   }
//   const warr = new Warranty({
//     warrId,
//     warrName,
//     prodId: "prod1",
//     resolution: resolve,
//     type: restype,
//     extendable: extend,
//     duration,
//     extendDur,
//     extendPrice,
//   });
//   warr.save(function (err) {
//     if (!err) {
//       res.redirect("/");
//     } else {
//       console.log(err);
//     }
//   });
// };

const displayProduct = async (req, res) => {
  try {
    const products = await Product.find({}).lean();
    console.log(products);
    res.render("display_products", { products: products });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  renderProduct,
  handleProductsubmit,
  displayProduct,
};
