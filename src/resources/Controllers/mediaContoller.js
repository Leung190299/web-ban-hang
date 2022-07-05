const fs = require( 'fs' );
const mime = require( 'mime' );
const path = require('path');
class mediaController {

	unloadFile( req, res ) {
		// to declare some path to store your converted image
		try {

			// to declare some path to store your converted image
			const pathImage = path.resolve(appRoot,'public/images/'+Date.now()+'.png')

			const imgdata = req.body.base64image;

			// to convert base64 format into random filename
			const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');

			fs.writeFileSync(pathImage, base64Data,  {encoding: 'base64'});

			return res.send(pathImage);

		} catch ( e ) {
			console.log(e);
			res.send(e);
		}
	}
}
module.exports = new mediaController;