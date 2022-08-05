const express = require( 'express' );
const middleware = require( '../../../config/middleware' );

const { mediaController } = require( '../../Controllers' );
const route = express.Router();


route.post( '/upload',middleware.configFile().single('uploadedImages'), mediaController.unloadFile );
route.get( '/:id', mediaController.getOneFile );
route.post( '/delete', mediaController.deleteFile );
route.post( '/', mediaController.getFiles );
route.get( '/', mediaController.getAllFile );



module.exports = route;