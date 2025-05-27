const { format } = require("date-fns");
const { v4: uuid } = require("uuid");


fsPromises = require("fs/promises");
path = require("path");
const productDB = {
  product: require("../model/product.json"),
  setProduct: function (data) {
    productDB.product = data;
  },
};

const jwt = require("jsonwebtoken");

const getAllProduct = (req, res) => {
  res.json(productDB.product);
  console.log("it worked!!!!");
};

const creatNewProduct = async (req, res) => {
  const dateTime = `${format(new Date(), "yyyyMMdd HH:mm:ss")}`;
  const productSerial = uuid();

  //console.log(req.body.productname);
  const newId =
    productDB.product.length > 0
      ? productDB.product[productDB.product.length - 1].id + 1
      : 1;
  //console.log(newId);
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  const userInfo = decodedToken.UserInfo || {};
  const newProduct = {
    id: newId,
    productSerial: productSerial,
    productname: req.body.productname,
    category: req.body.category,
    //img: req.file.buffer,
    desc: req.body.description,
    rating: req.body.rating,
    date: dateTime,
    roles: "employee",
    price: req.body.price,
    employeeId: userInfo.employeeId,
  };
  console.log("CHECKiiii", newProduct);

  if (
    !newProduct.category ||
    !newProduct.desc ||
    !newProduct.rating ||
    !newProduct.productname ||
    !newProduct.price
  ) {
    return res.status(400).json({ message: "all field must be filled." });
  }

  productDB.setProduct([...productDB.product, newProduct]);
  try {
    await fsPromises.writeFile(
      path.join(__dirname, "../model/product.json"),
      JSON.stringify(productDB.product)
    );
    console.log("Product saved to database");
    res.status(201).json(productDB.product);
  } catch (err) {
    console.error("Error writing to database:", err);
    res.status(500).json({ message: "Error saving product to database" });
  }
};

const updateProduct = (req, res) => {
  const product = productDB.product.find(
    (emp) => emp.id === parseInt(req.body.id)
  );
  if (!product) {
    return res.status(400).json({ message: `product ${req.body.id} ot foud` });
  }
  if (req.body.category) {
    product.category = req.body.category;
  }
  if (req.body.img) {
    product.img = req.file.buffer;
  }
  if (req.body.desc) {
    product.desc = req.body.description;
  }
  if (req.body.rating) {
    product.rating = req.body.rating;
  }
  const filteredArray = data.product.filter(
    (emp) => emp.id !== parseInt(req.body.id)
  );
  const unsortedArray = [...filteredArray, product];
  productDB.setProduct(
    unsortedArray.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
  );
  res.json(productDB.product);
};

const deleteProduct = (req, res) => {
  const product = data.staff.find((emp) => emp.id === parseInt(req.body.id));
  if (!product) {
    return res.status(400).json({ message: `Staff ${req.body.id} ot foud` });
  }

  const filteredArray = productDB.product.filter(
    (emp) => emp.id !== parseInt(req.body.id)
  );
  productDB.setProduct([...filteredArray]);

  res.json(productDB.product);
};
const getProduct = (req, res) => {
  const product = productDB.product.find(
    (emp) => emp.id === parseInt(req.params.id)
  );
  if (!product) {
    return res
      .status(400)
      .json({ message: `product ${req.params.id} ot foud` });
  }

  res.json(product);
};

module.exports = {
  getAllProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  creatNewProduct,
};
