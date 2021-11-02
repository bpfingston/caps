'use strict';

const events = require('../eventpool');
require('./vendor/vendor')
require('./driver/driver')
var date = new Date();
var time = date.toString(); 


events.on('pick-up', payload => {
    console.log(`EVENT{event: pickup, time: ${time}, payload: ${JSON.stringify(payload)}}`)
})
events.on('in-transit', payload => {
    console.log(`EVENT{event: in-transit, time: ${time}, payload: ${JSON.stringify(payload)}}`)
})
events.on('delivered', payload => {
    console.log(`EVENT{event: delivered, time: ${time}, payload: ${JSON.stringify(payload)}}`)
})