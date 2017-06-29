function outer() {
  var enclosed;

  function inner() {
    return enclosed === undefined;
  }

  return inner;
}

var myVar = outer();
// as long as myVar exists, 
// garbage collector can't trash inner 
// (and therefore outer)
// because it may be needed later:
var useEnclosed = myVar();
console.log( useEnclosed );
