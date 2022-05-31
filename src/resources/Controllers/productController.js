const { product } = require( "../models" );

class productController {
	async create( req, res ) {
		try {

			const prod = new product( {
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
				data: prod._id
			} );
		} catch ( error ) {
			res.status( 300 ).send( {
				status: 'fall',
				error
			} );
		}

	}
	async update( req, res ) {
		try {
			const prod = await product.findOneAndUpdate( {
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
				data: prod
			} );
		} catch ( error ) {
			res.status( 300 ).send( {
				status: 'fall',
				error
			} );
		}
	}
}
module.exports = new productController;