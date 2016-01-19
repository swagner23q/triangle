describe('triangle', function() {
  it("is true when all sides are equal", function() {
    expect(triangle("equilateral")).to.equal(true);
  });

it("is true if two sides are equal", function() {
  expect(triangle("isosceles")).to.equal(true);
});

});
