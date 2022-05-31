const postRoute = require( './post' );
const route = ( app ) => {

	app.use( '/', postRoute );
};
module.exports = route;