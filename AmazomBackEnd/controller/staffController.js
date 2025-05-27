const data = {
  staff: require("../model/staff.json"),
  setStaff: function(data) {this.staff = data}
};






const getAllStaff = (req, res) => {
  res.json(data.staff);
};

const creatNewProduct = (req, res) => {
  console.log(req.body.firstname);
  const newId =
    data.staff.length > 0 ? data.staff[data.staff.length - 1].id + 1 : 1;
  console.log(newId);
  const newProduct = {
    id: newId,
    firstname: req.body.firstname,
    lastname: req.body.lastname
  };

  if(!newProduct.firstname || !newProduct.lastname) {
    return res.status(400).json({"message": "first ad last ames are required."})
  }

  data.setStaff([...data.staff, newProduct]);
  res.status(201).json(data.staff);
};

const updateProduct = (req, res) => {
  const staff = data.staff.find(emp =>emp.id === parseInt(req.body.id))
  if(!staff) {
    return res.status(400).json({"message":`Staff ${req.body.id} ot foud`})
  }
  if (req.body.firstname){staff.firstname = req.body.firstname}
  if (req.body.lastname){staff.lastname = req.body.lastname}
  const filteredArray = data.staff.filter(emp => emp.id !== parseInt(req.body.id))
  const unsortedArray = [...filteredArray, staff]
  data.setStaff(unsortedArray.sort((a,b) => a.id > b.id? 1 : a.id < b.id?-1:0))
  res.json(data.staff)

 
};

const deleteProduct = (req, res) => {
 const staff = data.staff.find(emp => emp.id === parseInt(req.body.id));
 if (!staff) {
   return res.status(400).json({ message: `Staff ${req.body.id} ot foud` });
 }

 
 const filteredArray = data.staff.filter(
   (emp) => emp.id !== parseInt(req.body.id)
 );
 data.setStaff([...filteredArray]);

 res.json(data.staff);
}
;


const getProduct = (req, res) => {
 const staff = data.staff.find((emp) => emp.id === parseInt(req.params.id));
 if (!staff) {
   return res.status(400).json({ message: `Staff ${req.params.id} ot foud` });
 }

 res.json(staff);

};


module.exports = {
    getAllStaff,
    updateProduct,
    deleteProduct,
    getProduct,
    creatNewProduct
}
