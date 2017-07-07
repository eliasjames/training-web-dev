define( function() {
  return {
    getPlayerInfo( callback ) {
      let url = '/players';
      this.doXHR( url, callback );
    },
    getPlayerRecord( playerNumber, callback ) {
      // faking a RESTful API on the backend
      // only playerNumber 1 is valid
      let url = '/player/' + playerNumber + '/record';
      this.doXHR( url, callback );
    },
    getPlayersHighscore( callback ) {
      let url = '/players/highscorer';
      this.doXHR( url, callback );
    },
    doXHR( url, callback, method ) {
      let myXHR = new XMLHttpRequest();
      method = method || 'GET';
      url = 'http://localhost:8000' + url; 
      myXHR.open( method, url );
      myXHR.onreadystatechange = function() {
        if ( myXHR.readyState === XMLHttpRequest.DONE && myXHR.status === 200 ) {
          console.log( 'responseText', myXHR.responseText );
          callback( myXHR );
        } else if ( myXHR.readyState === XMLHttpRequest.DONE && myXHR.status !== 200 ) {
          console.log( 'non-200: ', myXHR );
        }
      };
      myXHR.send();
    }
  }
});
