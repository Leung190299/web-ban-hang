const mongoose = require( 'mongoose' );

const optionModel = new mongoose.Schema( {
	name: String,
	value: String,

} );
module.exports = mongoose.model( 'Option', optionModel, 'Option' );