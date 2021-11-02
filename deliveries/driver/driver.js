'use strict';

const driver = require('../../eventpool');
require('../hub');
require('../vendor/vendor');

driver.on('pick-up', handleDelivery)

    function handleDelivery(payload){    
    console.log(`DRIVER: picked up ${payload.orderID}`);
    driver.emit(`in-transit`, payload);
    driver.emit(`delivered`, payload)
    }



module.exports = handleDelivery;