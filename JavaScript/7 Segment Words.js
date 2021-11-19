// Find the longest English word that can be shown on 7 segment displays.

var fs = require("fs");
var words = fs.readFileSync("words.txt").toString(); // From  https://github.com/dwyl/english-words
words = words.split("\n");

var badletters = /[gkmqvwxzio]/;
var longestAcceptableWord = "";

for (var testWord of words) {

    if ((testWord.length > longestAcceptableWord.length) &&
        (!testWord.match(badletters))) {

            longestAcceptableWord = testWord;
        }
}

for (var testWord of words) {
    if ((testWord.length == longestAcceptableWord.length) &&
        (!testWord.match(badletters))) {

        console.log(testWord);
    }
}
