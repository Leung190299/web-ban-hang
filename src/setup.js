const express = require( 'express' );
const path = require( 'path' );
const route = require( './resources/routes' );
const port = 3000;

const app = express()
const App = {
	setup: () => {
		app.use( express.static( path.join( __dirname, 'public' ) ) );

		//set view engine
		app.set( 'view engine', 'pug' );
		//set directory view
		app.set( 'views', path.join( __dirname, 'resources','views' ) );
		route( app );

	},
	listen: () => {
		app.listen( port, () => {
			console.log('listening port:3000')
		} )
	}
};
module.exports = App;
