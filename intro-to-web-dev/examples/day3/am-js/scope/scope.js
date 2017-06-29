function outer() {
  var a = 1;

  function inner() {
    var a = 2;
    console.log( 'inner', a ); // 2
  }
  inner();
  console.log( 'outer', a ); // 1
}
outer();
