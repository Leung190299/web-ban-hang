import { option } from '../models';

class optionController{
	async create( req, res ) {

		try {
			const _option = new option( {
				name: req.body.name,
				value: req.body.value,
			} );
			await _option.save();
			res.status( 200 ).send( {
				status: 'seccess',
				data: _option._id
			} );

		} catch (error) {
			res.status( 300 ).send( {
				status: 'fall',
				error
			} );
		}

	}
	async
}