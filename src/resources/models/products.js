const mongoose = require( 'mongoose' );

const modelProduct = new mongoose.Schema( {
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	detal: {
		type: String,
	},
	imageList: [ mongoose.SchemaTypes.ObjectId ],


	priceNew: {
		type: Number,
	},
	status: {
		type: Boolean,
		default:true,
	},
	categrory: {
		type: mongoose.SchemaTypes.ObjectId,

	}

} );
module.exports = mongoose.model( 'Product', modelProduct, 'Product' );