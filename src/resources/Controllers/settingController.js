const jwt = require( 'jsonwebtoken' );
const bcrypt = require( 'bcrypt' );
const { Users } = require( '../models' );
class settingController {

	async register( req, res ) {
		try {
			const isUser = await Users.findOne( {
				userName: req.body.userName,
			} );
			if ( isUser ) {
				res.status( 300 ).send( {
					status: 'fall',
					error: 'tài khoản đã tồi tại'
				} );
				return;
			}
			const user = new Users( {
				userName: req.body.userName,
				password: req.body.password,
				email: req.body.email
			} );
			await user.save();
			const token = jwt.sign( { userID: user._id }, process.env.APP_SECRET, { expiresIn: '1h' } );
			res.status( 200 ).send( {
				status: 'success',
				data: {
					token,
				}
			} );

		} catch ( error ) {
			console.log( error );
		}
	}
	async login( req, res ) {
		try {
			const user = await Users.findOne( { userName: req.body.userName } );
			if ( !user ) {
				res.status( 300 ).send( {
					status: 'fall',
					error: 'email không tồi tại'
				} );
			}
			if ( !bcrypt.compareSync( req.body.password, user.password ) ) {
				res.status( 300 ).send( {
					status: 'fall',
					error: 'mật khẩu không đúng'
				} );
			}
			const token = jwt.sign( { userID: user._id }, process.env.APP_SECRET, { expiresIn: '1h' } );
			res.status( 200 ).send( {
				status: 'success',
				data: {
					token,
				}
			} );
		} catch ( error ) {
			console.log( error );
		}
	}


}
module.exports = new settingController;