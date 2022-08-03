const { categrory } = require( '../models' );

class categoryController{
	async create( req, res ) {
		try {
			const newCategrory = new categrory( req.body);
			const SevedCategroty = await newCategrory.save();
			res.status( 200 ).json( SevedCategroty._id );
		} catch (error) {
			res.status( 500 ).json( error);
		}
	}
	async update( req, res ) {
		try {
			const UpadeCategrory = await categrory.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
			res.status( 200 ).json(UpadeCategrory );
		} catch ( error ) {
			res.status( 500 ).send( error );
		}
	}
	async delete( req, res ) {
		try {
			await categrory.findByIdAndDelete( req.params.id );
			res.status( 200 ).json( req.params.id );
		} catch (error) {
			res.status( 500 ).send( error );
		}
	}
	async getOne( req, res ) {
		try {
			const Categrory = await categrory.findById( req.params.id );
			res.status( 200 ).json( Categrory );
		} catch (error) {
			res.status( 500 ).send( error );
		}
	}
	async getAll( req, res ) {
		try {
			const Categrorys = await categrory.find();
			res.status( 200 ).json( Categrorys );
		} catch (error) {
			res.status( 500 ).send( error );
		}
	}
}