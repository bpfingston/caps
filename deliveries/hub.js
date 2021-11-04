'use strict';

const socketio = require('socket.io');
const PORT = process.env.PORT || 3030;
const server = socketio(PORT);
var date = new Date();
var time = date.toString(); 

const CAPS = server.of('/caps');

CAPS.on('connection', (socket) => {
	console.log('socket is connected on', socket.id);
	socket.on('join', (payload) => {
		socket.join(payload);
	});
	socket.on('pick-up', (payload) => {
		console.log(
			`EVENT {event: pick-up, time: ${time}, payload: ${JSON.stringify(
				payload
			)}}`
		);
		CAPS.emit('pick-up', payload);
	});
	socket.on('in-transit', (payload) => {
		console.log(
			`EVENT {event: in-transit, time: ${time}, payload: ${JSON.stringify(
				payload
			)}}`
		);
		CAPS.emit('in-transit', payload);
	});
	socket.on('delivered', (payload) => {
		console.log(
			`EVENT {event: delivered, time: ${time}, payload: ${JSON.stringify(
				payload
			)}}`
		);
		CAPS.emit('delivered', payload);
	});
});