const routeUser = require( './user' );
const routeSetting = require( './setting' );
const routeProduct = require( './product' );
const routeMedia = require( './media' );
const middleware = require('../../../config/middleware')
const route = (app) => {
	app.use( '/api/user',middleware.authenToken, routeUser );
	app.use( '/api/product', routeProduct );
	app.use( '/api/media', routeMedia );
	app.use('/api', routeSetting)
};
module.exports = route