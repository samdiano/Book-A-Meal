import validator from 'validator';
import db from '../../model';


/*
 * Class representing validator
 *
 * @class Validator
 */
class ValidatorHandler {
  /**
   * Check for all required input fields
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - Calls the next route handler
   * @returns {object} JSON object representing failure message
   */
  static mealRequiredInputs(req, res, next) {
    const {
      title, description, price
    } = req.body;

    if (title === undefined) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'No input was received for meal'
        });
    }

    if (description === undefined) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'No input was received for description'
        });
    }

    if (price === undefined) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'No input was received for price'
        });
    }

    if (validator.isEmpty(title)) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'title name cannot be empty'
        });
    }

    if (!validator.isLength(title, { min: 3, max: 20 })) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'title should be 3 to 30 characters'
        });
    }

    if (validator.contains(title, '  ')) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Invalid title. Use single whitespace'
        });
    }

    if (title !== validator.trim(title, ' ')) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'title cannot end/begin with whitespace'
        });
    }


    if (validator.isEmpty(description)) {
      return res.status(404)
        .json({
          status: 'Fail',
          message: 'description cannot be empty'
        });
    }
    if (!validator.isLength(description, { min: 3, max: 300 })) {
      return res.status(404)
        .json({
          status: 'Fail',
          message: 'description should be 30 to 300 characters'
        });
    }
    if (validator.contains(description, '  ')) {
      return res.status(404)
        .json({
          status: 'Fail',
          message: 'Invalid description: Please use single whitespace.'
        });
    }

    if (description !== validator.trim(description, ' ')) {
      return res.status(404)
        .json({
          status: 'Fail',
          message: 'Description cannot end/begin with whitespace'
        });
    }

    return next();
  }

  static userRequiredInputs(req, res, next) {
    const { name, email, password } = req.body;

    if (name === undefined) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'No input was received for name'
        });
    }

    if (password === undefined) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'No input was received for password'
        });
    }

    if (email === undefined) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'No input was received for email'
        });
    }

    if (validator.isEmpty(name)) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'name cannot be empty'
        });
    }

    if (!validator.isLength(name, { min: 2, max: 20 })) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'name should have 2 to 20 characters'
        });
    }

    if (!validator.isAlphanumeric(name)) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Only letter characters are allowed.'
        });
    }

    if (!validator.isEmail(email) || validator.contains(email, '-')) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Please use a valid email'
        });
    }

    if (!validator.isLength(email, { min: 10, max: 50 })) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Email should be 10 to 50 characters long'
        });
    }

    if (validator.isEmpty(password)) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Password cannot be empty'
        });
    }

    if (validator.contains(password, ' ')) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Password should not contain whitespace'
        });
    }

    if (!validator.isLength(password, { min: 4, max: 16 })) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Passord should be 4 to 16 characters long'
        });
    }
    return next();
  }
}

export default ValidatorHandler;
