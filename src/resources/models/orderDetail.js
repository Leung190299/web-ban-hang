const mongoose = require( 'mongoose' );

const orderDetail = new mongoose.Schema( {
	oderId: mongoose.SchemaTypes.ObjectId,
	productId: mongoose.SchemaTypes.ObjectId,
	totalPrice: Number,
	count: Number,

} );
module.exports = mongoose.model( 'OrderDetail', orderDetail, 'OrderDetail' );