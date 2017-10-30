//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

function addVars() {
    var sum = (num10 + string8 + one)
    return sum
}

// sum = "1081"

//2. write a loop that will log only numbers divisible by 3 between 20 - 100

function loop() {
    for (var i = 21; i < 100; i += 3) {
        console.log([i])
    }

}


//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];

var total = 0
function getAverage(scores) {
    for (var i = 0; i < scores.length; i++){
        total += scores[i]
    }
    var average = total / scores.length
    console.log(average)
}