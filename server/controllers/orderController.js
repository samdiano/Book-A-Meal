import db from '../../model';

const { orders } = db;

class mealController {
  static addOrder(req, res) {
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
    const foundOrder = orders.find(meal => meal.id === parseInt(req.params.orderId, 10));
    if (foundOrder) {
      foundOrder.id = req.body.id;
      foundOrder.userId = req.body.userId;
      foundOrder.mealId = req.body.mealId;
      foundOrder.quantity = req.body.quantity;
      foundOrder.price = req.body.price;
      return res.status(200).json({
        foundOrder,
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
}

export default mealController;
