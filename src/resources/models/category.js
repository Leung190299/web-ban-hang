const mongoose = require( 'mongoose' );

const categroryModel = new mongoose.Schema( {
	name: String,
	content: String,
	image: String,
	parent: mongoose.SchemaTypes.ObjectId,
} );

module.exports = mongoose.model( 'Categtory', categroryModel, 'Categrory' );
