import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../config';
import { User } from '../../server/models';


class UserController {
  static signupUser(req, res) {
    const {
      name, email, role
    } = req.body;
    const password = bcrypt.hashSync(req.body.password, 10);
    const addedUser = {
      name,
      email,
      role,
      password
    };

    const token = jwt.sign({ id: User.id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    User.create(addedUser);
    return res.status(201).json({
      newUser: addedUser,
      token,
      message: 'Account successfully created',
      status: 'Success'
    });
  }

  static signinUser(req, res) {
    const { email, password } = req.body;
    const foundUser = User.findById({
      where: {
        email, password
      }
    });

    const passwordIsValid = bcrypt.compareSync(password, foundUser.password);
    if (foundUser) {
      if (email.toLowerCase() === foundUser.email.toLocaleLowerCase()
      && passwordIsValid) {
        return res.status(200).json({
          message: `Hello '${foundUser.name}', your login was successful`
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

export default UserController;
