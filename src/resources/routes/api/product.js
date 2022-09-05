const express = require( 'express' );
const { productController } = require( '../../Controllers' );
const route = express.Router();

route.post( '/create', productController.create );
route.post( '/update', productController.update );
route.post( '/delete', productController.delete );
route.get( '/', productController.getById );
route.post( '/', productController.getAll );


module.exports = route;