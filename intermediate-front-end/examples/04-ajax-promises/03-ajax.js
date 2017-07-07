define( function() {
  return {
    getPlayerInfo( resolve, reject ) {
      let url = '/players';
      return this.doXHR( url, resolve, reject );
    },
    getPlayerRecord( playerNumber, resolve, reject ) {
      // faking a RESTful API on the backend
      // only playerNumber 1 is valid
      let url = '/player/' + playerNumber + '/record';
      return this.doXHR( url, resolve, reject );
    },
    getPlayersHighscore( resolve, reject ) {
      let url = '/players/highscorer';
      return this.doXHR( url, resolve, reject );
    },
    doXHR( url, resolve, reject, method ) {
      return new Promise(( resolve, reject )=>{
        let myXHR = new XMLHttpRequest();
        method = method || 'GET';
        url = 'http://localhost:8000' + url; 
        myXHR.open( method, url );
        myXHR.onload = ()=>{
          console.log( 'responseText', myXHR.responseText );
          resolve( myXHR );
        };
        myXHR.onerror = ()=>{
          console.log( 'XHR error: ', myXHR );
          reject( myXHR );
        };
        myXHR.send();
    });
    }
  }
});
