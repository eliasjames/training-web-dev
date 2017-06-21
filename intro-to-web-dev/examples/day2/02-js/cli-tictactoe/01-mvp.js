let currentPlayer;
let movePromptObj = {
  'playerone': 'Player one, row and column',
  'playertwo': 'Player two, row and column',
  'winone': 'Player one wins',
  'wintwo': 'Player two wins',
  'badinput': 'Bad input, try again'
};
let moveStorage = [];

promptInput( 'player' );

function acceptInput( moveCoords ) {
  // basic input check
  if ( !moveCoords || moveCoords.length != 3 || typeof convertCoordsToArray( moveCoords ) !== 'number' ) {
    throw movePromptObj[ 'badinput' ];  
  }
  gameCycle( convertCoordsToArray( moveCoords ));
}
function checkWin() {
  let winConditions = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ],
    [ 2, 4, 6 ]
  ], 
    win = false,
    result;

  for (let i=0; i < winConditions.length; i++ ) {
    result = '';
    winConditions[ i ].forEach( function( eachIndex ) {
      result += moveStorage[ eachIndex ];
      if ( result === 'xxx' || result === 'ooo' ) {
        win = true;
        // stop looping
        ( win ) ? i = winConditions.length : undefined; 
      }
    });
  }
  return win;
}
function changePlayer() {
  getOrChangePlayer( true );
}
function convertCoordsToArray( moveCoords ) {
  let splitCoords = moveCoords.split( '' );
  return parseInt( splitCoords[0] ) * 3 + parseInt ( splitCoords[2] );
}
function getOrChangePlayer( change ) {
  if ( currentPlayer === undefined ) { 
    currentPlayer = true;
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
function promptInput( promptMessageKey ) {
  let player = getCurrentPlayer();
  let specificPrompt = promptMessageKey + player.name;
  let result = window.prompt( movePromptObj[ specificPrompt ], '0x0');
  acceptInput( result );
}
function storeInput( moveCoord ) {
  let player = getCurrentPlayer();
  moveStorage[ moveCoord ] = player.letter;
}
function gameCycle( moveCoord ) {
  storeInput( moveCoord );

  console.log( 'keedl ms', moveStorage );

  if ( !checkWin() ) {
    changePlayer( true );
    promptInput( 'player' );
    return;
  }
  alert( movePromptObj[ 'win' + getCurrentPlayer().name ] );
}
