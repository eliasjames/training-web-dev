document.addEventListener( 'DOMContentLoaded', function() {
  var inputs = document.getElementsByTagName( 'input' );
  for ( var i=0; i < inputs.length; i++ ) {
    inputs[ i ].addEventListener( 'click', function( e ) {
      var clickTarget = e.target;
      console.log( 'keedl', clickTarget.value, clickTarget.name );
      acceptInput( clickTarget.name );
    });
  }
});
