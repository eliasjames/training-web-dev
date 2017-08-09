describe( 'dom test', function() {
  it( 'should run', function() {
		document.body.innerHTML = window.__html__[ '01-js-dom.html' ];
		expect(document.getElementById('miles')).toBeDefined();
  });
});
