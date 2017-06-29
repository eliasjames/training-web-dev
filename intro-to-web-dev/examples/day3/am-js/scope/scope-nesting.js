function outer() {
  var a = 1;
  var b = 1;

  function inner() {
    a = 2;
    var c = 1;
    console.log( 'inner a', a ); // 2
    // inner can access outer
    console.log( 'inner b', b ); // 
  }
  inner();
  // outer cannot access inner 
  // error - not defined
  console.log( 'outer', c ); 
}
outer();
