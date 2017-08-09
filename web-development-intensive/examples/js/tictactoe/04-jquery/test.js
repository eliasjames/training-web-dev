describe( 'dom test', function() {
  beforeEach( function() {
    jasmine.getFixtures().fixturesPath = 'base/fixtures';
    loadFixtures( '01-use-jquery.html' );
    master();
  });
  it( 'should run', function() {
		console.log( 'miles', document.getElementById('current-player'));
    expect($('#current-player')[0]).toBeInDOM();
  });
});
