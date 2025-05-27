

const credentials = require("../middleware/credentials");
const whitelist = require("./whiteList");



const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, origin);
    } else {
      callback(new Error("not allowed by cors"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;