function Player( newObj ) {
  var playerEl, nameEl; 

  var name = newObj.name;
  var id = newObj.id;
  this.genre = newObj.genre;
  this.image = newObj.image;
  this.bio = newObj.bio;
  
  this.getId = function() {
    return id;
  }
  this.getName = function() {
    return name;
  }
  this.setName = function( newName ) {
    name = newName;
    if ( !playerEl || !nameEl ) {
      domGetNodes();
    }
    domUpdateName();
  }
  this.blurb = function() {
    console.log( this.getName() + ' played ' + this.genre );
  };

  function domGetNodes() {
    playerEl = document.getElementById( id );
    nameEl = playerEl.getElementsByTagName( 'h2' )[0];
  }
  function domUpdateName() {
    nameEl.innerHTML = name;
    console.log( 'keedl', playerEl );
  }
}
