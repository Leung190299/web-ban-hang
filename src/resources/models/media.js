const mongoose = require( 'mongoose' );

const mediaModel = new mongoose.Schema( {
	destination: String,
	mimetype: String,
	filename: String,
	path: String,
	date: {
		type: Date,
		default: Date.now
	}

} );
module.exports = mongoose.model( 'Media', mediaModel, 'Media' );