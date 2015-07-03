    // Let's test this function
function isEven(val) {
    return val % 2 === 0;
}

QUnit.test( "hello test", function( assert ) {

    assert.ok(isEven(0), "Zero is an even number");
    assert.ok(isEven(2), 'So is two');
    assert.ok(!isEven(1), 'One is not an even number');

  // Fails
    assert.ok(isEven(3), 'Three is an even number');
});
