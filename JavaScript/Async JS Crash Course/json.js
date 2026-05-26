const myObj = {
    name: "Krystal",
    hobbies: ["hoop", "game", "code"],
    hello: function () {
        console.log("Hello!");
    }
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name); // doesnt work because it is string data

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);

JSON.parse(player.points)