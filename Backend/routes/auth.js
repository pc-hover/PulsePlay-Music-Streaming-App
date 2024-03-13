const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/helpers");

const router = express.Router();

router.post("/register", async (req, res) => {
  //req.bod {email,password,firstName.lastName,username}
  const { email, password, firstName, lastName, username } = req.body;

  //Step 2: Check if the user with email address exists? if yes return error

  const user = await User.findOne({ email: email });
  if (user) {
    return res
      .status(403)
      .json({ error: "A user already exists with this email" });
  } else {
    //Step 3 : Create a new User
    //Step 3.1 Hashing password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserData = {
      email,
      password: hashedPassword,
      firstName,
      lastName,
      username,
    };
    const newUser = await User.create(newUserData);

    //Step 4 : Return User a unique token for further usage of this app
    const token = await getToken(email, newUser); //inside utils/helpers

    //Step 5: return result to User without the hashed password
    const userToReturn = { ...newUser.toJSON(), token };
    // userToReturn.delete.password;
    delete userToReturn.password;
    //console.log(userToReturn); this also contains token
    return res.status(200).json(userToReturn);
  }
});

router.post("/login", async (req, res) => {
  //Step 1:get email and password
  const { email, password } = req.body;

  //Step 2: check if the email exists or not
  const user = await User.findOne({ email: email });
  //console.log(user);
  if (!user) {
    return res.status(403).json({ error: "Invalid User Credential " });
  }
  //Step 3: Valid email then check if the password is correct
  //  console.log(user.password);
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    //Step 4: if credentials are valid return token to the user
    return res
      .status(403)
      .json({ error: "User Credential Wrong + password is wrong" });

  }

  const token = await getToken(user.email, user);
  const userToReturn = { ...user.toJSON(), token };
  delete userToReturn.password;
  //console.log(userToReturn); //this also contains token
  return res.status(200).json(userToReturn);



});

module.exports = router;

//await getToken
