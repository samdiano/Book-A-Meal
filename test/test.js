import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

chai.use(chaiHttp);
chai.should();

describe('Meals', () => {
  it('should get ALL meals on /meals GET', (done) => {
    chai.request(server)
      .get('/api/v1/meals')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('Should update a meal', (done) => {
    chai.request(server)
      .put('/api/v1/meals/1')
      .send({
        id: 2,
        userId: 5,
        title: 'Banana',
        description: 'Fruit',
        price: 1000,
      })
      .end((err, res) => {
        expect(res.body.message).to.equal('Meal updated successfully');
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status').equal('Success');
        done();
      });
  });

  it('Should add a meal to the meals', (done) => {
    chai.request(server)
      .post('/api/v1/meals')
      .send({
        id: 4,
        userId: 5,
        title: 'Strawberries',
        description: 'Fruity delicacy',
        price: 1000,
      })
      .end((err, res) => {
        expect(res.body.message).to.equal('Meal added successfully');
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('status').equal('Success');
        done();
      });
  });

  it('Should delete a meal from the meals', (done) => {
    chai.request(server)
      .delete('/api/v1/meals/1')

      .end((err, res) => {
        expect(res.body.message).to.equal('Meal was successfully removed');
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status').equal('Success');
        done();
      });
  });
});


describe('Menu', () => {
  it('should get the menu for the day  /api/v1/menu GET', (done) => {
    chai.request(server)
      .get('/api/v1/menu')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('Should add a meal to the menu', (done) => {
    chai.request(server)
      .post('/api/v1/menu')
      .send({
        id: 3,
        user_id: 12,
        title: 'Bread',
        description: 'delicious Carbohydrate',
        price: 500,
        date: 3 - 4 - 2018,
      })
      .end((err, res) => {
        expect(res.body.message).to.equal('Meal added to Menu successfully');
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('status').equal('Success');
        done();
      });
  });
  it('Should update a meal in the menu', (done) => {
    chai.request(server)
      .put('/api/v1/menu/1')
      .send({
        id: 1,
        user_id: 12,
        title: 'Bread',
        description: 'delicious Carbohydrate',
        price: 500,
        date: 3 - 4 - 2018,
      })
      .end((err, res) => {
        expect(res.body.message).to.equal('Menu updated successfully');
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status').equal('Success');
        done();
      });
  });

  it('Should delete a meal from the menu', (done) => {
    chai.request(server)
      .delete('/api/v1/menu/1')

      .end((err, res) => {
        expect(res.body.message).to.equal('Meal was successfully removed from Menu');
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status').equal('Success');
        done();
      });
  });
});

describe('Orders', () => {
  it('should get the orders ', (done) => {
    chai.request(server)
      .get('/api/v1/orders')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('Should add a meal to the menu', (done) => {
    chai.request(server)
      .post('/api/v1/orders')
      .send({
        id: 4,
        userId: 25,
        mealId: 7,
        quantity: 5,
        price: 7000,
      })
      .end((err, res) => {
        expect(res.body.message).to.equal('Meal booked to Order successfully');
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('status').equal('Success');
        done();
      });
  });
  it('Should update a meal in the menu', (done) => {
    chai.request(server)
      .put('/api/v1/orders/2')
      .send({
        id: 2,
        userId: 25,
        mealId: 7,
        quantity: 5,
        price: 7500,
      })
      .end((err, res) => {
        expect(res.body.message).to.equal('Order updated successfully');
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status').equal('Success');
        done();
      });
  });
});
