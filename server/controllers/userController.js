import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../config';
import db from '../../model';

const { users } = db;

class userController {
  static signupUser(req, res) {
    const {
      username, email
    } = req.body;
    const password = bcrypt.hashSync(req.body.password, 10);
    const id = users[users.length - 1].id + 1;
    const addedUser = {
      id,
      username,
      email,
      password
    };
    const foundEmail = users.find(user => user.email.toLowerCase() === email.toLowerCase());
    const foundUsername = users.find(user => user.username.toLowerCase()
     === username.toLowerCase());

    if (!foundEmail && !foundUsername) {
      users.push(addedUser);
    }
    if (foundEmail) {
      return res.status(409).json({
        status: 'Fail',
        message: 'Email already exist. Use another email or login'
      });
    }
    if (foundUsername) {
      return res.status(409).json({
        status: 'Fail',
        message: 'Username already exist. Use another another username or login'
      });
    }
    const token = jwt.sign({ id: users.id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    return res.status(201).json({
      newUser: addedUser,
      token,
      message: 'Account successfully created',
      status: 'Success'
    });
  }

  static signinUser(req, res) {
    const { email, password } = req.body;
    const foundUser = users.find(user => user.email === email);
    const passwordIsValid = bcrypt.compareSync(password, foundUser.password);
    if (foundUser) {
      if (email.toLowerCase() === foundUser.email.toLocaleLowerCase()
      && passwordIsValid) {
        return res.status(200).json({
          message: `Hello '${foundUser.username}', your login was successful`
        });
      }
      return res.status(401).json({
        status: 'Fail',
        message: 'Incorrect Password '
      });
    }
    return res.status(401).json({
      message: 'Email does not exist. Input a valid email or sign up'
    });
  }
}

export default userController;
