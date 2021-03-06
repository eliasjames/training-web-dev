(function () {
  var ticTacToe = {
    binds: {},
    games: {},
    newGame() {
      this.gameId = new Date().valueOf();
      this.games[ this.gameId ] = new ticTacToe.Game( this.gameId );
      this.binds[ this.gameId ] = new this.Bind( this );
      this.binds[ this.gameId ].initGameUi();
      this.games[ this.gameId ].startGame();
      return this.Game.latestId;
    }
  };
  document.addEventListener( 'startNewGame', ()=>{
    ticTacToe.newGame(); 
  });
  requirejs( [ '00-ticTacToe.js' ], ( Game )=>{
    ticTacToe.Game = Game;
    requirejs( [ '00-bind.js' ], ( Bind )=>{
      ticTacToe.Bind = Bind;
      $( document ).ready( ()=>{
        ticTacToe.newGame();
      });
    });
  });
  requirejs( [ '00-controls' ], ()=>{});
})();
