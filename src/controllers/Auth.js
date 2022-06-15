
const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const boom = require('@hapi/boom');

const register = async (req) => {
  // Get user input

  const { first_name, last_name, email, password } = req.body;

  // check if user already exist
  // Validate if user exist in our database
  const oldUser = await User.findOne({ email });

  if (oldUser) {
    throw boom.badRequest("User Already Exist. Please Login")
  }

  //Encrypt user password
  let encryptedPassword = await bcrypt.hash(password, 10);

  // Create user in our database
  const user = await User.create({
    first_name,
    last_name,
    email: email.toLowerCase(), // sanitize: convert email to lowercase
    password: encryptedPassword,
  });

  // Create token
  const token = jwt.sign(
    { user_id: user._id, email },
    process.env.TOKEN_KEY,
    {
      expiresIn: "2h",
    }
  );
  // save user token
  user.token = token;

  // return new user
  return user;

}


const login = async (req) => {

  const { email, password } = req.body;
  // Validate if user exist in our database
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    // save user token
    user.token = token;

    // user
    return user;
  }
  throw boom.badRequest("Invalid Credentials");
}


exports.register = register;
exports.login = login;