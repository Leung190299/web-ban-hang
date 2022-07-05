const express = require( 'express' );
const path = require( 'path' );
const dotenv = require( 'dotenv' );
const bodyParser = require('body-parser')
// require folder
const routeApp = require( './resources/routes/app' );
const routeApi = require( './resources/routes/api' );
const db = require( './config/db' );

global.appRoot = path.resolve(__dirname);
//dotenv
dotenv.config({path:path.join( __dirname, '.env' )})

const app = express()
const App = {
	setup: () => {
		app.use( express.static( path.join( __dirname, 'public' ) ) );

		//connect db
		db.connect();

		//set view engine
		app.set( 'view engine', 'pug' );

		//set directory view
		app.set( 'views', path.join( __dirname, 'resources', 'views' ) );

		// set body parser
		app.use(bodyParser.urlencoded({ extended: false ,limit:'50mb'}))
		app.use(bodyParser.json({limit:'50mb'}))

		// set router
		routeApp( app );
		routeApi( app )


	},
	listen: () => {
		app.listen( process.env.PORT, () => {
			console.log('listening port:3000')
		} )
	}
};
module.exports = App;
