/* INSTRUCTIONS */
// Comment out line 7 for the Async exercises
// Comment out line 28 for the Callbacks exercises
// Comment out line XX for the Promises exercises
// Comment out line XX for the Promises pt 2 exercises

/*
// Async: Now and later

// Global assignment so we can return values into it
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
/**/


/*
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
    if (num >= 1) {
        console.log(num);
        num--;
        setTimeout(() => {
            countdown(num, done); // https://www.google.com/search?q=recursion :)
        }, 1000);
        if (num === 0) {
            callback();
        }
    }
}

countdown(5, done);


function done() {
    console.log('We\'re done with the countdown!');
}

/**/

// Promises
let amIHungry = false;

let orderChickenSandwich = new Promise((resolve, reject) => {
    if (amIHungry) {
        let sammie = {
            sandwich: 'chicken',
            veggies: 'lettuce'
        };
        resolve(sammie);
    } else {
        let notHungryError = new Error('You are not hungry at this time.');
        reject(notHungryError);
    }
});

(function orderFood() {
    orderChickenSandwich
        .then((sammie) => console.log(sammie))
        .catch((notHungryError) => console.error(notHungryError));
})();