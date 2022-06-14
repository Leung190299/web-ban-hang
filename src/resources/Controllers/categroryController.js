const { categrory } = require( '../models' );

class categoryController{
	async create( req, res ) {
		try {
			const cate = new categrory( {
				name: req.body.name,
				content: req.body.content,
				image: req.body.image,
				parent:req.body.parent,
			} );
			await cate.save();
			res.status( 200 ).send( {
				status: 'seccess',
				data: cate._id
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
			const cate = await categrory.findOneAndUpdate( {
				_id: req.body.id
			}, {
				name: req.body.name,
				price: req.body.price,
				detal: req.body.detal,
				Image: req.body.Image,
				priceNew: req.body.priceNew,
				status: true,
				categrory: req.body.categrory
			} );
			await prod.save();
			res.status( 200 ).send( {
				status: 'seccess',
				data: cate
			} );
		} catch ( error ) {
			res.status( 300 ).send( {
				status: 'fall',
				error
			} );
		}
	}
}