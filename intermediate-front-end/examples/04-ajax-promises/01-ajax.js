define( function() {
  return {
    getPlayerInfo( callback ) {
      let url = '/players';
      this.doXHR( url, callback );
    },
    doXHR( url, callback, method ) {
      let myXHR = new XMLHttpRequest();
      method = method || 'GET';
      url = 'http://localhost:8000' + url; 
      myXHR.open( method, url );
      myXHR.onreadystatechange = function() {
        if ( myXHR.readyState === XMLHttpRequest.DONE && myXHR.status === 200 ) {
          console.log(myXHR.responseText);
          callback( myXHR );
        } else {
          console.log( 'non-200: ', myXHR );
        }
      };
      myXHR.send();
    }
  }
});
