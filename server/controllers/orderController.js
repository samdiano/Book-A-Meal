import db from '../../model';

const { orders } = db;

class mealController {
  static addMeal(req, res) {
    const {
      mealId, price, userId, quantity,
    } = req.body;
    const id = orders[orders.length - 1].id + 1;
    const addedMeal = {
      id,
      userId,
      mealId,
      quantity,
      price,
    };
    orders.push(addedMeal);
    return res.status(201).json({
      meal: addedMeal,
      status: 'Success',
      message: 'Meal booked to Order successfully',
    });
  }

  static updateOrder(req, res) {
    const foundMeal = orders.find(meal => meal.id === parseInt(req.params.orderId, 10));
    if (foundMeal) {
      foundMeal.id = req.body.id;
      foundMeal.userId = req.body.userId;
      foundMeal.mealId = req.body.mealId;
      foundMeal.quantity = req.body.quantity;
      foundMeal.price = req.body.price;
      return res.status(200).json({
        foundMeal,
        status: 'Success',
        message: 'Order updated successfully',
      });
    }
    return res.status(404).json({
      status: 'Error',
      message: 'Order not found',
    });
  }

  static getOrders(req, res) {
    return res.status(200).json({
      menu: orders,
      status: 'Success',
      message: 'All orders',
    });
  }

  static getmeal(req, res) {
    const { mealId } = req.params;
    const foundMeal = orders.filter(meal => meal.id === parseInt(mealId, 10));
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

export default mealController;
