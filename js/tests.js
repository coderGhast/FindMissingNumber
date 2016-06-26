QUnit.test("sum should return zero when array is undefined", function( assert ) {
    var test_array;
    assert.equal(find_number_sum(test_array), 0, "Returned zero when array was undefined; equal succeeds");
});

QUnit.test("sum should return zero when array is null", function( assert ) {
    var test_array = null;
    assert.equal(find_number_sum(test_array), 0, "Returned zero when array was null; equal succeeds");
});

QUnit.test("sum should find the missing number", function( assert ) {
    var test_array = [2, 9, 1, 7, 5, 3, 4, 6, 10];
    var missing_number_result = 8;
    assert.equal(find_number_sum(test_array), missing_number_result, "Returned the missing number which was 4: " + missing_number_result);
});

QUnit.test("looper should return zero when array is undefined", function( assert ) {
    var test_array;
    assert.equal(find_number_loop(test_array), 0, "Returned zero when array was undefined; equal succeeds");
});

QUnit.test("looper should return zero when array is null", function( assert ) {
    var test_array = null;
    assert.equal(find_number_loop(test_array), 0, "Returned zero when array was null; equal succeeds");
});

QUnit.test("looper should find the missing number", function( assert ) {
    var test_array = [2, 9, 1, 7, 5, 3, 4, 6, 10];
    var missing_number_result = 8;
    assert.equal(find_number_loop(test_array), missing_number_result, "Returned the missing number which was 4: " + missing_number_result);
});

QUnit.test("sorter should return zero when array is undefined", function( assert ) {
    var test_array;
    assert.equal(find_number_sorted(test_array), 0, "Returned zero when array was undefined; equal succeeds");
});

QUnit.test("sorter should return zero when array is null", function( assert ) {
    var test_array = null;
    assert.equal(find_number_sorted(test_array), 0, "Returned zero when array was null; equal succeeds");
});

QUnit.test("sorter should find the missing number", function( assert ) {
    var test_array = [2, 9, 1, 7, 5, 3, 4, 6, 10];
    var missing_number_result = 8;
    assert.equal(find_number_sorted(test_array), missing_number_result, "Returned the missing number which was 4: " + missing_number_result);
});
