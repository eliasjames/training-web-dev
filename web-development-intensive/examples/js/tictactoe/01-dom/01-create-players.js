var miles = new Player({
  'id'    : 'miles',
  'bio'   : 'Miles Dewey Davis III was an American jazz trumpeter, bandleader, and composer. He is among the most influential and acclaimed figures in the history of jazz and 20th century music.',
  'genre' : 'Jazz',
  'image' : 'http://vignette1.wikia.nocookie.net/marvelcinematicuniverse/images/e/e8/Miles_Davis.jpeg/revision/latest?cb=20161003223700',
  'name'  : 'Miles Davis',
});
var willie = new Player({
  'id'    : 'willie',
  'bio'   : 'Willie Hugh Nelson is an American musician, singer, songwriter, author, poet, actor, and activist. The critical success of the album Shotgun Willie, combined with the critical and commercial success of Red Headed Stranger and Stardust, made Nelson one of the most recognized artists in country music.',
  'genre' : 'Country',
  'image' : 'http://images.musictimes.com/data/images/full/1337/willie-nelson-studies-deeply-before-picking-tour-openers.jpg',
  'name'  : 'Willie Nelson'
}); 
var prince = new Player({
  'id'    : 'prince',
  'bio'   : 'Prince Rogers Nelson was an American singer-songwriter, actor, multi-instrumentalist, philanthropist, dancer and record producer. He was a musical innovator who was known for his eclectic work, flamboyant stage presence, extravagant dress and makeup, and wide vocal range.',
  'genre' : 'Funk',
  'image' : 'https://i.ytimg.com/vi/7NN3gsSf-Ys/maxresdefault.jpg',
  'name'  : 'Prince Rogers Nelson'
});

var players = [ miles, willie, prince ];

// this won't work here
// try it from the console instead
// reason why in next lesson
document.addEventListener( 'DOMContentLoaded', function() {
   players[0].setName( 'Miles Dewey Davis' );
});
