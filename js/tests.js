QUnit.test("should return zero when array is undefined", function( assert ) {
    var test_array;
    assert.equal(find_number_loop(test_array), 0, "Returned zero when array was undefined; equal succeeds");
});

QUnit.test("should return zero when array is null", function( assert ) {
    var test_array = null;
    assert.equal(find_number_loop(test_array), 0, "Returned zero when array was null; equal succeeds");
});

QUnit.test("should find the missing number", function( assert ) {
    var test_array = [2, 1, 5, 3];
    var missing_number_result = 4;
    assert.equal(find_number_loop(test_array), missing_number_result, "Returned the missing number which was 4: " + missing_number_result);
});
