module.exports = (function() {
  let Exp = require( 'express' ),
    app = new Exp();

  app.get( '/players', ( req, res )=>{
    console.log( 'Heard /players' );
    res.json({
      playerAttributesObj: [
        {
          'letter': 'x',
          'name'  : 'Willie Nelson',
          'number'  : 1
        },
        {
          'letter': 'o',
          'name'  : 'Miles Davis',
          'number'  : 2
        }
      ],
    });
  });
  app.get( '/', ( req, res )=>{
    res.redirect( '01-ajax.html' );
  });
  app.use( Exp.static( __dirname ));

  console.log( 'Listening!' );
  app.listen( 8000 );

  function pingBack( res ) {
    res.send( data );
  }
})();
