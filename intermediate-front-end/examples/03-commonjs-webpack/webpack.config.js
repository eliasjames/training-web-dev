let examplePrefix = '02';
let confName =  examplePrefix + '-webpack.config.js';
console.log( '\n\nUSING ' + confName + '\n\n' );
module.exports = require( './' + confName );
