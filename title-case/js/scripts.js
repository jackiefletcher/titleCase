var titleCase = function(string) {
  var title = string.toLowerCase().split(" ");
  var articles = ["the", "a", "an", "and", "but", "or", "for", "nor"];
  var punctuation = [",", ".", ":", ";", "?", "!"];
  var answer = [];

  title.forEach(function(word, idx) {
    var punctuationTrue = "";

    if (punctuation.indexOf(word.slice(-1)) !== -1) {
      punctuationTrue = word.slice(-1);
      word = word.slice(0,-1);
    }

    var isNotArticle = articles.indexOf(word) === -1;
    var isAtBeginning = idx === 0;
    var isAtEnd = idx === (title.length - 1);

    if (isNotArticle || isAtBeginning || isAtEnd) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    answer.push(word + punctuationTrue);
  });

  return answer.join(" ");
};
