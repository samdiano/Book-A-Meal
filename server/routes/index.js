import meal from '../controllers/mealController';
import menu from '../controllers/menuController';
import orders from '../controllers/orderController';

// import Auth from '../controllers/userController';
// import ValidatorHandler from '../middlewares/validation';

const routes = (app) => {
  app.get('/api/v1', (req, res) => {
    res.status(200).send('Welcome to Book-A-Meal Api v1.0.0');
  });
  // add meal
  app.post('/api/v1/meals', meal.addMeal);
  // update meal
  app.put('/api/v1/meals/:mealId', meal.updateMeal);
  // get all meals
  app.get('/api/v1/meals', meal.getAllMeals);
  // remove a meal
  app.delete('/api/v1/meals/:mealId', meal.removeMeal);

  // Get the days Menu
  app.get('/api/v1/menu', menu.getMenu);
  // add meals to Menu
  app.post('/api/v1/menu', menu.addMeal);
  // update meal in Menu
  app.put('/api/v1/menu/:mealId', menu.updateMeal);
  // remove a meal from menu
  app.delete('/api/v1/menu/:mealId', menu.removeMeal);

  // Get the days Menu
  app.get('/api/v1/orders', orders.getOrders);
  // add meals to Menu
  app.post('/api/v1/orders', orders.addMeal);
  // update meal in Menu
  app.put('/api/v1/orders/:orderId', orders.updateOrder);

  // get a meal
  // app.get('/api/v1/meals/:mealId', meal.getMeal);
/*
  // sign up a user
  app.post('/api/v1/auth/signup', ValidatorHandler.userRequiredInputs, Auth.signupUser);
  // Login a user
  app.post('/api/v1/auth/signin', Auth.signinUser);
  */
};

export default routes;
