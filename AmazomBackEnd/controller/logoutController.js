
/*const userDB = {
  user: require("../model/users.json"),
  setUsers: (data) => {
    this.user = data;
  },
};
const fsPromises = require("fs/promises");
const path = require("path");*/
const User = require("../model/User");
const Employee = require("../model/Employee");





const handleLogout =async (req, res) => {

    const cookies = req.cookies;
    
    if (!cookies?.jwt)

      return res
        .sendStatus(204)  

    const refreshToken = cookies.jwt
    //const foundUser = userDB.user.find(person => person.refreshToken === refreshToken);
    const foundEmployee = await Employee.findOne({ refreshToken }).exec();
    const foundUser = foundEmployee || await User.findOne({ refreshToken }).exec()

    if (!foundUser){
      res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
      return res.sendStatus(204);
    }
        
    
    /*const otherUsers = userDB.user.filter(person => person.username !== foundUser.refreshToken)
    const currentUser = {...foundUser, refreshToken: ""};
    userDB.setUsers([...otherUsers,currentUser])
    await fsPromises.writeFile(
        path.join(__dirname, "..", "model", "users.json"), JSON.stringify(userDB.user)
    )*/
    foundUser.refreshToken = "";
    const result = await foundUser.save()

    console.log("", result);
    res.clearCookie("jwt", {httpOnly: true,sameSite:"None",secure:true})
    res.sendStatus(204);

}

module.exports = {handleLogout}