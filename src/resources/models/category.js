const mongoose = require( 'mongoose' );

const categroryModel = new mongoose.Schema( {
	name: String,
	content: String,
	image: {
		type: mongoose.SchemaTypes.ObjectId,
		ref:'Media'
	},
	parent:{
		type: mongoose.SchemaTypes.ObjectId,
		ref:'Category'
	},
	date: {
		type: Date,
		default: Date.now
	}
} );

module.exports = mongoose.model( 'Category', categroryModel, 'Category' );
