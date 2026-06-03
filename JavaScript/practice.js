//Closures

function makeGreeting(name) {
    return function() {
        console.log(`Hello, ${name}!`)
    }
}
function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount() {
        return count
    }

    return {increment, getCount};
}

const counter = createCounter();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);

let score = 0;

function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
}


//rest parameters

function openFridge(...foods){
    console.log(foods);
}

const food1 = 'pizza';
const food2 = 'hamburger';
const food3 = 'hotdog';
const food4 = 'sushi';
const food5 = 'ramen';

openFridge(food1, food2, food3, food4,food5)