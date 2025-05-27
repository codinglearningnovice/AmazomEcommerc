const jwt = require("jsonwebtoken");

const secretKey = ""

const token = jwt.sign(
  {
    UserInfo: {
      username: "omo",
      roles: "admin",
      employeeId: 89,
    },
  },
  secretKey,
  { expiresIn: "250s" }
);

console.log("New Token:", token);
