describe('triangle', function() {
  it("is true when all sides are equal", function() {
    expect(triangle(3,3,3)).to.equal(true);
  });

  it("is true if two sides are equal", function() {
  expect(triangle(2,2,3)).to.equal(true);
  });

  it("is true is no sides are equal", function() {
    expect(triangle(1,2,3)).to.equal(true);
  });

  it("is false when none above are met", function() {
    expect(triangle(2,2,400)).to.equal(true);
  });
});
