define( [ '02-config', '02-ajax' ], function( GC, ajax ) {
  return function makeGameEngine( gameId ) {
    let currentPlayer,
      moveStorage = [];

    return {
      acceptInput( moveCoords ) {
        // basic input check
        if ( !moveCoords || moveCoords.length != 3 || typeof this.convertCoordsToArray( moveCoords ) !== 'number' ) {
          throw GC.game.movePromptObj[ 'badinput' ];  
        }
        this.gameCycle( this.convertCoordsToArray( moveCoords ));
      },
      checkWin() {
        var winConditions = [
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

        for (var i=0; i < winConditions.length; i++ ) {
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
      },
      changePlayer() {
        this.getOrChangePlayer( true );
      },
      convertCoordsToArray( moveCoords ) {
        var splitCoords = moveCoords.split( '' );
        return parseInt( splitCoords[0] ) * 3 + parseInt ( splitCoords[2] );
      },
      getOrChangePlayer( change ) {
        // TODO: comment this line back to the beginning
        if ( currentPlayer === undefined && !change ) { 
          this.getOrChangePlayer( true );
        }
        if ( change ) {
          currentPlayer = !currentPlayer;
          changePlayerEvent = new CustomEvent( 'changePlayer', { 
            'detail': { 
              gameId: this.gameId,
              name: this.getCurrentPlayer().name 
            }
          });
          document.dispatchEvent( changePlayerEvent );
        }
        return currentPlayer;
      },
      getCurrentPlayer() {
        return ( this.getOrChangePlayer( false )) ? 
          GC.game.playerAttributesObj[0] :
          GC.game.playerAttributesObj[1];
      },
      promptInput( promptMessageKey ) {
        var player = this.getCurrentPlayer();
        var specificPrompt = promptMessageKey + player.name;
        var result = window.prompt( GC.game.movePromptObj[ specificPrompt ], '0x0');
        acceptInput( result );
      },
      setPlayerInfo(){
        // Anti-Pattern: serially dependent async calls nest infinitely
        // a.k.a. the "Pyramid of Doom"
        // changing the backend API could solve the problem
        // but often that's not available as an option
        ajax.getPlayerInfo(( data )=>{
          let resp = JSON.parse( data.response );
          if ( resp ) {
            GC.game.playerAttributesObj = resp.playerAttributesObj;
            // TODO: hook up updatePlayer
            document.dispatchEvent( new Event( 'updatePlayer' ));
            
            // hardcoded to 1 for example purposes
            ajax.getPlayerRecord( '1', ( data )=>{
              GC.game.playerAttributesObj[ 1 ].record = resp.playerRecord;
              
              ajax.getPlayersHighscore(( data )=>{
                // total wins from player record and compare against high score
                console.log( 'highscorer', data.response );
              });
            });
            return;
          }
          // this if() is a simple error/data check
          // but what if we had to fork here on some arbitrary condition?
          // the nested functions would all have to be copied
          // a recipe for frustration
          throw new Error( "setPlayerInfo, no data" );
        });
      },
      storeInput( moveCoord ) {
        var player = this.getCurrentPlayer();
        moveStorage[ moveCoord ] = player.letter;
      },
      gameCycle( moveCoord ) {
        this.storeInput( moveCoord );

        if ( !this.checkWin() ) {
          this.changePlayer();
          if ( GC.game.cliMode ) {
            promptInput( 'player' );
          }
          return;
        }
        alert( GC.game.movePromptObj[ 'win' + this.getCurrentPlayer().name ] );
      },
      gameId: gameId,
      startGame() {
        if ( GC.game.cliMode ) {
          promptInput( 'player' );
        } else {
          this.setPlayerInfo()
          this.getOrChangePlayer();
        }
      }
    }
  };
});
