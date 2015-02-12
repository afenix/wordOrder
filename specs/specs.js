describe("wordOrder", function() {
  it("will return an array of strings", function() {
    expect(wordOrder("are words")).to.eql(["are", "words"]);
  });

  it("will remove duplicates from the array of words", function() {
    expect(wordOrder("happy happy joy joy")).to.eql(["happy", "joy"]);
  });

  it("will lowercase all letters of a word", function() {
    expect(wordOrder("Words are REALLY coOl")).to.eql(["words", "are",  "really", "cool"]);
  });

  it("will order the unique words of the string - by frequency", function() {
    expect(wordOrder("joy joy happy happy happy fun")).to.eql(["happy", "joy", "fun"])
  });

});
