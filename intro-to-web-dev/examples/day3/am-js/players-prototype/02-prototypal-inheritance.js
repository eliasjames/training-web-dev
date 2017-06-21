function Human( newObj ) {
  this.name = newObj.name;
  this.birthdate = newObj.birthdate;
  this.blurb = function() {
    var birthblurb = ( birthdate ) ? ', born ' + birthdate : ', birthdate unknown';
    var blurb = this.name + birthblurb + ', is a person.';
    console.log( this.name + ', born ' + birthdate + ', is a person.' );
  }
  return this;
}
function Player( newObj ) {
  var person = new Human( newObj );
  this.name = person.name;
  this.birthdate = person.birthdate;
  this.genre = newObj.genre;
  this.image = newObj.image;
  this.bio = newObj.bio;
  this.blurb = function() {
    console.log( this.name + ' played ' + this.genre );
  };
}

var miles = new Player({
  'name'  : 'Miles Davis',
  'genre' : 'Jazz',
  'image' : 'http://vignette1.wikia.nocookie.net/marvelcinematicuniverse/images/e/e8/Miles_Davis.jpeg/revision/latest?cb=20161003223700',
  'bio'   : 'Miles Dewey Davis III was an American jazz trumpeter, bandleader, and composer. He is among the most influential and acclaimed figures in the history of jazz and 20th century music.'
});
var willie = new Player({
  'name'  : 'Willie Nelson',
  'genre' : 'Country',
  'image' : 'http://images.musictimes.com/data/images/full/1337/willie-nelson-studies-deeply-before-picking-tour-openers.jpg',
  'bio'   : 'Willie Hugh Nelson is an American musician, singer, songwriter, author, poet, actor, and activist. The critical success of the album Shotgun Willie, combined with the critical and commercial success of Red Headed Stranger and Stardust, made Nelson one of the most recognized artists in country music.'
}); 
var prince = new Player({
  'name'  : 'Prince',
  'genre' : 'Funk',
  'image' : 'https://i.ytimg.com/vi/7NN3gsSf-Ys/maxresdefault.jpg',
  'bio'   : 'Prince Rogers Nelson was an American singer-songwriter, actor, multi-instrumentalist, philanthropist, dancer and record producer. He was a musical innovator who was known for his eclectic work, flamboyant stage presence, extravagant dress and makeup, and wide vocal range.'
});

var players = [ miles, willie, prince ];
