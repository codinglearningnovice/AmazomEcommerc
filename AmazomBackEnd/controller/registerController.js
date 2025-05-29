/*const userDB = {
    user: require("../model/users.json"),
    setUsers:(data) => {userDB.user= data}
}

const fsPromises = require("fs/promises")
const path = require("path")*/

const User = require("../model/User");
const Employee = require("../model/Employee");
const bcrypt = require("bcrypt");

const handleNewUser = async (req,res) => {
    const {user,pwd,employeeId,firstname,lastname} = req.body;
    if (!user||!pwd) return res.status(400).json({"message": "username ad password are required"}) 
    const employeeduplicate = await Employee.findOne({ username: user }).exec();
    const userduplicate = await User.findOne({ username: user }).exec();
    //if (employeeduplicate||userduplicate) return res.sendStatus(409);
    
    if(employeeId){

      if (employeeduplicate) {
        return res.sendStatus(409).json({ message: "employee already exists" });;
      }

      try {
        const hashedpwd = await bcrypt.hash(pwd, 10);

        const roles = {};
        if (String(employeeId).startsWith("9")) {
          roles.Admin = employeeId;
        } else {
          roles.employeeId = employeeId;
        }

        //store ew user
        const result = await Employee.create({
          username: user,
          password: hashedpwd,
          firstname: firstname,
          lastname: lastname,
          roles: roles,
        });
        console.log("newUser", result);

        res.status(201).json({ message: `New user ${user} created` });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }

    }else{  
       if (userduplicate) {return res.sendStatus(409).json({ message: "User already exists" });;}
       try {
         const hashedpwd = await bcrypt.hash(pwd, 10);

         //store ew user
         const result = await User.create({
           "username": user,
           "password": hashedpwd,
           /*"firstname": firstname,
           "lastname": lastname,*/
         });
         console.log("newUser", result);

         res.status(201).json({ message: `New user ${user} created` });
       } catch (err) {
         res.status(500).json({ message: err.message });
       } 

    }

       
       
       
       
}  


module.exports = { handleNewUser };






        //checkig for duplicate userames
   /* const duplicate = userDB.user.find(person => person.username === user)
    if (duplicate) return res.sendStatus(409);
    try {
        const hashedpwd = await bcrypt.hash(pwd,10) 
        
        //store ew user
        const newUser = {
            "username": user, 
            "roles":{"user":990},
            "password": hashedpwd,
            "employeeId":employeeId
        }
        userDB.setUsers([...userDB.user, newUser])
        await fsPromises.writeFile(path.join(__dirname,"..", "model", "users.json" ),
        JSON.stringify(userDB.user))

        console.log(userDB.user,": ot empty")
        res.status(201).json({"message":`New user ${user} created`})
    } catch(err) {
        res.status(500).json({"message": err.message})
    }
}

module.exports = {handleNewUser}*/