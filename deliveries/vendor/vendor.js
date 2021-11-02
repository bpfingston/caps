'use strict';

const vendor = require('../../eventpool');
require('../driver/driver')
require('../hub')
const faker = require('faker')

var customerName = faker.name.findName();
var storeName = faker.company.companyName();
var address = faker.address.streetAddress();
var orderId = faker.finance.account();

vendor.on('delivered', handlePickUp)



function handlePickUp(payload){
    console.log('Thank you', payload.orderID)
};


vendor.emit('pick-up', {
    store: storeName,
    orderID: orderId,
    customer: customerName,
    address: address
})

module.exports = handlePickUp