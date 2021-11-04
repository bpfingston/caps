'use strict';

const faker = require('faker')
const client = require('socket.io-client');
const CAPS = client.connect('http://localhost:3030/caps');

var customerName = faker.name.findName();
var storeName = '1-206-flowers';
var address = faker.address.streetAddress();
var orderId = faker.finance.account();

CAPS.emit('join', storeName)
CAPS.on('delivered', handlePickUp)

function handlePickUp(payload){
    console.log('Thank you', payload.orderID)
};

CAPS.emit('pick-up', {
    store: storeName,
    orderID: orderId,
    customer: customerName,
    address: address
})

module.exports = handlePickUp