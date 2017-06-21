let currentPlayer;
let movePromptObj = {
  'playerone': 'Player one, row and column',
  'playertwo': 'Player two, row and column',
  'badinput': 'Bad input, try again'
};
let moveStorage = [];

promptInput( 'player' );

function acceptInput( moveCoords ) {
  // basic input check
  if ( !moveCoords || moveCoords.length != 3 || typeof convertCoordsToArray( moveCoords ) !== 'number' ) {
    throw movePromptObj[ 'badinput' ];  
  }
  storeInput( convertCoordsToArray( moveCoords ));
}
function getOrChangePlayer( change ) {
  if ( !currentPlayer ) { 
    currentPlayer = false;
  }
  if ( change ) {
    currentPlayer = !currentPlayer;
  }
  return currentPlayer;
}
function getCurrentPlayer() {
  return ( getOrChangePlayer( false )) ? 
    { 
      'letter': 'x', 
      'name'  : 'one',
    } : { 
      'letter': 'o',
      'name'  : 'two'
    };
}
function convertCoordsToArray( moveCoords ) {
  let splitCoords = moveCoords.split( '' );
  return parseInt( splitCoords[0] ) + parseInt ( splitCoords[2] );
}
function promptInput( promptMessageKey ) {
  let currentPlayer = getCurrentPlayer();
  let specificPrompt = promptMessageKey + currentPlayer.name;
  let result = window.prompt( movePromptObj[ specificPrompt ], '0x0');
  acceptInput( result );
}
function storeInput( moveCoord ) {
  let player = getCurrentPlayer();
  moveStorage[ moveCoord ] = player;
  getOrChangePlayer( true );
  console.log( 'keedl ms', moveStorage );
  promptInput( 'player' );
}
