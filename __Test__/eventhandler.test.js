'use strict';

const handleDelivery = require('../deliveries/vendor/vendor');
const handlePickUp = require('../deliveries/driver/driver');

require('../eventpool');
require('../deliveries/vendor/vendor');
require('../deliveries/driver/driver');
require('../deliveries/hub');

jest.spyOn(console, 'log');

describe('Testing event handlers', () => {
  it('can successfully log a in-transit/delivery event', () => {
    handleDelivery({ orderID: 8675309 });
    expect(console.log.mock.calls.length).toEqual(1);
  });
  it('can successfully log a pickup event', () => {
    handlePickUp({ orderID: 8675309 });
    expect(console.log.mock.calls.length).toEqual(5);
  });
});
