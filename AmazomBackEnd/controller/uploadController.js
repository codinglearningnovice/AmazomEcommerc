const ImageKit = require("imagekit");


const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL_ENDPOINT,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});
const uploadAuth_IK = async (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};

module.exports = { uploadAuth_IK };