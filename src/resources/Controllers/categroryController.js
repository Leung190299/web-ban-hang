const { categrory } = require( '../models' );

class categoryController {
	async create( req, res ) {
		try {

			const newCategrory = new categrory( req.body );
			const SevedCategroty = await newCategrory.save();
			res.status( 200 ).json( SevedCategroty );
		} catch ( error ) {
			res.status( 500 ).json( error );
		}
	}
	async update( req, res ) {
		try {
			const data = req.body;
			if ( data.parent === '' ) data[ 'parent' ] = null;
			if ( data.image === 'undefined' ) data[ 'image' ] = null;
			const UpadeCategrory = await categrory.findByIdAndUpdate( data.id, { $set: data }, { new: true } );
			res.status( 200 ).json( UpadeCategrory );
		} catch ( error ) {
			res.status( 500 ).send( error );
		}
	}
	async delete( req, res ) {
		try {
		const categoryDelete=	await categrory.findByIdAndDelete( req.body.id );
			res.status( 200 ).json( categoryDelete);

		} catch ( error ) {
			res.status( 500 ).send( error );
		}
	}
	async getOne( req, res ) {
		try {
			const Categrory = await categrory.findById( req.body.id );
			res.status( 200 ).json( Categrory );
		} catch ( error ) {
			res.status( 500 ).send( error );
		}
	}
	async getAll( req, res ) {
		try {
			let perPage = req.body.perPage || 12;
			let page = req.body.page || 1;
			await categrory
				.find()
				.populate( 'parent', 'name' )
				.populate( 'image' )
				.skip( ( perPage * page ) - perPage )
				.limit( perPage )
				.sort( { name: 'desc' } )
				.exec( ( err, categorys ) => {
					categrory.countDocuments( ( err, count ) => {
						if ( err ) res.status( 500 ).json( err );
						res.status( 200 ).json( {
							page,
							pages: Math.ceil( count / perPage ),
							categorys
						} );
					} );
				} );

		} catch ( error ) {
			res.status( 500 ).send( error );
		}
	}
}
module.exports = new categoryController;