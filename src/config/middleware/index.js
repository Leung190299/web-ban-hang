const jwt = require( 'jsonwebtoken' );
const bcrypt = require( 'bcrypt' );


class middleware {
	authenToken( req, res, next ) {
		const authorizationHeader = req.headers[ 'authorization' ];
		const token = authorizationHeader.split( ' ' )[ 1 ];
		if ( !token ) res.send( { status: 'fall', err: 'authorization không hợp lệ' } );
		jwt.verify( token, process.env.APP_SECRET, ( err, data ) => {
			if ( err ) res.send( { status: 'fall', err: 'authorization không hợp lệ' } );
			next();
		} );
	}

	hashPasssword( next ) {
		let user = this;
		bcrypt.hash( user.password, 10, function( err, hash ) {
			if ( err ) {
				return next( err );
			}
			user.password = hash;
			next();
		} );
	}


}
module.exports = new middleware