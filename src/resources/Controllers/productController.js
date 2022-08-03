const { product } = require( "../models" );

class productController {
	async create( req, res ) {
		try {

			const newProduct = new product(  );
		const savedProduct=	await newProduct.save();
			res.status( 200 ).json(savedProduct);
		} catch ( error ) {
			res.status( 500 ).json( error );
		}

	}
	async update( req, res ) {
		try {
			const updateProduct = await product.findByIdAndUpdate( req.params.id,{$set:req.body},{new:true} );
			res.status( 200 ).send( updateProduct);
		} catch ( error ) {
			res.status( 500 ).send( error );
		}
	}
	async delete( req, res ) {
		try {
			await product.findByIdAndDelete( req.params.id );
			res.status( 200 ).json( req.params.id );
		} catch (error) {
			res.status(500).json(error)
		}
	}
	async getOne( req, res ) {
		try {
			const Product = await product.findById( req.params.id );
			res.status( 200 ).json(Product)
		} catch ( error ) {
			res.status(500).json(error)

		}
	}
	async getAll( req, res ) {
		try {
			const products = await product.find();
			res.status( 200 ).json( products );
		} catch (error) {
			res.status(500).json(error)
		}
	}
}
module.exports = new productController;