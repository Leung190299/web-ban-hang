const mongoose = require( 'mongoose' );

const menuModel = new mongoose.Schema( {
	name: String,
	link: String,
	parentID:mongoose.SchemaTypes.ObjectId
} );
module.exports = mongoose.model( 'Menu', menuModel, 'Menu' );