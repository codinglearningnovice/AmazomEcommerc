const https = require("https");

const initializeTransaction = (req, res) => {
  const params = JSON.stringify({
    email: "customer@email.com",
    amount: "500000",
  });

  const options = {
    hostname: "api.paystack.co",
    port: 443,
    path: "/transaction/initialize",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
      "Content-Type": "application/json",
    },
  };

  const reqpaystack = https
    .request(options, (respaystack) => {
      let data = "";

      respaystack.on("data", (chunk) => {
        data += chunk;
      });

      respaystack.on("end", () => {
        res.send(JSON.parse(data)); // Respond to the client with the Paystack response
        console.log(JSON.parse(data));
      });
    })
    .on("error", (error) => {
      console.error("this is an error from paystackcotroller", error);
      res.status(500).send("Error with Paystack request");
    });

  reqpaystack.write(params);
  reqpaystack.end();
};

module.exports = { initializeTransaction };

/*const https = require("https");

const params = JSON.stringify({
  email: "customer@email.com",
  amount: "500000",
});

const options = {
  hostname: "api.paystack.co",
  port: 443,
  path: "/transaction/initialize",
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
    "Content-Type": "application/json",
  },
};

const reqpaystack = https
  .request(options, (respaystack) => {
    let data = "";

    respaystack.on("data", (chunk) => {
      data += chunk;
    });

    respaystack.on("end", () => {
        respaystack.send(data);
      console.log(JSON.parse(data));
    });
  })
  .on("error", (error) => {
    console.error("this is an error from paystackcotroller",error);
  });

reqpaystack.write(params);
reqpaystack.end();




module.exports = { reqpaystack };*/
