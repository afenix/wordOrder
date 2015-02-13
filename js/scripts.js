var wordOrder = function(paragraph) {
  var paragraph = paragraph.toLowerCase().split(" ");
  var uniques = [];
  var i = 0;
  var counter = 0;
  var wordCounter = {};
  var listWords = [];

  for(i=0; i < paragraph.length; i++) {
    if ((i === paragraph.indexOf(paragraph[i])) || paragraph.indexOf(paragraph[i]) === paragraph.lastIndexOf(paragraph[i])) {
      uniques.push(paragraph[i]);
    }
  }

  uniques.forEach(function(word) {
    paragraph.forEach(function(old_word) {
      if (word === old_word) {
        counter = counter + 1;
      }
    });

    wordCounter[counter] = word;
    listWords.push(counter + ", " + wordCounter[counter]);
    counter = 0;
  });

  listWords.sort().reverse();
  return listWords;
};

$(document).ready(function() {
  $("form#word-order").submit(function(event) {
    var paragraph = ($("input#paragraph").val());
    var result = wordOrder(paragraph);

    $(".werds").text(result);
    $("#result").show();

    event.preventDefault();
  });
});
