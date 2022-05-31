const mongoose = require( 'mongoose' );

const orderModel = new mongoose.Schema( {
	userId: mongoose.SchemaTypes.ObjectId,
	typePayment: String,

} );
module.exports = mongoose.model( 'Order', orderModel, 'Order' );
