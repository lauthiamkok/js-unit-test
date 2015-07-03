    // Let's test this function
function isEven(val) {
    return val % 2 === 0;
}

//alert(isEven(0)); // true
//alert(isEven(2)); // true
//alert(isEven(3)); // false

QUnit.test( "hello test", function( assert ) {

    // Specify how many assertions are expected to run within a test.
    assert.expect(4);

    // Assertions - ok
    assert.equal(isEven(0), true, "Zero is an even number");
    assert.equal(isEven(2), true, 'So is two');
    assert.equal(!isEven(1), true, 'One is not an even number');

  // Assertions - Fails
    assert.equal(isEven(3), true, 'Three is an even number');
});
