document.addEventListener( 'DOMContentLoaded', function() {
  bindGameUI();
  bindCurrentPlayer();
  startGame();
});

function bindCurrentPlayer() {
  document.addEventListener( 'changePlayer', function( e ) {
    document.getElementById( 'current-player' ).innerHTML = 'Current player: ' + e.detail;
  });
}
function bindGameUI() {
  var inputs = document.getElementsByTagName( 'input' );
  for ( var i=0; i < inputs.length; i++ ) {
    inputs[ i ].addEventListener( 'click', function( e ) {
      var clickTarget = e.target;
      console.log( 'keedl', clickTarget.value, clickTarget.name );
      acceptInput( clickTarget.name );
    });
  }
}
