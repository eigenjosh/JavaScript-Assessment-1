//1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
// careful not to uppercase the i in the word pair
var sentence = 'When i went to the mall i bought a pair of shoes.'
var otherSentence = "Other Sentence"


function upperCase(str) {
    var out = ''

    for (var n = 0; n < str.length; n++) {
        var char = str[n]
        var prevChar = str[n - 1]
        var nextChar = str[n + 1]
        var nextCases = [' ', "'", '.', ',', '!', '?']

        if (char == 'i' || char == 'I') {
            if (n == 0 || prevChar == ' ' && nextCases.includes(nextChar)) {

                out += 'I'
            } else {
                out += 'i'

            }
        } else {

            out += str[n]
var sentence = 'When i went to the mall i bought a pair of shoes.';
var out = ''

function upperCase(str) {
    for (var j = 0; j < str.length; j++) {
        var character = str.length[j]
        var nextChar = character[j + 1]
        var prevChar = character[j - 1]
        if (character == 'i' && prevChar == ' ' && nextChar == ' ') {
           
            character[j] += 'I'
            
        }
    }
    return out
}


//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';

function charCountA(str) {
    var lowerA = 0
    var upperA = 0

    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (char == 'a') {
            lowerA++
        } if (char == 'A') {
            upperA++
        }

    }

    console.log(lowerA)
    console.log(upperA)
}



//3. Given the following sentence: Uppercase the entire word scream each time it appears in the sentence 
//I SCREAM, you SCREAM, we all SCREAM for icecream

var text = 'I scream, you scream, we all scream for icecream';

function justScreaming(str) {
    for (i = 0; i < 3; i++) {
        text = text.replace("scream", "SCREAM")
    }
    console.log(text)
}
