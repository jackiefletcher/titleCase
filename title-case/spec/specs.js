describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("chocolate")).to.equal("Chocolate");
  });

  it("capitalizes all the words in the title", function() {
    expect(titleCase("chocolate delicious yum")).to.equal("Chocolate Delicious Yum");
  });

  it("does not capitalizes the articles (the, a, an)", function() {
    expect(titleCase("chocolate - the thing")).to.equal("Chocolate - the Thing");
  });

  it("will capitalize the articles (the, a, an) if it is the first word of the title", function() {
    expect(titleCase("the best chocolate - the world")).to.equal("The Best Chocolate - the World");
  });

  it("will allow for mixed cases in the input", function() {
    expect(titleCase("THE best CHOCOLATE eVER")).to.equal("The Best Chocolate Ever");
  });

  it("will allow for punctuation within the title and when last word is an article", function() {
    expect(titleCase("what do we do this for, for?")).to.equal("What Do We Do This for, For?");
  });


});
