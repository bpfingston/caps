'use strict';

const client = require('socket.io-client');
const CAPS = client.connect('http://localhost:3030/caps');

function handleDelivery(payload) {
  console.log(`DRIVER: picked up ${payload.orderID}`);
  driver.emit(`in-transit`, payload);
  driver.emit(`delivered`, payload);
}

CAPS.on('pick-up', handleDelivery);

module.exports = handleDelivery;
