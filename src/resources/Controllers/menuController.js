const { menu } = require( '../models' );

class menuController{
	async create( req, res ) {
		try {
			const _menu = new menu( {
				name: req.body.name,
				link: req.body.link,
				parentID:req.body.parentID,
			} );
			await _menu.save();
			res.status( 200 ).send( {
				status: 'seccess',
				data: _menu._id
			} );
		} catch (error) {
			res.status( 300 ).send( {
				status: 'fall',
				error
			} );
		}
	}
	async update( req, res ) {
		try {
			const _menu = await menu.findOneAndUpdate( {
				_id: req.body.id
			}, {
				name: req.body.name,
				link: req.body.link,
				parentID:req.body.parentID,
			} );
			await _menu.save();
			res.status( 200 ).send( {
				status: 'seccess',
				data: _menu
			} );
		} catch ( error ) {
			res.status( 300 ).send( {
				status: 'fall',
				error
			} );
		}
	}
}