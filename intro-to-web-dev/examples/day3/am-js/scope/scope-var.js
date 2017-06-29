function outer() {
  var a = 1;

  function inner() {
    // without var, inner accesses outer variable
    a = 2;
    console.log( 'inner', a ); // 2
  }
  inner();
  // outer a is now 2
  console.log( 'outer', a ); // 2
}
outer();
