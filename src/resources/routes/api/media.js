const express = require( 'express' );
const { mediaController } = require( '../../Controllers' );



const route = express.Router();

route.post( '/upload' ,mediaController.unloadFile );



module.exports = route;