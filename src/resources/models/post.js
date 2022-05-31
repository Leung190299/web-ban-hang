const mongoose = require( 'mongoose' );
const postModel = new mongoose.Schema( {
	title: String,
	image: String,
	content: String,
	excerpt: String,

} );

module.exports = mongoose.model( 'Post', postModel, 'Post' );
