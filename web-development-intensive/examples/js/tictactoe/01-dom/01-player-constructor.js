function Player( newObj ) {
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
    domUpdateName();
  }
  this.blurb = function() {
    console.log( this.getName() + ' played ' + this.genre );
  };

  function domUpdateName() {
    var playerEl = document.getElementById( id );
    var nameEl = playerEl.getElementsByTagName('h2')[0];
    nameEl.innerHTML = name;
  }
}
