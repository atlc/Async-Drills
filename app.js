/* INSTRUCTIONS */
// Un|comment out line 10 for the Async exercises
// Un|comment out line 33 for the Callbacks exercises
// Un|comment out line 79 for the Promises exercises
// Un|comment out line 106 for the Promise chaining exercises




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


/*
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

/**/



// /*
// Chaining Promises
let num = 1;

let resolveNum = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(num);
    }, 2000);
})
    .then((num) => num * 2)
    .then((num) => num * 4)
    .then((num) => num * 6)
    .then((num) => console.log(num));

// // Chaining promises with logging each step
// let num = 1;

// let resolveNum = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(num);
//         resolve(num);
//     }, 2000);
// })
//     .then((num) => {
//         console.log(num * 2);
//         return num * 2;
//     })
//     .then((num) => {
//         console.log(num * 4);
//         return num * 4;
//     })
//     .then((num) => {
//         console.log(num * 6);
//         return num * 6;
//     });

/**/