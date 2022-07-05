const jwt = require( 'jsonwebtoken' );
const bcrypt = require( 'bcrypt' );
const multer = require('multer');

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
	configFile() {
	const storage=	multer.diskStorage( {
			destination: function( req, file, cb ) {
				//files khi upload xong sẽ nằm trong thư mục "uploads" này - các bạn có thể tự định nghĩa thư mục này
				cb( null, 'uploads' );
			},
			filename: function( req, file, cb ) {
				// tạo tên file = thời gian hiện tại nối với số ngẫu nhiên => tên file chắc chắn không bị trùng
				const filename = Date.now() + '-' + Math.round( Math.random() * 1E9 );
				cb( null, filename + '-' + file.originalname );
			}
		} );
		//Khởi tạo middleware với cấu hình trên, lưu trên local của server khi dùng multer
		const upload = multer( { storage: storage } )
		return upload.array();
	}

}
module.exports = new middleware