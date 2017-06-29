function makeinnerCounter() {
  var innerCounter = 0;

  function increment() {
    innerCounter++;
    return innerCounter;
  }

  return increment;
}

var myCounter = makeCounter();
// outer scope gets innerCounter as return value 
// but has no access to variable directly
console.log( myCounter() );
console.log( myCounter() );
console.log( myCounter() );
