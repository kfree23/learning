"use strict";

const makeError = () => {
    try {
        const name = "Dave";
        name = "Joe";
    } catch(err) {
        console.error(err.name);
    }
}
makeError();

async function getStats() {
    try {
        const response = await fetch('https://api.sports.com/stats');
        const data = await response.json();
        console.log(data);
    } catch(err) {
        console.log('Failed')
    }
}