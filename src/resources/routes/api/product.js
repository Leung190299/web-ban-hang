const express = require( 'express' );
const { productController } = require( '../../Controllers' );
const route = express.Router();

route.post( '/create', productController.create );
route.post( '/update', productController.update );


module.exports = route;