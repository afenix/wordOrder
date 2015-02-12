var wordOrder = function(paragraph) {
  var paragraph = paragraph.toLowerCase().split(" ");
  var sortedWords = paragraph.sort();
  return sortedWords;
};



  // var paragraph = paragraph.toLowerCase();
  // return paragraph;
// $(document).ready(function() {
//   $("form#word-order").submit(function(event) {
//     var number = ($("input#paragraph").val());
//     var result = wordOrder(werds);
//
//     $(".werds").text(result);
//     $("#result").show();
//
//     event.preventDefault();
//   });
// });
