describe("wordOrder", function() {

  it("will return an array of strings", function() {
    expect(wordOrder("are words")).to.eql(["1, words", "1, are"]);
  });

  it("will remove duplicates from the array of words", function() {
    expect(wordOrder("happy happy joy joy")).to.eql(["2, joy", "2, happy"]);
  });

  it("will lowercase all letters of a word", function() {
    expect(wordOrder("Words are REALLY coOl")).to.eql(["1, words", "1, really", "1, cool", "1, are"]);
  });

  it("will order the unique words of the string - by frequency", function() {
    expect(wordOrder("joy joy happy happy happy fun")).to.eql(["3, happy", "2, joy", "1, fun"])
  });

});
