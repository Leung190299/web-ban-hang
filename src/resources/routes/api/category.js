const express = require( 'express' );
const categroryController = require( '../../Controllers/categroryController' );

const route = express.Router();

route.post( '/create', categroryController.create );
route.post( '/update', categroryController.update );
route.post( '/delete', categroryController.delete );
route.post( '/', categroryController.getAll );

module.exports= route