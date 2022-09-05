const mongoose = require( 'mongoose' );

const modelProduct = new mongoose.Schema( {
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true,
		default:0
	},
	priceNew: {
		type: Number,
		default:0
	},
	total: {
		type: Number,
		default:0
	},
	content: {
		type: String,
	},
	excrept: {
		type: String,
	},
	thumbnail: {
		type: mongoose.SchemaTypes.ObjectId,
		ref:'Media'
	},
	imageList: {
		type: [ mongoose.SchemaTypes.ObjectId ],
		ref: 'Media'
	},
	status: {
		type: Boolean,
		default: true,
	},
	categrory: {
		type: [ mongoose.SchemaTypes.ObjectId ],
		ref: 'Category'
	},
	date: {
		type: Date,
		default: Date.now
	}

} );
module.exports = mongoose.model( 'Product', modelProduct, 'Product' );