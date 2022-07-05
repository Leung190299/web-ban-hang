const mongoose = require( 'mongoose' );

const mediaModel = new mongoose.Schema( {
	path: String,
	type:String,
} );
module.exports = mongoose.model( 'Media', mediaModel, 'Media' );