const express = require( 'express' );
const {settingController} = require( '../../Controllers' );
const route = express.Router();

route.post( '/register', settingController.register )

route.post( '/login', settingController.login )

module.exports = route;
