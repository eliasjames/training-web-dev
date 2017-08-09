describe( 'dom test', function() {
  beforeEach( function() {
    jasmine.getFixtures().fixturesPath = 'base/fixtures';
    loadFixtures( '01-use-jquery.html' );
    master();
  });
  
  it( 'should start', function() {
    expect( $('#current-player') ).toBeInDOM();
  });

  it( 'should respond to clicks', function() {
    $( 'input[name="0-0"][value="player1"]' )[0].click();
    expect( $( '#current-player' ).html()).toEqual( 'Current player: two' );
  });
});
