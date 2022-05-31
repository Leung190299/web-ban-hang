const routeUser = require( './user' );
const routeSetting = require( './setting' );
const middleware = require('../../../config/middleware')
const route = (app) => {
	app.use( '/api/user',middleware.authenToken, routeUser );
	app.use('/api', routeSetting)
};
module.exports = route