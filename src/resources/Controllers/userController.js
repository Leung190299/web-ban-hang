const jwt = require( 'jsonwebtoken' );
const bcrypt = require( 'bcrypt' );
const { Users } = require( '../models' );
class userController {

	async getUser( req, res ) {
		try {
			const users = await Users.find();
			res.status( 200 ).send( {
				status: 'seccess',
				data: users
			} );
		} catch ( error ) {
			console.log( error );
		}
	}
}
	module.exports = new userController;