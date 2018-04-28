import db from '../../model';

const { menu } = db;

class menuController {
  static addMenu(req, res) {
    const {
      title, price, userId, date,
    } = req.body;
    const id = menu.meals[menu.meals.length - 1].id + 1;
    const addedMeal = {
      id,
      userId,
      title,
      price,
      date,
    };
    const foundMenu = menu.meals.find(meal =>
      (meal.title.toLowerCase() === title.toLowerCase()));
    if (!foundMenu) {
      menu.meals.push(addedMeal);
      return res.status(201).json({
        meal: addedMeal,
        status: 'Success',
        message: 'Meal added to Menu successfully',
      });
    }
    if (foundMenu) {
      if (foundMenu.id === id) {
        return res.status(409).json({
          message: `A meal with this '${id}' is already in the Menu`,
          status: 'Fail',
        });
      }
    }
    return res.status(409).json({
      message: `The meal '${foundMenu.title}' already exists in the Menu`,
      status: 'Fail',
    });
  }

  static updateMenu(req, res) {
    const foundMenu = menu.meals.find(meal => meal.id === parseInt(req.params.mealId, 10));
    if (foundMenu) {
      foundMenu.title = req.body.title;
      foundMenu.price = req.body.price;
      return res.status(200).json({
        foundMenu,
        status: 'Success',
        message: 'Menu updated successfully',
      });
    }
    return res.status(404).json({
      status: 'Error',
      message: 'Menu not found',
    });
  }

  static removeMenu(req, res) {
    const foundMenu = menu.meals.find(meal => meal.id === parseInt(req.params.mealId, 10));

    if (foundMenu) {
      menu.meals.splice(foundMenu.id - 1, 1);
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

  static getmenu(req, res) {
    const { mealId } = req.params;
    const foundMenu = menu.meals.filter(meal => meal.id === parseInt(mealId, 10));
    if (foundMenu.length === 0) {
      return res.status(404).json({
        message: 'meal does not exist in Menu',
        status: 'error',
      });
    }
    return res.status(200).json({
      meal: foundMenu,
      status: 'Success',
    });
  }
}

export default menuController;
