const { menu } = require( '../models' );

class menuController{
	async create( req, res ) {
		try {
			const newMenu = new menu( req.body );
			const savedMenu= 	await newMenu.save();
			res.status( 200 ).json(savedMenu._id  );
		} catch (error) {
			res.status( 500 ).send(error);
		}
	}
	async update( req, res ) {
		try {
			const updateMenu = await menu.findByIdAndUpdate( req.params.id, { $set: req.body }, { new: true } );
			res.status( 200 ).send( updateMenu );
		} catch ( error ) {
			res.status( 500 ).send(error);
		}
	}
	async delete( req, res ) {
		try {
			await menu.findByIdAndDelete( req.params.id );
			res.status( 200 ).json( req.params.id );
		} catch (error) {
			req.status( 500 ).json( error );
		}
	}
	async getOne( req, res ) {
		try {
			const Menu = await menu.findById( req.params.id );
			res.status( 200 ).json(Menu)

		} catch ( error ) {
			req.status(500).json(error)

		}
	}
	async getAll( req, res ) {
		try {
			const menus = await menu.find();
			req.status( 200 ).json( menus );
		} catch (error) {
			req.status(500).json(error)
		}
	}
}