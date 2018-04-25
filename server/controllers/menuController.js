import db from '../../model';

const { menu } = db;

class menuController {
  static addMeal(req, res) {
    const {
      title, description, price,
    } = req.body;
    const id = menu.meals[menu.meals.length - 1].id + 1;
    const addedMeal = {
      id,
      title,
      description,
      price,
    };
    const foundMeal = menu.meals.find(meal =>
      (meal.title.toLowerCase() === title.toLowerCase()));
    if (!foundMeal) {
      menu.meals.push(addedMeal);
      return res.status(201).json({
        meal: addedMeal,
        status: 'Success',
        message: 'Meal added to Menu successfully',
      });
    }
    if (foundMeal) {
      if (foundMeal.id === id) {
        return res.status(409).json({
          message: `A meal with this '${id}' is already in the Menu`,
          status: 'Fail',
        });
      }
    }
    return res.status(409).json({
      message: `The meal '${foundMeal.title}' already exists in the Menu`,
      status: 'Fail',
    });
  }

  static updateMeal(req, res) {
    const foundMeal = menu.meals.find(meal => meal.id === parseInt(req.params.mealId, 10));
    if (foundMeal) {
      foundMeal.title = req.body.title;
      foundMeal.description = req.body.description;
      foundMeal.price = req.body.price;
      return res.status(200).json({
        foundMeal,
        status: 'Success',
        message: 'Meal updated successfully',
      });
    }
    return res.status(404).json({
      status: 'Error',
      message: 'Meal not found',
    });
  }

  static removeMeal(req, res) {
    const foundMeal = menu.meals.find(meal => meal.id === parseInt(req.params.mealId, 10));

    if (foundMeal) {
      menu.meals.splice(foundMeal.id - 1, 1);
      return res.status(200).json({
        menu,
        status: 'Success',
        message: 'Meal was successfully removed from Menu',
      });
    }
    return res.status(404).json({
      status: 'error',
      message: 'Meal not found in menu',
    });
  }

  static getMenu(req, res) {
    return res.status(200).json({
      menu,
      status: 'Success',
      message: 'The menu for Today',
    });
  }

  static getmeal(req, res) {
    const { mealId } = req.params;
    const foundMeal = menu.meals.filter(meal => meal.id === parseInt(mealId, 10));
    if (foundMeal.length === 0) {
      return res.status(404).json({
        message: 'meal does not exist in Menu',
        status: 'error',
      });
    }
    return res.status(200).json({
      meal: foundMeal,
      status: 'Success',
    });
  }
}

export default menuController;
