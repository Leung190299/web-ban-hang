const mongoose = require( 'mongoose' );

const categroryModel = new mongoose.Schema( {
	name: String,
	content: String,
	image: String,
	parent:String,
} );

module.exports = mongoose.model( 'Categtory', categroryModel, 'Categrory' );
