const { product } = require( "../models" );

class productController {
	async create( req, res ) {
		try {

			const newProduct = new product( req.body );
			const savedProduct = await newProduct.save();
			res.status( 200 ).json( savedProduct );
		} catch ( error ) {
			res.status( 500 ).json( error );
		}

	}
	async update( req, res ) {
		try {
			const updateProduct = await product.findByIdAndUpdate( req.body.id, { $set: req.body }, { new: true } );
			res.status( 200 ).json( updateProduct );
		} catch ( error ) {
			res.status( 500 ).json( error );
		}
	}
	async delete( req, res ) {
		try {
			const productDelete = await product.findByIdAndDelete( req.body.id );
			res.status( 200 ).json( productDelete );
		} catch ( error ) {
			res.status( 500 ).json( error );
		}
	}
	async getOne( req, res ) {
		try {
			const Product = await product.findById( req.params.id );
			res.status( 200 ).json( Product );
		} catch ( error ) {
			res.status( 500 ).json( error );

		}
	}
	async getAll( req, res ) {
		try {
			let perPage = req.body.perPage || 12;
			let page = req.body.page || 1;
			await product
				.find()
				.populate( 'imageList', 'filename' )
				.populate( 'thumbnail', 'filename' )
				.populate( 'categrory','name' )
				.skip( ( perPage * page ) - perPage )
				.limit( perPage )
				.sort( { date: 'desc' } )
				.exec( ( err, products ) => {
					product.countDocuments( ( err, count ) => {
						if ( err ) res.status( 500 ).json( err );
						res.status( 200 ).json( {
							page,
							pages: Math.ceil( count / perPage ),
							products
						} );
					} );
				} );

		} catch ( error ) {
			res.status( 500 ).send( error );
		}
	}
	async getById( req, res ) {
		try {

		const _product	= await product
				.findById(req.query.id)
				.populate( 'imageList', 'filename' )
				.populate( 'thumbnail', 'filename' )
				.populate( 'categrory','name' )
				res.status( 200 ).send( _product );
		} catch ( error ) {
			res.status( 500 ).send( error );
		}
	}
}
module.exports = new productController;