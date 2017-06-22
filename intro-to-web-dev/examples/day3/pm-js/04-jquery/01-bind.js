$(document).ready( function() {
  bindGameUI();
  bindCurrentPlayer();
  startGame();
});

function bindCurrentPlayer() {
  $( document ).on( 'changePlayer', function( e ) {
    $( '#current-player' ).html( 'Current player: ' + e.detail );
  });
}
function bindGameUI() {
  $( 'input' ).on( 'click', function( e ) {
      var clickTarget = e.target;
      console.log( 'keedl', clickTarget.value, clickTarget.name );
      acceptInput( clickTarget.name );
  });
}
