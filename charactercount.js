function countLetters(input) {
  var letterCountSummary = {};
  var listOfCharacters = input.split('');
  listOfCharacters.forEach(function(char, index, array){
    if (letterCountSummary[char]) {
      letterCountSummary[char] += 1;
    } else {
       letterCountSummary[char] = 0;
       letterCountSummary[char] += 1;
    }
  });
  return letterCountSummary;
}

console.log(countLetters("purple"));