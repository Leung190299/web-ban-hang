import { option } from '../models';

class optionController{
	async create( req, res ) {
		try {
			const newOption = new option( req.body);
			const savedOption = await newOption.save();
			res.status( 200 ).send(savedOption._id );

		} catch (error) {
			res.status( 500 ).send(error );
		}

	}
	async update( req, res ) {
		try {
			const updateOption = await option.findByIdAndUpdate( req.params.id, { $set: req.body }, { new: true } );
			res.status( 200 ).json( updateOption );
		} catch (error) {
			res.status(500).json(error)
		}
	}
	async delete( req, res ) {
		try {
			await option.findByIdAndDelete( req.params.id );
			res.status(200).json(req.params.id)
		} catch (error) {
			res.status(500).json(error)
		}
	}
	async getOn( req, res ) {
		try {
			const Option = await option.findById( req.params.id );
			res.status( 200 ).json( Option );
		} catch (error) {
			req.status( 500 ).json( error );
		}
	}
	async getAll( req, res ) {
		try {
			const options = await option.find();
			res.status( 200 ).json( options );
		} catch ( error ) {
			res.status(500).json(error)

		}
	}
}