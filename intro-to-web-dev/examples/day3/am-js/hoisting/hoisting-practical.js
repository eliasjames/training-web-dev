function practicalHoisting( someDependency ) {
  // jQuery isn't ready yet - this line would error if executed
  var el = jQuery( 'body' );
}

// wait for load event, then execute safely
document.addEventListener( 'jquery-ready', practicalHoisting );
