const mongoose = require( 'mongoose' );
const middleware = require('../../config/middleware')


const modelUser = new mongoose.Schema( {
	userName: {
		type: String,
		required: true
	},
	password:{
		type: String,
		required:true
	},
	email: {
		type: String,
		required:true
	},
	userRegistered: {
		type: Date,
		default: Date.now()
	},
	displayName: String
} );
// ma hoa mat khau
modelUser.pre( 'save', middleware.hashPasssword)

module.exports = mongoose.model( 'user', modelUser, 'Users' );