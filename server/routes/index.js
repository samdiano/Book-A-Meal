import meal from '../controllers/mealController';
import menu from '../controllers/menuController';
import orders from '../controllers/orderController';
import Auth from '../controllers/userController';
import ValidatorHandler from '../middlewares/validation';

const routes = (app) => {
  app.get('/api/v1', (req, res) => {
    res.status(200).send('Welcome to Book-A-Meal Api v1.0.0');
  });
  // meal routes
  app.post('/api/v1/meals', ValidatorHandler.mealRequiredInputs, meal.addMeal);
  app.put('/api/v1/meals/:mealId', meal.updateMeal);
  app.get('/api/v1/meals', meal.getAllMeals);
  app.delete('/api/v1/meals/:mealId', meal.removeMeal);
  // menu routes
  app.get('/api/v1/menu', menu.getMenu);
  app.post('/api/v1/menu', menu.addMenu);
  app.put('/api/v1/menu/:mealId', menu.updateMenu);
  app.delete('/api/v1/menu/:mealId', menu.removeMenu);

  // order routes
  app.get('/api/v1/orders', orders.getOrders);
  app.post('/api/v1/orders', orders.addOrder);
  app.put('/api/v1/orders/:orderId', orders.updateOrder);
  // auth routes
  app.post('/api/v1/auth/signup', ValidatorHandler.userRequiredInputs, Auth.signupUser);
  app.post('/api/v1/auth/signin', Auth.signinUser);
};

export default routes;
