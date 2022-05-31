const mongoose = require( 'mongoose' );

async function connect() {
	try {
		console.log(process.env.PATH_CONNECT_DB)
		await mongoose.connect(process.env.PATH_CONNECT_DB).then(()=>console.log('connected'));
	} catch (error) {
		console.log(error)
	}
}
module.exports = { connect };