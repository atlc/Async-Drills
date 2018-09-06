/*
// Async: Now and later

let num;

(function messageAndNumber() {
    console.log('Hello!');
    return num = 5;
})();

function productOfFour(n) {
    console.log(n*4);
}

setTimeout(() => {
    productOfFour(num);
}, 2000);
*/


// Callbacks

(function getWords() {
    // Will log words in ordinal fashion (logs 'first' ... 'fourth')
    let words = ["first", "fourth", "third", "second"];

    console.log(words[0]); // First
    setTimeout(() => {
        console.log(words[1]); // Fourth
    }, 3000);
    setTimeout(() => {
        console.log(words[2]); // Third
    }, 2000);
    setTimeout(() => {
        console.log(words[3]); // Second
    }, 1000);
})();

function countdown(num, callback) {

}

function done() {
    console.log('We\'re done with the countdown!');
}