window.resizeTo(240,180);

var ox = new OrientExpress();

QUnit.test( "QUnit is working", function( assert ) {
    assert.ok( 1 == "1", "QUnit is loaded" );
});

QUnit.test( "OrientExpress has loaded", function ( assert ) {
    assert.equal(ox.auto, true, "OrientExpress Has Loaded");
});

QUnit.test( "OrientExpress recognises a square page", function ( assert ) {
    window.resizeTo(100,100);

    ox.setOrientation();
    assert.equal(ox.width, 100, "Width is 100");
    assert.equal(ox.height, 100, "Height is 100");
    assert.equal(ox.portrait, false, "Not Portrait" );
    assert.equal(ox.landscape, false, "Not Landscape" );
    assert.equal(ox.orientation, "square", "Orientation is square" );
});

QUnit.test( "OrientExpress recognises a landscape page", function ( assert ) {
    window.resizeTo(200,100);

    ox.setOrientation();
    assert.equal(ox.width, 200, "Width is 200");
    assert.equal(ox.height, 100, "Height is 100");
    assert.equal(ox.portrait, false, "Not Portrait" );
    assert.equal(ox.landscape, true, "Is Landscape" );
    assert.equal(ox.orientation, "landscape", "Orientation is landscape" );
});

QUnit.test( "OrientExpress recognises a portrait page", function ( assert ) {
    window.resizeTo(100,200);

    ox.setOrientation();
    assert.equal(ox.width, 100, "Width is 100");
    assert.equal(ox.height, 200, "Height is 200");
    assert.equal(ox.portrait, true, "Is Portrait" );
    assert.equal(ox.landscape, false, "Not Landscape" );
    assert.equal(ox.orientation, "portrait", "Orientation is portrait" );
});
