const fs = require( 'fs' );
const multer = require( 'multer' );
const path = require( 'path' );
const middleware = require( '../../config/middleware' );
const { media } = require( '../models' );

const upload_file = middleware.configFile().single( 'uploadedImages' );

class mediaController {

	async unloadFile( req, res ) {
		try {
			const file = req.file;
			if ( !file ) {
				const error = new Error( 'Please upload a file' );
				error.httpStatusCode = 400;
				res.status( 500 ).json( error );
			}
			const newMedia = new media( req.file );
			const savedMenu = await newMedia.save();
			res.status( 200 ).json( newMedia );

		} catch ( error ) {
			res.status( 500 ).json( error );
		}
	}
	async getFiles( req, res ) {
		try {
			let perPage = 12; // số lượng sản phẩm xuất hiện trên 1 page
			let page = req.body.page || 1;
			const mediass = await media.find() // find tất cả các data
				.skip( ( perPage * page ) - perPage ) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
				.limit( perPage )
				.sort( { date: 'desc' } )
				.exec( ( err, medias ) => {
					media.countDocuments( ( err, count ) => { // đếm để tính có bao nhiêu trang
						if ( err ) res.status( 500 ).json( err );
						res.status( 200 ).json( {
							page,
							pages: Math.ceil( count / perPage ),
							medias
						} ); // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
					} );
				} );

		} catch ( error ) {
			res.status( 500 ).json( error );
		}

	}
	async getOneFile( req, res ) {
		try {
			const file = await media.findById( req.params.id );
			res.status( 200 ).json( file );
		} catch ( err ) {
			res.status( 500 ).json( err );
		}
	}
	async deleteFile( req, res ) {
		try {
			const mediaDelete = await media.findByIdAndDelete( req.body.id );
			if ( mediaDelete ) {
				res.status( 200 ).json( mediaDelete );
				fs.unlinkSync( mediaDelete.path );
			} else {

				res.status( 200 ).json( 'khong tim thay file ' );
			}
		} catch ( error ) {
			res.status( 500 ).json( error );

		}
	}
	async getAllFile( req, res ) {
		try {
			const files = await media.find(); // find tất cả các data
			res.status( 200 ).json( files );
		} catch ( error ) {
			res.status( 500 ).json( error );
		}
	}

}
module.exports = new mediaController;