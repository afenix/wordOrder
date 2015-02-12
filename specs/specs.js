describe("wordOrder", function() {
  it("will return an array of strings", function() {
    expect(wordOrder("are words")).to.eql(["are", "words"]);
  });

  it("will order the string alphabetically", function() {
    expect(wordOrder("words are really really cool")).to.eql(["are", "cool", "really", "really", "words"]);
  });

  it("will lowercase all letters of a word", function() {
    expect(wordOrder("Words are REALLY really coOl")).to.eql(["are", "cool", "really", "really", "words"]);
  });

  it("will remove duplicates from the array of words", function() {
    expect(wordOrder("words are really really cool")).to.eql(["are", "cool", "really", "words"]);
  });

});
