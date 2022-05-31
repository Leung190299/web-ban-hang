const express = require( 'express' );
const { json } = require( 'express/lib/response' );
const { userController } = require( '../../Controllers' );
const route = express.Router();

route.get( '/', userController.getUser )

module.exports = route;
