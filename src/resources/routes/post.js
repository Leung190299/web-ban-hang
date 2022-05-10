const express = require( 'express' );
const route = express.Router();

route.get( '/', (req, res) => {
 res.render('template/index.pug')
})

module.exports = route;