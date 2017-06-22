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
  this.setName = setName;

  this.blurb = function() {
    console.log( this.getName() + ' played ' + this.genre );
  };

  function domGetNodes() {
    playerEl = document.getElementById( id );
    nameEl = playerEl.getElementsByTagName( 'h2' )[0];
    inputEl = playerEl.getElementsByTagName( 'input' )[0];
    inputEl.addEventListener( 'change', function( event ) {
      setName( event.target.value );
    });
  }
  function domUpdateName() {
    nameEl.innerHTML = name;
    inputEl.value = name;
  }
  function setName ( newName ) {
    name = newName;
    if ( !playerEl || !nameEl ) {
      domGetNodes();
    }
    domUpdateName();
  }
}
