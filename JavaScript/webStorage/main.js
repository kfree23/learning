const myObject = {
    name: "Krystal",
    hobbies: ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name);
    }
};

const myArray = ["eat", "sleep", "code"];

localStorage.setItem('myLocalStore', JSON.stringify(myObject));
const key = localStorage.key(0);
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);

//just change session to local and works the same