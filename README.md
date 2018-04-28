
[![Build Status](https://travis-ci.org/samdiano/Book-A-Meal.svg?branch=156841597-setup-test-api-endpoints-modify-order)](https://travis-ci.org/samdiano/Book-A-Meal)

[![Coverage Status](https://coveralls.io/repos/github/samdiano/Book-A-Meal/badge.svg?branch=156841597-setup-test-api-endpoints-modify-order)](https://coveralls.io/github/samdiano/More-Recipes?branch=development)

[![Maintainability](https://api.codeclimate.com/v1/badges/d6f77b3460641f377228/maintainability)](https://codeclimate.com/github/samdiano/Book-A-Meal/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/d6f77b3460641f377228/test_coverage)](https://codeclimate.com/github/samdiano/Book-A-Meal/test_coverage)

# Book-A-Meal
Book-A-Meal is an application that allows customers to make food orders and helps the food vendor know what the customers want to eat.

# About
The project entails having a caterer as the site administrator and can add meals to the application as well as set menus for a particular day. The customers, after signing up first, are then allowed to book meals online.

## Installation

- Clone or Download this project, run npm install to install or dependency

# Test

Test is a very essential part of all application because it ensures codes contributed to any project do not not break it

 - server side test -> ```npm run test```

 ## How it works

* Users can create an account and log in
* Admin (Caterer) should be able to manage (i.e: add, modify and delete) meal options in
the application. Examples of meal options are: Beef with rice, Beef with fries etc
* Admin (Caterer) should be able to setup menu for a specific day by selecting from the
meal options available on the system.
* Authenticated users (customers) should be able to see the menu for a specific day and
select an option out of the menu.
* Authenticated users (customers) should be able to change their meal choice.
* Admin (Caterer) should be able to see the orders made by the user
* Admin should be able to see amount of money made by end of day


* Authenticated users (customers) should be able to see their order history
* Authenticated users (customers) should be able to get notifications when the menu for
the day has been set.
* Admin (Caterer) should be able to see order history
* The application should be able to host more than one caterer.

<h3>ENDPOINTS</h3>
<hr>
<table>

  <tr>
      <th>Request</th>
      <th>End Point</th>
      <th>Action</th>
  </tr>
  <tr>
      <td>GET</td>
      <td>/api/v1/meals/</td>
      <td>Get all the meal options</td>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/meals/</td>
      <td>Add a meal option</td>
  </tr>
  <tr>
      <td>PUT</td>
      <td>/api/v1/meals/:mealId/</td>
      <td>Update the information of a meal option</td>
  </tr>
  <tr>
        <td>DELETE</td>
        <td>/api/v1/meals/:mealId/</td>
        <td>Remove a meal option</td>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/menu/</td>
      <td>Setup the menu for the day</td>
  </tr>
  
  <tr>
      <td>GET</td>
      <td>/api/v1/menu/</td>
      <td>Get the menu for the day</td>
  </tr>
  
  <tr>
      <td>POST</td>
      <td>/api/v1/orders/</td>
      <td>Select the meal option from the menu</td>
  </tr>

  <tr>
      <td>PUT</td>
      <td>/api/v1/orders/:orderId </td>
      <td>Modify an order</td>
  </tr>

  <tr>
      <td>GET</td>
      <td>/api/v1/orders/</td>
      <td>Get all the orders</td>
  </tr>
  
</table>
<br/>

# Technologies

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Nodejs](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Sequelize](http://docs.sequelizejs.com/)
* [Postgresql](https://www.postgresql.org/)

## Author 
____

Samuel George [samdiano](https://github.com/samdiano/)

## License 
____

This is licensed for your use, modification and distribution under the [MIT LICENSE](https://github.com/samdiano/Book-A-Meal/blob/development/LICENSE)

**Note**: This repository is managed through the PivotalTracker project [here](https://www.pivotaltracker.com/n/projects/2165512).

The UI is hosted [here](www.samdiano.github.io/Book-A-Meal).

